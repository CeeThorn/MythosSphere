import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";
import Multiverse from "./multiverse";
import SearchBar from "../components/search"; 
import {Link} from "react-router-dom";

const TopBar = () => {
    return (

     <div className="w-full border-b bg-white shadow-sm px-6 py-3 flex items-center justify-between">
     <div className="text-lg font-semibold">MythoSphere</div>
     
    
     
     <div className="hidden md:flex items-center gap-4">
       <Multiverse />

    <div className="relative">
  <SearchBar />
</div>



          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer hover:text-indigo-500">Menu</div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
             <DropdownMenuItem asChild>
              <Link to="/home">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/contact">Contact</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

       <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="p-4 space-y-4">
              <Multiverse />
              <Input placeholder="Search Mythosphere..." />
              <div className="space-y-2 text-sm">
                 <Link to="/home" className="block hover:text-indigo-500">
                  Home
                </Link>
                <Link to="/about" className="block hover:text-indigo-500">
                  About
                </Link>
                <Link to="/contact" className="block hover:text-indigo-500">
                  Contact
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default TopBar;
