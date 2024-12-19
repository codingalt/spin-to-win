import React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1055637407106-map4fbrj0qko19urlfjpk9tm149rdmo2.apps.googleusercontent.com">
      <Provider store={store}>
        {/* <NextUIProvider> */}
          <RouterProvider router={router} />
        {/* </NextUIProvider>  */}
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
