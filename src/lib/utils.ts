import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// price formatter helper function
export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD"|"EUR"|"GBP" | "NGN",
    notation?: Intl.NumberFormatOptions["notation"]

  } = {} //here we are setting the default parameter as an empty object. 
  ) {
    // default currency and notation
    const {currency = "GBP", notation="compact"} = options
    // make sure the price is a numeric value by parsing strings
    const numericPrice = typeof price === "string" ? parseFloat(price) : price

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      notation,
      maximumFractionDigits: 2
    }).format(numericPrice)

  }