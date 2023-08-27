"use client";

import { Provider } from "react-redux";
import store from "./store";
import { MainLayout } from "./MainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Provider store={store}>
          <MainLayout>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  );
}
