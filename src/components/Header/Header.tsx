// import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import HeaderNavigate from './Nav-header';

export default function Header() {
    return (
        <header className="bg-greenforest h-50 text-whites justify-between items-center  py-2">
            <section className="flex justify-center items-center py-4">
                <Link href="/about" ><Image src="/img/logo1.png" alt="logo-coffee" width={50} height={60} /></Link>
            </section>  
            <HeaderNavigate />
            <section className="flex justify-center items-center py-4  ">
                <button className=" bg-salmon  text-whites px-6 py-4 rounded-full font-bold hover:bg-greenaqua transition-colors">
                    Contáctame
                    <Link href="/contact" ></Link>
                </button>
            </section>
        </header>
    )
}