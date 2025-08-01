import { Link } from "@tanstack/react-router";
import { Home, List, Mail, Menu, Plus, Shield, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/AboutSection", icon: List },
  { name: "Project", href: "/ProjectSection", icon: Plus },
  { name: "Skills", href: "/SkillSection", icon: Shield },
  { name: "Contact-Us", href: "/ContactSection", icon: Mail },
];

export function Navigation() {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2 group"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 bg-background/30 backdrop-blur-md rounded-lg",
            isScrolled &&
            "bg-background/80 max-w-4xl rounded-2xl  backdrop-blur-lg lg:px-5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                to="/"
                className="flex items-center space-x-2 text-xl font-bold"
              >
                Nitin Singh
              </Link>

              <Button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </Button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-foreground hover:text-foreground flex items-center gap-2 duration-150 hover:font-bold hover:zoom-out-50"
                      activeProps={{ className: "text-cyan-900 font-bold" }}
                    >
                      <item.icon className="size-4" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl  p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-foreground hover:text-foreground flex items-center gap-2 duration-150"
                        activeProps={{ className: "text-cyan-900 font-bold" }}
                      >
                        <item.icon className="size-4" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
