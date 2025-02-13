"use client";

import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";
import { ThemeProvider } from "next-themes";
import ReduxProvider from "../../store/redux-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
   <ReduxProvider>
     <ThemeProvider defaultTheme="light" attribute="class">
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
   </ReduxProvider>
  );
}
