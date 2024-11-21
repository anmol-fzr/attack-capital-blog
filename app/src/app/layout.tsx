import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar, Provider } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Attack Capital Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://attack.capital/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Navbar />
          <main className="flex flex-col w-full justify-center p-4 md:p-6 max-w-theme">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
{
  /*
<div className="flex w-full items-center justify-center p-4 md:p-6 max-w-theme">
      <div className="space-y-6 w-full ">
        <PageHeader title="Settings" desc="Manage your account settings." />
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <SettingsSidebar />
          </aside>

          <div className="flex-1 lg:max-w-lg" ref={parent}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
*/
}
