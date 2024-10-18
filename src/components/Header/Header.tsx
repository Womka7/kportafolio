// import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import HeaderNavigate from './Nav-header';

export default function Header() {
    return (
        <header className="bg-greenforest text-whites flex justify-between items-center px-8 py-2">
            <section className="flex items-center">
                <Link href="/about" ><Image src="/img/logo1.png" alt="logo-coffee" width={50} height={60} /></Link>
            </section>  
            <HeaderNavigate />
            <button className="bg-salmon text-whites px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors">
                Contáctame
                <Link href="/contact" ></Link>
            </button>
        </header>
    )
}