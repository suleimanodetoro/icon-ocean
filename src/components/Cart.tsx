"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
import { Separator } from './ui/separator'
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

const Cart = () => {
  const itemCount = 0;
  const fee = 10
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
            <div className="space-y-4 pr-6">
                {/* use the shad cn seperator */}
                <Separator/>
                <div className="space-y-1.5 text-sm">
                    {/* shipping details */}
                    <div className="flex">
                        <span className="flex-1">Shipping</span>
                        <span>Free</span>

                    </div>
                    {/* transaction fee */}
                    <div className="flex">
                        <span className="flex-1">Transaction Fee</span>
                        <span>{formatPrice(fee)}</span>

                    </div>
                    {/* Cart Total */}
                    <div className="flex">
                        <span className="flex-1">Total</span>
                        <span>{formatPrice(fee)}</span>

                    </div>
                </div>

                {/* Sheet Footer */}
                <SheetFooter>
                    {/* Using asChild to disable default feature of wrapping child elements as buttons so we can use custom link correctly*/}
                    <SheetTrigger asChild className="">
                        <Link href={"/cart" } className={buttonVariants({
                            className:"w-full"
                        })}>Continue to Checkout</Link>
                    </SheetTrigger>
                </SheetFooter>
                
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1 ">
            <div aria-hidden className="relative mb-4 h-60 w-60 text-muted-foreground">
                <Image src="/hippo-empty-cart.png" fill alt="Empty cart image"/>
            </div>
            <div className="text-xl font-semibold">Looks empty...🫣</div>
            <SheetTrigger asChild>
                <Link href="/product" className={buttonVariants({variant: "link", size:"sm", className: "text-sm text-muted-foreground" })}>Add items to your cart to checkout🛒</Link>

            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
