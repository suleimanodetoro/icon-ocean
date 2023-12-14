import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

const Navbar = () => {
    // pretend user for sign in nav item
    const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="relative ">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile Nav Bar */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              {/* below are items to the right side of the nav bar */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {/* if we have a user, do not render the sign in button. Else, redner */}
                    {user ? null : (
                        <Link className={buttonVariants({variant: "ghost"})} href={'/sign-in'}>Sign In</Link>
                    )}

                    {/* if we do not have a user logged in, also render purely decorational visual seperator  */}
                    {
                        user ? null : <span className="h-6 w-px bg-gray-200" aria-hidden/>
                    }

                    {/*dropdown with the users details if they are signed in.
                    If not signed in, display create account button
                     */}

                    {user ? <p></p>:( <Link href={"/sign-up"} className={buttonVariants()}>Create Account</Link>)}

                    {/* the following line is the divider line */}
                    {user ? <span className="h-6 w-px bg-gray-200" aria-hidden/>: null}

                    {user ? null : (
                        <div className="flex lg:ml-6">
                            <span className="h-6 w-px bg-gray-200" aria-gidden></span>

                        </div>
                    )}
                    {/* flow-root to essentially put each element in its property block */}

                    <div className="ml-4 flex-root lg:ml-6">
                        <Cart/>
                    </div>
                     
                </div>

              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
