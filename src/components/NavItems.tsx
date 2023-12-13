"use client";

import { PRODUCT_CATEGROIES } from "@/config";
import { useState, useRef, useEffect } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
//   isAnyOpen checks if any nav item is open at all
  const isAnyOpen = activeIndex !== null

//   use ref so clicking anywhere cancels the dropdown
// This type is simply telling react assign this to a div element later
// For this, we will be using the mouse event hook I copied haha
const navRef = useRef<HTMLDivElement |null >(null)
useOnClickOutside(navRef, () => setActiveIndex(null))

// on "Escape" key press, collapse the nav item dropdrowns
useEffect(()=>{
    const handler = (event: KeyboardEvent) => {
        if (event.key === 'Escape'){
            setActiveIndex(null);
        }
    }

    // trigger the event
    document.addEventListener("keydown", handler)
    // clean up after using the event listner

    return () => {
        document.removeEventListener("keydown", handler)
    }
}, [])

  return (
    <div className="flex gap-4 h-full " ref={navRef}>
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
