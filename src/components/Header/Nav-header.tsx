
import React from 'react'
import ItemNavBar from './Item-nav'

const navBarItems=[
    {path:"/about", title:"Acerca de mi"},
    {path:"/projects", title:"Proyectos"},
    {path:"/services", title:"Servicios"},
    {path:"/contact", title:"Contáctame"}
]

export default function HeaderNavigate() {
    return (
        <nav >
            <div className='flex space-x-6 font-bold text-whites'>
                {navBarItems.map((item,key)=>(
                    <ItemNavBar path={item.path}title={item.title} key={key}/>
                ))}
            </div>
        </nav>
    )
}
