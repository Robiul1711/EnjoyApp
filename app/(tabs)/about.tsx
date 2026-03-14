import { Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function About() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-8 items-center bg-blue-50">
        <View className="bg-white p-4 rounded-3xl shadow-sm mb-4">
          <Ionicons name="airplane" size={48} color="#3b82f6" />
        </View>
        <Text className="text-2xl font-bold text-slate-900">Enjoy Escapes</Text>
        <Text className="text-slate-500 mt-2">Versio 1.0.0</Text>
      </View>
      
      <View className="p-6">
        <Text className="text-lg font-bold text-slate-800 mb-4">Our Mission</Text>
        <Text className="text-slate-600 leading-6 mb-8">
          We are dedicated to helping you find the perfect vacation spot. Our team of experts
          scours the globe for the best deals and the most beautiful locations.
        </Text>
        
        <View className="bg-slate-50 p-6 rounded-2xl">
          <Text className="text-slate-800 font-bold mb-2">Connect With Us</Text>
          <Text className="text-slate-500">support@enjoyescapes.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}
