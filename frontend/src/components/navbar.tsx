import {useState} from 'react';
import SearchBar from './searchbar';
import Button from './button';

function NavLink({to, children}) {
    return <a href={to} className={`mx-1`}>
        {children}
    </a>
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex drop-shadow-md bg-white px-4 py-4 h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-start">
                <a className="text-2xl font-semibold" href="/">GSX</a>
            </div>

            <div className="w-1/2">
                <SearchBar/>
            </div>

            <div className="flex justify-end">

                {/* <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}> */}
                    {/* hamburger button */}
                    {/* <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} /> */}
                    {/* <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} /> */}
                    {/* <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} /> */}
                {/* </div> */}

                <NavLink to="/contact">
                    <button className="w-20 bg-transparent hover:bg-gray-100 text-blue-700 font-semibold py-2 border border-blue-500 rounded">
                        Sign Up
                    </button>
                </NavLink>
                <NavLink to="/about">
                    <button className="w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                        Login
                    </button>
                </NavLink>
            </div>
        </nav>
    )
}