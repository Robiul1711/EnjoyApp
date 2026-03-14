import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

type BaseItem = {
  id: string;
  label: string;
  icon: string;
  iconColor: string;
};

type ToggleItem = BaseItem & {
  type: "toggle";
  value: boolean;
  onPress: () => void;
};

type LinkItem = BaseItem & {
  type: "link";
  onPress: () => void;
};

type SettingsItem = ToggleItem | LinkItem;

type SettingsSection = {
  title: string;
  items: SettingsItem[];
};

export default function SettingsScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const router = useRouter();
  const isDark = colorScheme === "dark";

  const sections: SettingsSection[] = [
    {
      title: "Preferences",
      items: [
        {
          id: "appearance",
          label: "Dark Mode",
          icon: isDark ? "moon" : "sunny",
          iconColor: "text-purple-500",
          type: "toggle",
          value: isDark,
          onPress: toggleColorScheme,
        },
      ],
    },
    {
      title: "Legal",
      items: [
        {
          id: "legal",
          label: "Legal Information & Policies",
          icon: "document-text",
          iconColor: "text-blue-500",
          type: "link",
          onPress: () => router.push("/settings/legal"),
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          id: "help",
          label: "Help Center",
          icon: "help-circle",
          iconColor: "text-green-500",
          type: "link",
          onPress: () => {},
        },
        {
          id: "about",
          label: "About Enjoy Escapes",
          icon: "information-circle",
          iconColor: "text-slate-500",
          type: "link",
          onPress: () => router.push("/about"),
        },
      ],
    },
  ];

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950">
      <View className="p-6">
        <Text className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8">
          Settings
        </Text>

        {sections.map((section, idx) => (
          <View key={idx} className="mb-8">
            <Text className="text-slate-400 dark:text-slate-500 font-bold uppercase text-xs tracking-widest mb-4 ml-2">
              {section.title}
            </Text>

            <View className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
              {section.items.map((item, itemIdx) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={item.onPress}
                  activeOpacity={0.7}
                  className={`flex-row items-center justify-between p-4 ${
                    itemIdx !== section.items.length - 1
                      ? "border-b border-slate-50 dark:border-slate-800"
                      : ""
                  }`}
                >
                  <View className="flex-row items-center">
                    <View
                      className={`w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-800 items-center justify-center mr-4`}
                    >
                      <Ionicons
                        name={item.icon as any}
                        size={22}
                        color={isDark ? "#e2e8f0" : "#475569"}
                      />
                    </View>
                    <Text className="text-slate-900 dark:text-slate-200 font-semibold text-base">
                      {item.label}
                    </Text>
                  </View>

                  {item.type === "toggle" ? (
                    <Switch
                      value={item.value}
                      onValueChange={item.onPress}
                      trackColor={{ false: "#cbd5e1", true: "#3b82f6" }}
                      thumbColor="#ffffff"
                    />
                  ) : (
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color={isDark ? "#475569" : "#cbd5e1"}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <View className="items-center mt-4 pb-10">
          <Text className="text-slate-400 dark:text-slate-600 text-xs">
            Version 1.0.0 (Building 2026)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
