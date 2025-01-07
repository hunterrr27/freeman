import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeProvider } from "@/components/theme-provider";
import { DarkButton } from "@/components/DarkButton";
import Link from "next/link";

export default function RootLayout({ children }: RootLayoutProps) {
  // Example menu items
  const menuItems = [
    { label: "about", link: "Link 1" },
    { label: "book", link: "Link 2" },
    { label: "portfolio", link: "Link 3" },
    { label: "blog", link: "Link 4" },
    { label: "contact", link: "Link 5" },
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
                    <NavigationMenuLink href="#">{item.label}</NavigationMenuLink>
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
