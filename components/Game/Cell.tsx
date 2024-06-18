// An extended TouchableOpacity that allows players to press and set a piece on the board
import React, { FC } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { Piece } from "./Piece";

type CellProps = {
  value: Space;
  onPress: () => void;
  disabled: boolean;
};

export const Cell: FC<CellProps> = ({ value, onPress, disabled }) => {
  return (
    <View className="w-[33%] h-[33%] flex items-center justify-center p-1">
      <TouchableOpacity
        disabled={disabled}
        className="w-full h-full flex items-center justify-center bg-white rounded"
        onPress={() => {
          if (value === null) {
            onPress();
          } else {
            Alert.alert("Invalid Move", "This space is already taken");
          }
        }}
      >
        {value !== null && <Piece player={value} />}
      </TouchableOpacity>
    </View>
  );
};
