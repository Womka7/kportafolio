import React from 'react'
import Header from '../components/Header/Header';
import Link from 'next/link';


interface IProps {
    children: React.ReactNode;

}
export default function layout({ children }: IProps) {
    // const { children } = props
    return (
        <div>
            <Header>
                <li><Link href="">My Projects</Link></li>
                <li><Link href="">Contact me</Link></li>
            </Header>

            {/* <header>Header</header> */}
            {children}
            {/* <h1>layout</h1> */}
            <footer>Footer</footer>
        </div>
    )
}
