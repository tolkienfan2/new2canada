import React from 'react';
import Link from 'next/link';
import CanadianFlagIcon from './CanadianFlagIcon';

export default function StickyFooter() {
    return (
        <>
            {/* Spacer to prevent content from being hidden behind footer */}
            <div className="h-20" />

            {/* Mobile Footer */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--color-white)] border-t-2 border-gray-200 z-50">
                <div className="flex justify-around items-center h-16">
                    <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-[var(--color-canadian-red)]">
                        <span className="text-xs font-medium">Home</span>
                    </Link>

                    <Link href="/provinces" className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-[var(--color-canadian-red)]">
                        <span className="text-xs font-medium">Provinces</span>
                    </Link>

                    <div className="relative -top-6">
                        <button className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-canadian-red)] text-white shadow-lg hover:bg-red-700 transition-colors">
                            {/* Chat Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>
                        </button>
                    </div>

                    <Link href="/search" className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-[var(--color-canadian-red)]">
                        <span className="text-xs font-medium">Search</span>
                    </Link>

                    <Link href="/about" className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-[var(--color-canadian-red)]">
                        <CanadianFlagIcon className="w-5 h-5 mb-0.5" />
                        <span className="text-xs font-medium">About</span>
                    </Link>
                </div>
            </nav>

            {/* Desktop Footer */}
            <footer className="hidden md:block bg-white border-t-4 border-[var(--color-canadian-red)] mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <CanadianFlagIcon className="w-8 h-8" />
                                <span className="text-xl font-bold text-[var(--color-text-primary)]">New2Canada</span>
                            </div>
                            <p className="text-sm text-gray-600">
                                Your trusted guide to settling in Canada, powered by official government information.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/" className="text-gray-600 hover:text-[var(--color-canadian-red)]">Home</Link></li>
                                <li><Link href="/provinces" className="text-gray-600 hover:text-[var(--color-canadian-red)]">Provinces</Link></li>
                                <li><Link href="/visitors" className="text-gray-600 hover:text-[var(--color-canadian-red)]">Visitors</Link></li>
                                <li><Link href="/immigrants" className="text-gray-600 hover:text-[var(--color-canadian-red)]">Immigrants</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/general" className="text-gray-600 hover:text-[var(--color-canadian-red)]">General Info</Link></li>
                                <li><a href="https://www.canada.ca" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--color-canadian-red)]">Canada.ca</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
                            <button className="bg-[var(--color-canadian-red)] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                                <span>Chat with Us</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                        <p>© 2024 New2Canada. Information sourced from official Canadian government websites.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
