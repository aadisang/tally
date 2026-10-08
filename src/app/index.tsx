import { useQuery } from "convex/react";
import { Text, View } from "react-native";
import { api } from "../../convex/_generated/api";

export default function Index() {
  const tasks = useQuery(api.tasks.get);

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      {tasks === undefined ? (
        <Text className="text-black dark:text-white">Loading tasks…</Text>
      ) : tasks.length === 0 ? (
        <Text className="text-black dark:text-white">No tasks yet.</Text>
      ) : (
        tasks.map((task) => (
          <Text key={task._id} className="text-black dark:text-white">
            {task.text}
          </Text>
        ))
      )}
    </View>
  );
}
