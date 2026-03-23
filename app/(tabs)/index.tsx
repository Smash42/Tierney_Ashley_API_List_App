import { fetchCharacters } from "@/services/api";
import useFetch from "@/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { data, loading, error } = useFetch(fetchCharacters);

  const {
    data: characters,
    loading: dataLoading,
    error: dataError,
  } = useFetch(() => fetchCharacters({ query: "" }));

  if (loading)
    return (
      <Text className="text-4xl justify-center text-center bg-blue-600 text-white">
        {" "}
        Loading API Data...{" "}
      </Text>
    );
  if (error)
    return (
      <Text className="text-4xl justify-center text-center bg-red-600 text-white">
        {" "}
        Error: {error.message}{" "}
      </Text>
    );

  return (
    <View className="flex-1 justify-center bg-red-100">
      <Text className="text-4xl text-center text-emerald-500">
        Tierney's API List App
      </Text>
      <Text className="text-2xl "> Harry Potter Characters</Text>
      <Text> </Text>
      {dataLoading ? (
        <ActivityIndicator />
      ) : dataError ? (
        <Text className="text-4xl text-center bg-red-600 text-white">
          {" "}
          Error: {dataError?.message}
        </Text>
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text className="text-xl items-center">
                {" "}
                - {item.name}: {item.house || "Unknown"}
              </Text>
              <Text> {} </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
