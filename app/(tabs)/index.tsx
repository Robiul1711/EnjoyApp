import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.75;

export const TRAVEL_DATA = [
  {
    id: "1",
    title: "Granada Luxury Belek TR",
    subtitle: "Popular Resort! 🤩",
    location: "Turkey",
    price: "379",
    rating: 5,
    type: "All Inclusive",
    category: "Hotel",
    image: require("../../assets/travel/turkey.png"),
    description:
      "Experience the ultimate luxury at Granada Luxury Belek. This resort offers world-class amenities, stunning pools, and private beach access. Perfect for families and couples alike.",
    tag: "Featured",
    tagColor: "bg-blue-500",
  },
  {
    id: "2",
    title: "5* All inclusive Turkey TR",
    subtitle: "Jaw dropping price! 🤯",
    location: "Turkey",
    price: "184",
    rating: 5,
    type: "All Inclusive",
    category: "Hotel + Flight",
    image: require("../../assets/travel/sharm.png"),
    description:
      "An unbeatable deal for a 5-star experience in Turkey. Enjoy all-inclusive dining, entertainment, and relaxation at one of the top-rated hotels in the region.",
    tag: "Featured",
    tagColor: "bg-blue-600",
  },
  {
    id: "3",
    title: "4* all inclusive Sharm el Sheikh EG",
    subtitle: "Sunny Escape! ☀️",
    location: "Egypt",
    price: "239",
    rating: 4,
    type: "All Inclusive",
    category: "Hotel + Flight",
    image: require("../../assets/travel/morocco.png"),
    description:
      "Escape to the sun-drenched shores of Sharm el Sheikh. This 4-star all-inclusive package offers the perfect blend of adventure and relaxation by the Red Sea.",
    tag: "Hot Deal",
    tagColor: "bg-orange-500",
  },
  {
    id: "4",
    title: "Cheap and cheerful Morocco MA",
    subtitle: "1 week escape! 🌴",
    location: "Morocco",
    price: "129",
    rating: 3,
    type: "Self-Catering",
    category: "Hotel + Flight",
    image: require("../../assets/travel/japan.png"),
    description:
      "A budget-friendly way to explore the magic of Morocco. Spend a week in a traditional setting with easy access to local markets and stunning landscapes.",
    tag: "Hot Deal",
    tagColor: "bg-red-500",
  },
];

export default function Home() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950">
      <View className="p-6">
        <View className="flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Enjoy Escapes
            </Text>
            <Text className="text-slate-500 dark:text-slate-400">
              Find your next adventure
            </Text>
          </View>
          <TouchableOpacity className="bg-white dark:bg-slate-900 p-2 rounded-full shadow-sm border border-slate-100 dark:border-slate-800">
            <Ionicons
              name="notifications-outline"
              size={24}
              color={isDark ? "#e2e8f0" : "#1e293b"}
            />
          </TouchableOpacity>
        </View>

        <Text className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Featured Escapes
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
          snapToInterval={CARD_WIDTH + 20}
          decelerationRate="fast"
        >
          {TRAVEL_DATA.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              onPress={() =>
                router.push({
                  pathname: "/details/[id]",
                  params: { id: item.id },
                })
              }
              className="mr-5 bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg shadow-slate-200 dark:shadow-none border border-slate-100 dark:border-slate-800"
              style={{ width: CARD_WIDTH }}
            >
              <View className="relative h-48">
                <Image
                  source={item.image}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View
                  className={`absolute top-4 left-4 ${item.tagColor} px-3 py-1 rounded-full flex-row items-center`}
                >
                  <Ionicons name="star" size={12} color="white" />
                  <Text className="text-white text-xs font-bold ml-1">
                    {item.tag}
                  </Text>
                </View>
                {item.tag === "Hot Deal" && (
                  <View className="absolute top-4 right-4 bg-red-100 dark:bg-red-900/50 p-2 rounded-full">
                    <Ionicons name="flame" size={16} color="#ef4444" />
                  </View>
                )}
              </View>

              <View className="p-4">
                <Text
                  className="text-base font-bold text-slate-900 dark:text-white leading-tight"
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
                <Text className="text-slate-500 dark:text-slate-400 text-sm mt-1 mb-2 italic">
                  {item.subtitle}
                </Text>

                <View className="flex-row items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Ionicons
                      key={i}
                      name="star"
                      size={14}
                      color={
                        i < item.rating
                          ? "#3b82f6"
                          : isDark
                            ? "#334155"
                            : "#e2e8f0"
                      }
                    />
                  ))}
                  <Text className="text-slate-400 dark:text-slate-500 text-xs ml-2">
                    {item.type} • {item.category}
                  </Text>
                </View>

                <View className="flex-row justify-between items-end border-t border-slate-50 dark:border-slate-800 pt-3">
                  <View>
                    <Text className="text-slate-400 dark:text-slate-500 text-[10px] uppercase font-bold tracking-tighter">
                      from
                    </Text>
                    <View className="flex-row items-baseline">
                      <Text className="text-blue-600 dark:text-blue-400 text-xl font-black">
                        £{item.price}
                      </Text>
                      <Text className="text-slate-400 dark:text-slate-500 text-xs ml-1">
                        pp
                      </Text>
                    </View>
                  </View>
                  <View className="bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-lg">
                    <Text className="text-blue-600 dark:text-blue-400 text-[10px] font-bold">
                      £19 pp deposit
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Categories Section */}
        <Text className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-4">
          Categories
        </Text>
        <View className="flex-row flex-wrap gap-4">
          {[
            { icon: "umbrella-outline", name: "Beach" },
            { icon: "business-outline", name: "City" },
            { icon: "bed-outline", name: "Luxury" },
            { icon: "heart-outline", name: "Couples" },
          ].map((cat, idx) => (
            <TouchableOpacity
              key={idx}
              className="bg-white dark:bg-slate-900 px-4 py-4 rounded-3xl items-center justify-center flex-1 min-w-[80px] shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <Ionicons name={cat.icon as any} size={24} color="#3b82f6" />
              <Text className="mt-2 text-slate-600 dark:text-slate-300 font-bold text-xs">
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
