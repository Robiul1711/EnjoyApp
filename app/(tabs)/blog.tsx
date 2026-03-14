import { Text, View, ScrollView } from "react-native";

export default function Blog() {
  const posts = [
    { id: 1, title: 'Top 10 Beaches in 2026', category: 'Guide' },
    { id: 2, title: 'How to Travel on a Budget', category: 'Tips' },
    { id: 3, title: 'The Ultimate City Guide', category: 'City' },
  ];

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold text-slate-900 mb-6">Latest Articles</Text>
      {posts.map((post) => (
        <View key={post.id} className="mb-6 pb-6 border-bottom border-slate-100 border-b">
          <Text className="text-blue-500 font-bold text-xs uppercase tracking-wider mb-2">
            {post.category}
          </Text>
          <Text className="text-xl font-bold text-slate-800">
            {post.title}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
