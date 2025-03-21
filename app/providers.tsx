"use client";

import { PrivyProvider } from "@privy-io/react-auth";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      config={{
        captchaEnabled: true,
        appearance: {
          showWalletLoginFirst: true,
          logo: "/next.svg",
        },
        embeddedWallets: {
          createOnLogin: "all-users",
        },
        loginMethods: ["email", "google", "wallet"],
      }}
    >
      {children}
    </PrivyProvider>
  );
}
