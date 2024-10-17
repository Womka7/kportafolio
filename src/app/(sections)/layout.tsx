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
            <main className="flex-grow h-62 border-2 border-red-700">
                {children}
            </main>
            <Footer />
        </div>
    )
}
