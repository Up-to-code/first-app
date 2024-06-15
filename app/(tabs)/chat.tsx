import { ChatListItem } from "@/components/Home/ChatLIstItem";
import { Chat } from "@/components/Home/types";
import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
const MOCK_CHATS: Chat[] = [
  {
    id: "1",
    name: "Ahmed Mansour",
    profileImage:
      "https://ahmedmansour.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmeA.dd711c74.png&w=256&q=75",
    lastMessage: "Hi there!",
    unreadCount: 2,
  },
  {
    id: "2",
    name: "Jane Smith",
    profileImage:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastMessage: "How are you doing?",
  },
  {
    id: "3",
    name: "John Doe",
    profileImage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastMessage: "Hi there!",
    unreadCount: 4,
  },
  {
    id: "4",
    name: "Jane Smith",
    profileImage:
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastMessage: "How are you doing?",
  },
  // Add more chat objects as needed
];

const ChatsList: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>(MOCK_CHATS);
   const  router = useRouter();
  // Simulate fetching chats from a server (replace with actual data fetching logic)
  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      // Update chats state with fetched data
      setChats(MOCK_CHATS);
    }, 1000);
  }, []);

  const handleChatPress = (chat: Chat) => {
    router.push(`/chat/${chat.id}`);
  };

  const renderItem = ({ item }: { item: Chat }) => (
    <ChatListItem item={item} onPress={() => handleChatPress(item)} />
  );

  return (
    <View style={styles.container}>
      <FlashList
        estimatedItemSize={100}
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatsList;
