"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ToggleMode } from "./ToggleMode";
import { SearchInput } from "./SearchInput";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
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
                    <div className="flex items-center md:gap-4">
                        <SearchInput></SearchInput>
                        <ToggleMode></ToggleMode>
                        <div className="hidden md:flex items-center gap-2">
                            <Button variant={"outline"}>Login</Button>
                            <Button>Signup</Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}

                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        className="md:hidden text-muted-foreground hover:text-foreground"
                        onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen) }}
                    >
                        {
                            isMobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            )
                                :
                                (
                                    <Menu className="h-5 w-5" />
                                )
                        }
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden py-4 space-y-4 border-t">
                    {/* Search Bar (Mobile) */}
                    <div className="px-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search articles..."
                                className="pl-10 w-full focus-visible:ring-1"
                            />
                        </div>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="space-y-2 px-4">
                        <Link
                            href="/articles"
                            className="block px-3 py-2 text-base font-medium text-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Articles
                        </Link>
                        <Link
                            href="/tutorials"
                            className="block px-3 py-2 text-base font-medium text-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Tutorials
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-2 text-base font-medium text-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/dashboard"
                            className="block px-3 py-2 text-base font-medium text-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Dashboard
                        </Link>
                    </div>

                    {/* Mobile Auth Buttons */}
                        <div className="px-4 flex flex-col gap-2">
                                <Button variant="outline" className="w-full">
                                    Login
                                </Button>
                                <Button className="w-full">Sign up</Button>
                        </div>
                </div>
            )}
        </nav>
    )
}