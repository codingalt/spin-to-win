import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet";
import {
  CircleUser,
  Menu,
  Package2,
  Search,
  Moon,
  Sun,
  UserRound,
  LayoutPanelLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useTheme } from "@/context/ThemeContext";
import logo from "@/assets/logo.png";
import { Image } from "@nextui-org/react";

const Header = () => {
  const { setTheme } = useTheme();
  let pathname = window.location.pathname;

  useEffect(() => {
    pathname = window.location.pathname;
  }, [window.location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);
    window.location.reload();
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b dark:border-gray-900 dark:shadow-sm bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col pl-5 border-none">
          <SheetHeader className="hidden">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <nav className="grid gap-2 text-lg font-medium pt-2 pl-0">
            <Link
              href="#"
              className="flex items-center light:text-muted-foreground gap-2 text-lg font-semibold mb-3"
            >
              <Image src={logo} className="w-8" />
              <span style={{ letterSpacing: "1px" }}>QI DIGITAL</span>
            </Link>
            <div className="mb-3 pt-3">
              <div className="flex items-center text-gray-500 gap-2.5 rounded-lg px-3 py-2">
                <LayoutPanelLeft className="w-5 h-5 md:text-[16px] md:w-auto md:h-auto" />
                <span className="text-[16px]">Dashboards</span>
              </div>

              {/* Sub Options  */}
              <div className="pl-8">
                <Link
                  to="/admin/dashboard"
                  className={`flex items-center ${
                    pathname.match("/admin/dashboard")
                      ? "text-primary font-medium"
                      : "text-muted-foreground font-normal"
                  } gap-3 rounded-lg px-3 py-1.5 md:py-2 transition-all text-[14px] hover:text-primary`}
                >
                  Stats
                </Link>
                <Link
                  to="#"
                  className={`flex items-center ${
                    pathname.match("/admin/analytics")
                      ? "text-primary font-medium"
                      : "text-muted-foreground font-normal"
                  } gap-3 rounded-lg px-3 py-1.5 md:py-2 transition-all text-[14px] hover:text-primary`}
                >
                  Analytics
                </Link>
              </div>
            </div>

            <div>
              <div className="flex items-center text-gray-500 gap-2.5 rounded-lg px-3 py-2">
                <UserRound className="w-5 h-5 md:text-[16px] md:w-auto md:h-auto" />
                <span className="text-[16px]">Admin</span>
              </div>

              {/* Sub Options  */}
              <div className="pl-8">
                <Link
                  to="/admin/users"
                  className={`flex items-center ${
                    pathname.match("/admin/users")
                      ? "text-primary font-medium"
                      : "text-muted-foreground font-normal"
                  } gap-3 rounded-lg px-3 py-1.5 md:py-2 transition-all text-[14px] hover:text-primary`}
                >
                  Users
                </Link>
              </div>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search here..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="dark:border-gray-500">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="dark:border-gray-500">
          <DropdownMenuLabel className="text-gray-400">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
