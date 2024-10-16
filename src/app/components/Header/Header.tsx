"use client"
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
interface IProps {
    children: React.ReactNode;

}
export default function Header({ children }: IProps) {
    return (
        <header  className={styles.header}>
            <section className={styles.section}>
            <Link href=""><Image src="/img/coffee.png" alt="logo-coffee" width={140} height={140} /></Link>
            </section>
            <nav  className={styles.nav}>
                <ul>
                    {children}
                </ul>
            </nav>
        </header>
    )
}
