import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LegalScreen() {
  const router = useRouter();

  const sections = [
    {
      title: "About Enjoy Escapes",
      content: "Enjoy Escapes is a leading travel platform dedicated to providing the best vacation experiences. We specialize in luxury resorts, all-inclusive packages, and budget-friendly city breaks."
    },
    {
      title: "Deal Information & Price Disclaimer",
      content: "All prices shown are 'starting from' and subject to availability. Prices may vary based on flight availability and dates. We strive to provide the most accurate pricing, but final costs will be confirmed at the time of booking."
    },
    {
      title: "Third-Party Websites",
      content: "Our application may contain links to third-party travel providers. We are not responsible for the content or privacy practices of these external sites."
    },
    {
      title: "Privacy Policy",
      content: "Your privacy is important to us. We collect only the information necessary to provide you with the best travel recommendations. We do not sell your personal data to third parties."
    },
    {
      title: "Limitation of Liability",
      content: "Enjoy Escapes acts as an intermediary between travelers and service providers. We are not liable for any changes, delays, or cancellations made by airlines or hotels."
    }
  ];

  return (
    <View className="flex-1 bg-white dark:bg-slate-950">
      <SafeAreaView className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <View className="flex-row items-center px-4 py-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2">
            <Ionicons name="arrow-back" size={24} color="#3b82f6" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-slate-900 dark:text-white ml-2">Legal Info</Text>
        </View>
      </SafeAreaView>

      <ScrollView className="flex-1 p-6">
        <Text className="text-slate-400 dark:text-slate-500 mb-6 font-medium">Last updated: March 2026</Text>
        
        {sections.map((section, idx) => (
          <View key={idx} className="mb-8">
            <Text className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">{section.title}</Text>
            <Text className="text-slate-600 dark:text-slate-400 leading-6 text-base">{section.content}</Text>
          </View>
        ))}

        <View className="h-20" />
      </ScrollView>
    </View>
  );
}
