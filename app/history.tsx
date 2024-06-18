import { View, FlatList, Alert } from "react-native";
import { clearMatchHistory, getMatchHistory } from "@/utils/historyUtils";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { router } from "expo-router";
import { ResultCard } from "@/components/History/ResultCard";
import { EmptyResults } from "@/components/History/EmptyResults";

const History = () => {
  const [history, setHistory] = useState<Result[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const results = await getMatchHistory();
      setHistory(results);
    };
    fetchHistory();
  }, []);

  const handleClear = () => {
    Alert.alert(
      "Delete Match History",
      "Are you sure you want to delete your match history?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            clearMatchHistory();
            router.replace("../");
          },
        },
      ],
    );
  };

  return (
    <View className="flex-1 items-center w-full p-2">
      <FlatList
        data={history}
        renderItem={({ item: result, index }) => (
          <ResultCard index={index} result={result} />
        )}
        ListEmptyComponent={EmptyResults}
        className="w-full flex-1"
      />
      <Button
        disabled={history.length === 0}
        onPress={handleClear}
        title="Delete Match History"
        className="w-full mb-8 bg-red-500"
      />
    </View>
  );
};

export default History;
