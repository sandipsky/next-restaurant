'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const currentPath = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 0) {
                header?.classList.add('scrolled');
            } else {
                header?.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header>
                <div className='container mx-auto flex flex-row justify-between items-center'>
                    <div className="flex justify-between items-center">
                        <span className='font-[700] text-[32px] text-white logo'>Next Corporate</span>
                    </div>

                    <ul className={`md:flex gap-[24px] z-10 hidden`}>
                        <li className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
                            <Link href="/" className="nav-link">Home</Link>
                        </li>
                        <li className={`nav-item ${currentPath === '/about' ? 'active' : ''}`}>
                            <Link href="/about" className="nav-link">About Us</Link>
                        </li>
                        <li className={`nav-item ${currentPath === '/services' ? 'active' : ''}`}>
                            <Link href="/services" className="nav-link">Services</Link>
                        </li>
                        <li className={`nav-item ${currentPath === '/blog' ? 'active' : ''}`}>
                            <Link href="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className={`nav-item ${currentPath === '/contact' ? 'active' : ''}`}>
                            <Link href="/contact" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>



                    <button
                        className="md:hidden text-[24px]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="text-white logo">☰</div>
                    </button>

                </div>




            </header>
            <div className={`z-[10] fixed w-0 h-[100vh] right-0 bg-[#fff] shadow-md transition-all duration-200 ease-in-out ${isMenuOpen ? 'w-[200px] ' : 'w-0'}`}>
                <div className='flex items-end justify-end'>
                    <div className='h-[30px] w-[30px]'>
                        <svg onClick={() => setIsMenuOpen(!isMenuOpen)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729" />
                        </svg>
                    </div>

                </div>

                <ul className={`gap-[24px] space-y-4 p-4 mobile`}>
                    <li className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className={`nav-item ${currentPath === '/about' ? 'active' : ''}`}>
                        <Link href="/about" className="nav-link">About</Link>
                    </li>
                    <li className={`nav-item ${currentPath === '/services' ? 'active' : ''}`}>
                        <Link href="/services" className="nav-link">Services</Link>
                    </li>
                    <li className={`nav-item ${currentPath === '/blog' ? 'active' : ''}`}>
                        <Link href="/blog" className="nav-link">Blog</Link>
                    </li>
                    <li className={`nav-item ${currentPath === '/contact' ? 'active' : ''}`}>
                        <Link href="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
