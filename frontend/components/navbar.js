import SearchBar from './searchbar';

function NavLink({to, children,}){
  return (
    <a href={to} className={`mx-1`}>
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <nav className="flex h-20 items-center justify-between bg-white px-4 py-4 drop-shadow-md">
      {/* Logo */}
      <div className="flex items-center justify-start">
        <a className="text-2xl font-semibold" href="/">
          GSX
        </a>
      </div>

      <div className="w-1/2">
        <SearchBar />
      </div>

      <div className="flex justify-end">

        <NavLink to="/contact">
          <button className="w-20 rounded border border-blue-500 bg-transparent py-2 font-semibold text-blue-700 hover:bg-gray-100">
            Sign Up
          </button>
        </NavLink>
        <NavLink to="/about">
          <button className="w-20 rounded bg-blue-500 py-2 font-bold text-white hover:bg-blue-700">
            Login
          </button>
        </NavLink>
      </div>
    </nav>
  );
}
