// import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import HeaderNavigate from './Nav-header';

export default function Header() {
    return (
        <header className="bg-greenforest text-whites flex flex-col gap-2 justify-center items-center py-2 md:flex-row md:justify-around ">
            <Link href="/about" ><Image src="/img/logo1.png" alt="logo-coffee" width={50} height={60} /></Link>
            <HeaderNavigate />
            <button className=" bg-salmon  text-whites px-4 py-1 rounded-full font-bold hover:bg-greenaqua transition-colors">
                Contáctame
                <Link href="/contact" ></Link>
            </button>

        </header>
    )
}