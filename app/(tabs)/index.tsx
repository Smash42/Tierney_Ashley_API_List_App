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
    <View className="flex-1 justify-center bg-slate-300">
      <Text className="text-4xl text-center text-emerald-800 mt-20">
        Tierney's API List App
      </Text>
      <Text className="text-2xl font-bold underline pl-5 mt-5">
        {" "}
        Harry Potter Characters
      </Text>
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
              <Text className="text-xl items-center font-medium">
                {" "}
                - {item.name}
              </Text>
              <Text className="text-lg pl-7">
                {" "}
                House: {item.house || "Unknown"}{" "}
              </Text>
              <Text> {} </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
