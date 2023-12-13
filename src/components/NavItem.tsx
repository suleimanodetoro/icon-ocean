"use client";

import { PRODUCT_CATEGROIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// the type "Category" should be a single element of our array
type Category = (typeof PRODUCT_CATEGROIES)[number];

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
    </div>
  );
};

export default NavItem;
