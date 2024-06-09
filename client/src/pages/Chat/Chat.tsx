import { useEffect } from "react";
import { useCurrentUser } from "../../context/userContext";
import { getMe } from "../../services/api/auth";
import { ChatMemberItem } from "./ChatMembers/ChatMemberItem";
import { ChatMembersList } from "./ChatMembers/ChatMembersList";
import { ChatWrapper } from "./ChatMembers/styled";
import { ChatMessages } from "./ChatMessages/ChatMessages";

export const Chat = () => {
  const { user, setUser } = useCurrentUser();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await getMe();
        setUser(res.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных пользователя", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <ChatWrapper>
      <ChatMembersList>
        {[1, 2, 3].map(() => (
          <ChatMemberItem />
        ))}
      </ChatMembersList>
      <ChatMessages />
    </ChatWrapper>
  );
};
