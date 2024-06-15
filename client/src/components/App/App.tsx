import { UserContextProvider } from "@/context/userContext";
import { router } from "@/router/config";
import { RouterProvider } from "react-router-dom";

function App() {
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
