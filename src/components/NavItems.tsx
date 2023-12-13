"use client";

import { PRODUCT_CATEGROIES } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
//   isAnyOpen checks if any nav item is open at all
  const isAnyOpen = activeIndex != null


  return (
    <div className="flex gap-4 h-full ">
      {PRODUCT_CATEGROIES.map((category, index) => {
        // handle open toggles the open/close state of nav items
        // the function is defined for each nav item
        const handleOpen = () => {
            // this first "if" checks whether the nav item clicked is already open. If yes, set to null (close it)
          if (activeIndex === index) {
            setActiveIndex(null);
          } 
        //   Open the nav item by setting it's index as the active index
          else {
            setActiveIndex(index);
          }
        };
        // the following is a boolean specific to each nav item, determining whether that particular item is open
        // this is done by checking if the current item's index is equal to the active index
        const isOpen = index === activeIndex


        return (
            <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} key={category.value} isAnyOpen={isAnyOpen} />
        );
      })}
    </div>
  );
};

export default NavItems;
