import { FC } from "react";
import { View } from "react-native";

type BoardRowProps = {
  row: [Space, Space, Space];
};

export const BoardRow: FC<BoardRowProps> = ({ row }) => {
  return (
    <View className="flex-row">
      {row.map((value, index) => {
        const color = value === 0 ? "blue" : "red";

        return (
          <View
            key={index}
            className={`w-6 h-6 rounded m-[1px] bg-${color}-500 ${value === null && "bg-slate-200"}`}
          />
        );
      })}
    </View>
  );
};
