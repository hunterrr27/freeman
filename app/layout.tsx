import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeProvider } from "@/components/theme-provider";
import { DarkButton } from "@/components/DarkButton";
import Link from "next/link";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Updated menu items with correct routes
  const menuItems = [
    { label: "about", link: "/about" },
    { label: "book", link: "/book" },
    { label: "portfolio", link: "/portfolio" },
    { label: "blog", link: "/blog" },
    { label: "contact", link: "/contact" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex justify-between p-4">
            <Link href="/">
              <h1>freeman&apos;s</h1>
            </Link>
            <NavigationMenu className="flex justify-center">
              <NavigationMenuList className="flex gap-4">
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href={item.link} className="text-sm font-medium">
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <DarkButton />
          </header>

          {/* Main Content */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}