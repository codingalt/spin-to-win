import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LayoutPanelLeft, Package2, UserRound } from "lucide-react";
import logo from "@/assets/logo.png";
import { Image } from "@nextui-org/react";

const Sidebar = () => {
  let pathname = window.location.pathname;

  useEffect(() => {
    pathname = window.location.pathname;
  }, [window.location.pathname]);

  const handleLogout = () => {
    window.location.reload(false);
  };

  return (
    <div className="hidden dark:border-gray-900 bg-transparent md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center bg-muted/40 border-b dark:border-gray-900 px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src={logo} className="w-8 h-8" />
            <span style={{letterSpacing:"1px"}}>QI DIGITAL</span>
          </Link>
          {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button> */}
        </div>
        <div className="flex-1">
          <nav className="grid gap-1 items-start px-2 pt-3 text-sm font-medium lg:px-3">
            <div className="mb-3">
              <div className="flex items-center text-gray-500 gap-2.5 rounded-lg px-3 py-2">
                <LayoutPanelLeft className="text-[16px]" />
                <span>Dashboards</span>
              </div>

              {/* Sub Options  */}
              <div className="pl-8">
                <Link
                  to="/admin/dashboard"
                  className={`flex items-center ${
                    pathname.match("/admin/dashboard")
                      ? "text-primary font-medium"
                      : "text-muted-foreground font-normal"
                  } gap-3 rounded-lg px-3 py-2 transition-all text-[13px] hover:text-primary`}
                >
                  Stats
                </Link>
                <Link
                  to="#"
                  className={`flex items-center ${
                    pathname.match("/admin/analytics")
                      ? "text-primary font-medium"
                      : "text-muted-foreground font-normal"
                  } gap-3 rounded-lg px-3 py-2 transition-all text-[13px] hover:text-primary`}
                >
                  Analytics
                </Link>
              </div>
            </div>

            <div>
              <div className="flex items-center text-gray-500 gap-2.5 rounded-lg px-3 py-2">
                <UserRound className="text-[16px]" />
                <span>Admin</span>
              </div>

              {/* Sub Options  */}
              <div className="pl-8">
                <Link
                  to="/admin/users"
                  className={`flex items-center ${
                    pathname.match("/admin/users")
                      ? "text-primary font-medium"
                      : "text-muted-foreground font-normal"
                  } gap-3 rounded-lg px-3 py-2 transition-all text-[13px] hover:text-primary`}
                >
                  Users
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
