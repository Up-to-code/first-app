export interface Chat {
    id: string;
    name: string;
    profileImage: string;
    lastMessage: string;
    unreadCount?: number;
  }

  export interface PropsWithChat {
    item: Chat;
    onPress: (chat: Chat) => void;
  }
