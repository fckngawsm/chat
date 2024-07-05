import { UserContextProvider } from "@/context/userContext";
import { router } from "@/router/config";
import { socket } from "@/services/socket/socket";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";

function App() {
  const [onlineUsers, setOnlineUsers] = useState<number>(0);

  useEffect(() => {
    socket.on("usersOnline", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("usersOnline");
    };
  }, []);

  console.log(onlineUsers, "onlineUsers");

  return (
    <main className="main">
      <div className="page">
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </div>
    </main>
  );
}

export default App;
