import React from 'react'
import Link from 'next/link';
import Header from '@/components/Header/Header';


interface IProps {
    children: React.ReactNode;

}
export default function layout({ children }: IProps) {
    // const { children } = props
    return (
        <div>
            <Header/>
            {children}
            {/* <h1>layout</h1> */}
            <footer>Footer</footer>
        </div>
    )
}
