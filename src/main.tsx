import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider
      toastOptions={{
        defaultOptions: {
          position: "bottom-right",
          duration: 6000,
          status: "success",
        },
      }}
    >
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
