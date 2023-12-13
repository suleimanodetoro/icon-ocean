"use client";

import { PRODUCT_CATEGROIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// the type "Category" should be a single element of our array
type Category = typeof PRODUCT_CATEGROIES[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}
const NavItem = ({ isAnyOpen, category, isOpen, handleOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              // if open state is true, change rotate state
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      { isOpen ? (
        <div
        className={cn(
          "absolute inset-x-0 top-full text-sm text-muted-foreground",
          {
            "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
          }
        )}
      >
        {/* self closing div to add shadow. Aria hidden so it does not show to screen readers */}
        <div
          aread-hidden
          className="absolute inset-0 top-1/2 bg-white shadow"
        />

        <div className="relative mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
            <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
              {/* category content to show when nav item is opened */}
              {category.featured.map((item) => (
                <div
                  key={item.name}
                  className="group relative text-base sm:text-sm"
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 ">
                    <Image
                      src={item.imageSrc}
                      alt="Product category image"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  {/* link to click on for specific product item */}
                  <Link
                    href={item.href}
                    className="mt-6 block font-medium text-gray-900 "
                  >
                    {item.name}
                    <p aria-hidden className="mt-1">
                      Shop now
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      ) : null
        
      }
    </div>
  );
};

export default NavItem;
