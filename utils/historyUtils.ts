// Used to store and retrieve match history.

import AsyncStorage from "@react-native-async-storage/async-storage";

const MATCH_HISTORY_KEY = "match-history";

/**
 * Saves the match result to the device's storage.
 * @param result The result of the match.
 */
export const addMatchToHistory = async (result: Result) => {
  try {
    const history: Result[] = await getMatchHistory();
    history.unshift(result);

    await AsyncStorage.setItem(MATCH_HISTORY_KEY, JSON.stringify(history));
  } catch (e) {
    throw new Error(
      "An unexpected error occurred while saving the match history",
    );
  }
};

/**
 * Retrieves the match history from the device's storage.
 * @returns The match history.
 */
export const getMatchHistory = async () => {
  try {
    const historyString = await AsyncStorage.getItem(MATCH_HISTORY_KEY);
    return historyString ? JSON.parse(historyString) : [];
  } catch (e) {
    throw new Error(
      "An unexpected error occurred while retrieving the match history",
    );
  }
};

/**
 * Clears the match history from the device's storage.
 */
export const clearMatchHistory = async () => {
  try {
    await AsyncStorage.removeItem(MATCH_HISTORY_KEY);
  } catch (e) {
    throw new Error(
      "An unexpected error occurred while clearing the match history",
    );
  }
};
