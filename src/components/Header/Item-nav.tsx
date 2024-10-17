"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export interface IpropsItemNavbar{
    path: string;
    title: string;
 
}
export default function ItemNavBar({path,title}:IpropsItemNavbar) {
    const currentPath = usePathname();
  return (
    <Link href={path}className={`hover:text-salmon ${currentPath === path ? "text-salmon" : ""}`} >{title}</Link>
  )
}

