// import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import HeaderNavigate from './Nav-header';
// interface IProps {
//     children: React.ReactNode;

// }
// { children }: IProps
export default function Header() {
    return (
        <header className="bg-greenforest flex justify-between items-center px-2">
            <section className="py-1 flex justify-center items-center ">
                <Link href=""><Image src="/img/coffee.png" alt="logo-coffee" width={80} height={80} /></Link>
                {/* <h1>KP</h1> */}
            </section>
          <HeaderNavigate/>
        </header>
    )
}
