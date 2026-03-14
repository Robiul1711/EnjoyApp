import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TRAVEL_DATA } from "../(tabs)/index";

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const item = TRAVEL_DATA.find((t) => t.id === id);

  if (!item) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-slate-950">
        <Text className="dark:text-white">Escape not found</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-blue-500 mt-4">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white dark:bg-slate-950">
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <ScrollView className="flex-1" bounces={false}>
        {/* Header Image */}
        <View className="relative h-[450px]">
          <Image
            source={item.image}
            className="w-full h-full"
            resizeMode="cover"
          />

          {/* Top Controls */}
          <SafeAreaView className="absolute top-0 left-0 right-0 p-4">
            <View className="flex-row justify-between items-center px-4">
              <TouchableOpacity
                onPress={() => router.back()}
                className="bg-black/20 w-10 h-10 rounded-full items-center justify-center backdrop-blur-md"
              >
                <Ionicons name="chevron-back" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-black/20 w-10 h-10 rounded-full items-center justify-center backdrop-blur-md">
                <Ionicons name="heart-outline" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          <View className="absolute bottom-12 left-6 right-6">
            <View
              className={`${item.tagColor} self-start px-3 py-1 rounded-full mb-3`}
            >
              <Text className="text-white text-xs font-bold">{item.tag}</Text>
            </View>
            <Text className="text-white text-3xl font-black">{item.title}</Text>
            <View className="flex-row items-center mt-2">
              <Ionicons name="location" size={16} color="white" />
              <Text className="text-white/90 ml-1 font-medium">
                {item.location}
              </Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View className="bg-white dark:bg-slate-950 -mt-10 rounded-t-[40px] p-8">
          <View className="flex-row justify-between items-center mb-8">
            <View className="flex-row items-center">
              <View className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-xl mr-3">
                <Ionicons name="star" size={20} color="#3b82f6" />
              </View>
              <View>
                <Text className="text-slate-900 dark:text-white font-bold text-lg">
                  {item.rating}.0
                </Text>
                <Text className="text-slate-400 dark:text-slate-500 text-xs">
                  Rating
                </Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <View className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-xl mr-3">
                <Ionicons name="time" size={20} color="#f97316" />
              </View>
              <View>
                <Text className="text-slate-900 dark:text-white font-bold text-lg">
                  7 Nights
                </Text>
                <Text className="text-slate-400 dark:text-slate-500 text-xs">
                  Duration
                </Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <View className="bg-green-50 dark:bg-green-900/20 p-2 rounded-xl mr-3">
                <Ionicons name="airplane" size={20} color="#22c55e" />
              </View>
              <View>
                <Text className="text-slate-900 dark:text-white font-bold text-lg">
                  Included
                </Text>
                <Text className="text-slate-400 dark:text-slate-500 text-xs">
                  Flights
                </Text>
              </View>
            </View>
          </View>

          <Text className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            About the Escape
          </Text>
          <Text className="text-slate-500 dark:text-slate-400 leading-[26px] mb-8">
            {item.description}
          </Text>

          <View className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl mb-8">
            <Text className="text-slate-900 dark:text-slate-200 font-bold mb-4">
              Package Perks
            </Text>
            <View className="flex-row items-center mb-3">
              <Ionicons name="checkmark-circle" size={20} color="#3b82f6" />
              <Text className="text-slate-600 dark:text-slate-400 ml-3">
                Free Airport Transfer
              </Text>
            </View>
            <View className="flex-row items-center mb-3">
              <Ionicons name="checkmark-circle" size={20} color="#3b82f6" />
              <Text className="text-slate-600 dark:text-slate-400 ml-3">
                Breakfast & Dinner Included
              </Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="checkmark-circle" size={20} color="#3b82f6" />
              <Text className="text-slate-600 dark:text-slate-400 ml-3">
                24/7 Concierge Service
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer / Booking Bar */}
      <View
        className="bg-white dark:bg-slate-900 px-8 pt-4 pb-10 flex-row justify-between items-center border-t border-slate-100 dark:border-slate-800"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -10 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 20,
        }}
      >
        <View>
          <Text className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider">
            Total Price
          </Text>
          <View className="flex-row items-baseline">
            <Text className="text-slate-900 dark:text-white text-3xl font-black">
              £{item.price}
            </Text>
            <Text className="text-slate-400 dark:text-slate-500 text-sm ml-1 font-bold">
              /pp
            </Text>
          </View>
        </View>
        <TouchableOpacity className="bg-blue-600 px-10 py-4 rounded-2xl shadow-lg shadow-blue-300 dark:shadow-none">
          <Text className="text-white font-bold text-lg">Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
