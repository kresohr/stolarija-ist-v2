"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "#top",
    src: "/ist-logo.png",
    alt: "logo",
    title: "Stolarija IST",
  },
  menu = [
    { title: "Početna", url: "#top" },
    { title: "O nama", url: "#about" },
    { title: "Projekti", url: "#projects" },
  ],
}: NavbarProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const isMobile = window.innerWidth < 1024;
      const navbarHeight = isMobile ? 68 : 73;

      const mainContainer = document.querySelector("main");
      if (mainContainer) {
        const elementPosition = element.offsetTop - navbarHeight;
        mainContainer.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      } else {
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }

      if (isMobile) {
        setIsSheetOpen(false);
      }
    }
  };

  const SubMenuLink = ({ item }: { item: MenuItem }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (item.url.startsWith("#")) {
        const sectionId = item.url.substring(1);
        smoothScrollTo(sectionId);
      } else {
        setIsSheetOpen(false);
        window.location.href = item.url;
      }
    };

    return (
      <a
        className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground cursor-pointer"
        href={item.url}
        onClick={handleClick}
      >
        <div className="text-foreground">{item.icon}</div>
        <div>
          <div className="text-sm font-semibold">{item.title}</div>
          {item.description && (
            <p className="text-sm leading-snug text-muted-foreground">
              {item.description}
            </p>
          )}
        </div>
      </a>
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (item.url.startsWith("#")) {
        const sectionId = item.url.substring(1);
        smoothScrollTo(sectionId);
      } else {
        window.location.href = item.url;
      }
    };

    if (item.items) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-popover text-popover-foreground">
            <div className="w-80 max-w-[calc(100vw-2rem)]">
              {item.items.map((subItem) => (
                <NavigationMenuLink asChild key={subItem.title}>
                  <SubMenuLink item={subItem} />
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink
          href={item.url}
          onClick={handleClick}
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground cursor-pointer"
        >
          {item.title}
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };

  const renderMobileMenuItem = (item: MenuItem, index: number) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (item.url.startsWith("#")) {
        const sectionId = item.url.substring(1);
        smoothScrollTo(sectionId);
      } else {
        setIsSheetOpen(false);
        window.location.href = item.url;
      }
    };

    if (item.items) {
      return (
        <AccordionItem
          key={`mobile-${item.title}-${index}`}
          value={item.title}
          className="border-b-0"
        >
          <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.items.map((subItem, subIndex) => (
              <SubMenuLink
                key={`sub-${subItem.title}-${subIndex}`}
                item={subItem}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <SheetClose asChild key={`mobile-link-${item.title}-${index}`}>
        <a
          href={item.url}
          onClick={handleClick}
          className="text-md font-semibold cursor-pointer hover:text-gray-600 transition-colors"
        >
          {item.title}
        </a>
      </SheetClose>
    );
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (logo.url.startsWith("#")) {
      const sectionId = logo.url.substring(1);
      smoothScrollTo(sectionId);
    } else {
      window.location.href = logo.url;
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("footer");
  };

  return (
    <section className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="py-4">
        <div className="container mx-auto px-4 ">
          <nav className="hidden justify-between lg:flex">
            <div className="flex items-center gap-2">
              <a
                href={logo.url}
                onClick={handleLogoClick}
                className="cursor-pointer"
              >
                <img src={logo.src} className="max-h-8" alt={logo.alt} />
              </a>
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </div>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex gap-2 my-auto">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white bg-[#101828] hover:bg-[#2b3444]  hover:text-white"
              >
                <a
                  href="#footer"
                  onClick={handleContactClick}
                  className="cursor-pointer"
                >
                  Kontakt
                </a>
              </Button>
            </div>
          </nav>

          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <a
                href={logo.url}
                onClick={handleLogoClick}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={logo.src} className="max-h-8" alt={logo.alt} />
              </a>
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex items-center gap-2">
                        <a
                          href={logo.url}
                          onClick={handleLogoClick}
                          className="cursor-pointer"
                        >
                          <img
                            src={logo.src}
                            className="max-h-8"
                            alt={logo.alt}
                          />
                        </a>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item, index) =>
                        renderMobileMenuItem(item, index)
                      )}
                    </Accordion>

                    <div className="flex flex-col gap-3">
                      <Button
                        asChild
                        variant="outline"
                        className="text-white bg-[#101828] hover:bg-[#2b3444]  hover:text-white"
                      >
                        <SheetClose asChild>
                          <a
                            href="#footer"
                            onClick={handleContactClick}
                            className="cursor-pointer"
                          >
                            Kontakt
                          </a>
                        </SheetClose>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Navbar };
