import { User } from "@/types/user";
import React, { FC, ReactNode, createContext, useState } from "react";

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({
    avatar: "",
    email: "",
    lastname: "",
    login: "",
    name: "",
    phone: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useCurrentUser must be used within a UserContextProvider");
  }
  return context;
};
