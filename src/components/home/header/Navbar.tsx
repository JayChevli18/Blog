"use client";
import React from "react";
import Link from "next/link";
import { ToggleMode } from "./ToggleMode";
import { SearchInput } from "./SearchInput";

export const Navbar=()=>{
    return(
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left Section - Logo & Desktop Navigation */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold">
                            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-300 bg-clip-text text-transparent">
                                Blog
                            </span>
                            <span className="text-foreground">Code</span>
                        </span>
                    </Link>
                    

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/articles"
                            className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
                        >
                            Articles
                        </Link>
                        <Link
                            href="/tutorials"
                            className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
                        >
                            Tutorials
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
                        >
                            About
                        </Link>
                        <Link
                            href="/dashboard"
                            className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
                        >
                            Dashboard
                        </Link>

                    </div>

                {/* Right Section - Search & Action*/}
                <div className="flex items-center gap-4">
                    <SearchInput></SearchInput>
                    <ToggleMode></ToggleMode>

                </div>
                </div>

            </div>
        </nav>
    )
}