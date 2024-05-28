import { RouterProvider } from "react-router-dom";
import { router } from "../../router/config";

function App() {
  return (
    <main className="main">
      <div className="page">
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
