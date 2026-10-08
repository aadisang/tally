import { useQuery } from "convex/react";
import { Text, View } from "react-native";
import { api } from "../../convex/_generated/api";

export default function Index() {
  const tasks = useQuery(api.tasks.get);

  return (
    <View className="flex-1 items-center justify-center">
      {tasks === undefined ? (
        <Text>Loading tasks…</Text>
      ) : tasks.length === 0 ? (
        <Text>No tasks yet.</Text>
      ) : (
        tasks.map((task) => <Text key={task._id}>{task.text}</Text>)
      )}
    </View>
  );
}
