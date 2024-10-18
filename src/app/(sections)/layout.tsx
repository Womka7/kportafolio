import React from 'react'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';


interface IProps {
    children: React.ReactNode;

}
export default function layout({ children }: IProps) {
    // const { children } = props
    return (
        <div className="min-h-screen flex flex-col ">
            <Header />
            <main className="flex-grow bg-greenaqua">
                {children}
            </main>
            <Footer />
        </div>
    )
}
