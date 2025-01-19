import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeProvider } from "@/components/theme-provider";
import { DarkButton } from "@/components/DarkButton";
import Link from "next/link";
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export const metadata: Metadata = {
  title: {
    template: '%s | Freeman Development',
    default: 'Freeman Development - Modern Web Solutions'
  },
  description: 'Professional web development and design services specializing in modern, responsive websites and applications.',
  keywords: ['web development', 'web design', 'React', 'Next.js', 'responsive design'],
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const menuItems = [
    { label: "about", link: "/about" },
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
          <header className="relative flex items-center p-4">
            {/* Left Logo */}
            <div className=" flex-shrink-0">
              <Link href="/" className="text-lg font-medium">
                freeman&apos;s
              </Link>
            </div>

            {/* Centered Desktop Navigation */}
            <NavigationMenu className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <NavigationMenuList className="flex gap-4">
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href={item.link} className="text-2xl font-medium">
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation */}
            <div className="flex items-center gap-4 md:hidden ml-auto">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-8">
                    {menuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="text-sm font-medium py-2 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
              <DarkButton />
            </div>

            {/* Desktop Dark Mode Button */}
            <div className="hidden md:block flex-shrink-0 ml-auto">
              <DarkButton />
            </div>
          </header>

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}