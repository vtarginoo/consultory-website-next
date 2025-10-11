import * as React from "react";
import Link from "next/link";
import { cn } from "@/components/lib/utils";


const MainNavListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
   React.ComponentPropsWithoutRef<typeof Link> & { onItemClick?: () => void }
>(({ className, title, children, onItemClick,...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-arco-detail hover:text-arco-text focus:bg-arco-detail focus:text-arco-text",
          className
        )}
        {...props}
        onClick={onItemClick}
      >
        <div className=" text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
          {children}
        </p>
      </Link>
    </li>
  );
});
MainNavListItem.displayName = "MainNavListItem";


export { MainNavListItem };