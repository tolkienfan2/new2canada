import React from 'react';
import Link from 'next/link';
import CanadianFlagIcon from './CanadianFlagIcon';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[var(--color-white)] border-b-4 border-[var(--color-canadian-red)] shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <CanadianFlagIcon className="w-8 h-8" />
                    <span className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
                        New2Canada
                    </span>
                </Link>
                {/* Desktop Navigation (Optional, can be hidden on mobile if Footer handles it) */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-600 hover:text-[var(--color-canadian-red)] font-medium">Home</Link>
                    <Link href="/provinces" className="text-gray-600 hover:text-[var(--color-canadian-red)] font-medium">Provinces</Link>
                    <Link href="/search" className="text-gray-600 hover:text-[var(--color-canadian-red)] font-medium">Search</Link>
                </nav>
            </div>
        </header>
    );
}
