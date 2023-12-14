"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
import { Separator } from './ui/separator'

const Cart = () => {
  const itemCount = 0;
  return (
    <Sheet>
      <SheetTrigger className="group m-2 flex items-center p-2">
        <ShoppingCartIcon
          aria-hidden
          className="h-6 w-6 flex-shrink text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lag">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/* TODO: Cart Logic */}
              Cart Items
            </div>
            <div className="space-y-4">
                {/* use the shad cn seperator */}
                <Separator/>
                <div className="space-y-1.5 pr-6">
                    {/* shipping details */}
                    <div className="flex">
                        <span className="flex-1">Shipping</span>
                        <span>Free</span>

                    </div>
                    {/* transaction fee */}
                    <div className="flex">
                        <span className="flex-1">Transaction Fee</span>
                        <span>$1</span>

                    </div>
                </div>
                
            </div>
          </>
        ) : (
          <div>
            
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
