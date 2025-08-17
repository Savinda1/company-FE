import React from 'react';
import { SignedIn, SignedOut, UserButton,useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "react-router";
//import { useSelector } from "react-redux";//useSelector is a hook slice ekaka data alocate karanna puluwa
function Navigation() {
  //const { user } = useUser();//atherization part

  //const userSlice = useSelector(state => state.user); // useSelector is a hook slice ekaka data alocate karanna puluwa
  return (
   
    <nav className="fixed top-0 left-0 w-full z-50 bg-sky-900 flex items-center justify-between px-8 text-white py-4 shadow-md">

    <div className="flex items-center space-x-8 font-bold">
     <p className="text-3xl font-extrabold bg-gradient-to-r from-blue-50 via-blue to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
          @amiladev
        </p>
        <div className="hidden md:flex space-x-6 ">
          <h1 className="transition-colors ">
            <Link to="/"> 
              Home
            </Link>
          </h1>

    <h1 className="transition-colors">
           Register
          </h1>
          <h1 className="transition-colors">
            About
          </h1>
        </div> 
    </div>

   <div className="flex items-center space-x-4">
       <Button variant="ghost" className="">
          <Globe className="h-5 w-5 mr-2"/>
          EN
        </Button>
   <SignedOut>
    
        <Button  variant="ghost" asChild>
          <Link to={`/sign-in`}>Log In</Link>
        </Button>
        <Button asChild>
          <Link to={`/sign-up`}>Sign Up</Link>
        </Button>  
        
          </SignedOut>
       
          <SignedIn>
        <UserButton />
          <Button asChild >
            <Link to="/account">My Account</Link>
          </Button>
        </SignedIn>
     
        </div>
    </nav>
    
  )
}

export default Navigation;








