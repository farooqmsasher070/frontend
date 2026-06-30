import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { authService } from "./features/auth/services/authService";
import { router } from "./routes";

function App() {
  useEffect(() => {
    authService.restoreSession().catch(() => {
      // ignore restore errors
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;