"use client"
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
// interface IProps {
//     children: React.ReactNode;

// }
// { children }: IProps
export default function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.section}>
                <Link href=""><Image src="/img/coffee.png" alt="logo-coffee" width={100} height={100} /></Link>
            </section>
            <nav className={styles.nav}>
                <ul className='flex gap-4 pr-5'>
                    <li className='font-bold'><Link href="/about">Inicio</Link></li>
                    <li className='font-bold'><Link href="/projects">Proyectos</Link></li>
                    <li className='font-bold'><Link href="/services">Servicios</Link></li>
                    {/* {children} */}
                </ul>
                <ul className='px-2.5 bg-amber-300 text-center rounded-md'>
                    <li className='font-bold text-emerald-700'><Link href="/contact">Contáctame</Link></li>
                </ul>
            </nav>
        </header>
    )
}
