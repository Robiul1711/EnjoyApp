import { Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-row items-center bg-slate-100 px-4 py-3 rounded-2xl mb-6">
        <Ionicons name="search" size={20} color="#64748b" />
        <TextInput 
          placeholder="Search for escapes..." 
          className="flex-1 ml-3 text-slate-900 font-medium"
          placeholderTextColor="#94a3b8"
        />
      </View>
      
      <Text className="text-xl font-bold text-slate-800 mb-4">Trending Searches</Text>
      <View className="flex-row flex-wrap gap-2">
        {['Beach', 'Mountain', 'City Break', 'Luxury'].map((item) => (
          <View key={item} className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-full">
            <Text className="text-slate-600 font-semibold">{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
