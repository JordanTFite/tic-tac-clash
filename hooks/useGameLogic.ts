// Shares logic with game components

import { useCallback } from "react";
import { Alert } from "react-native";
import { GameState, useGameStore } from "@/stores/gameStore";

import { checkForWin, placePiece, isBoardFull } from "@/utils/gameUtils";
import { addMatchToHistory } from "@/utils/historyUtils";
import { chooseRandomPlace } from "@/utils/computerUtils";

export const useGameLogic = () => {
  const { board, currentTurn, updateGame, players } = useGameStore();

  /**
   * Check if the game is over and update the game state
   * @param newBoard The new board state
   * @returns True if the game is over, false otherwise
   */
  const checkForWinner = useCallback(
    async (newBoard: Board) => {
      const playerWon = checkForWin(newBoard, currentTurn);
      if (playerWon) {
        updateGame({ state: GameState.GameOver, winner: currentTurn });

        // Update the LocalStorage history
        await addMatchToHistory({
          board: newBoard,
          date: new Date(),
          winner: players[currentTurn],
          winningColor: currentTurn === 0 ? "Blue" : "Red",
          tie: false,
        });

        Alert.alert(`${players[currentTurn].title} wins!`);

        return true;
      }

      if (isBoardFull(newBoard)) {
        updateGame({ state: GameState.GameOver });

        await addMatchToHistory({
          board: newBoard,
          date: new Date(),
          winner: null,
          tie: true,
        });

        Alert.alert("It's a tie!");
      }

      return false;
    },
    [currentTurn, players, updateGame],
  );

  /**
   * Place a piece on the board and check for a winner
   * @param row The row to place the piece
   * @param col The column to place the piece
   */
  const takeTurn = useCallback(
    async (row: number, col: number) => {
      const newBoard = placePiece({
        board,
        player: currentTurn,
        row,
        col,
      });

      updateGame({ board: newBoard });
      const winDetected = await checkForWinner(newBoard);

      if (winDetected) return;

      updateGame({ currentTurn: currentTurn === 0 ? 1 : 0 });
    },
    [board, checkForWinner, currentTurn, updateGame],
  );

  const takeComputerTurn = useCallback(async () => {
    const { row, col } = chooseRandomPlace(board);
    await takeTurn(row, col);
  }, [board, takeTurn]);

  return {
    takeTurn,
    takeComputerTurn,
  };
};
