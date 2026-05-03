"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ui } from "@clerk/ui";
import { dark } from "@clerk/ui/themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      ui={ui}
      appearance={{
        theme: dark,
        variables: {
          colorBackground: "var(--bg-surface)",
          colorNeutral: "var(--text-primary)",
          colorPrimary: "var(--accent-primary)",
          colorPrimaryForeground: "var(--bg-base)",
          colorForeground: "var(--text-primary)",
          colorInput: "var(--bg-base)",
          colorInputForeground: "var(--text-primary)",
          borderRadius: "var(--radius)",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
