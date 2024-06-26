import { useCurrentUser } from "@/context/userContext";
import { getMe } from "@/services/api/auth";
import { useEffect } from "react";
import { ChatMemberItem } from "./ChatMembers/ChatMemberItem";
import { ChatMembersList } from "./ChatMembers/ChatMembersList";
import { ChatWrapper } from "./ChatMembers/styled";
import { ChatMessages } from "./ChatMessages/ChatMessages";

export const Chat = () => {
  const { setUser } = useCurrentUser();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await getMe();
        setUser(res.data);
      } catch (error) {}
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
