
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";



 function Navbar() {
  return (
   
         


 <div className="w-full max-w-2xl mx-auto">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuList className="flex flex-col gap-2 p-4">

   <NavigationMenuItem>
    <NavigationMenuLink asChild>
    <Link to="/home">Home</Link>
    </NavigationMenuLink>
     </NavigationMenuItem>

    <NavigationMenuItem>
  <NavigationMenuLink asChild>
    <Link to="/about">About</Link>
  </NavigationMenuLink>
 </NavigationMenuItem>

  <NavigationMenuItem>
    <NavigationMenuLink asChild>
        <Link to="/contact">Contact</Link>
    </NavigationMenuLink>
    </NavigationMenuItem>

      </NavigationMenuList>
      </NavigationMenuContent>
    </NavigationMenuItem>
    </NavigationMenuList>

 <NavigationMenuIndicator />
        <NavigationMenuViewport />

    </NavigationMenu>
</div>

);
    }

    export default Navbar;