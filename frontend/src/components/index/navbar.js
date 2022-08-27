import SearchBar from './searchbar';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex h-20 items-center justify-between px-4 py-4 drop-shadow-md">
      {/* Logo */}
      <div className="flex items-center justify-start">
        <Link className="text-2xl font-semibold" href="/">
          GSX
        </Link>
      </div>

      <div className="w-1/2">
        <SearchBar />
      </div>

      <div className="flex justify-end gap-x-5 ">

        <Link href="/register">
          <button className="w-20 rounded border border-blue-500 bg-transparent py-2 font-semibold text-blue-700 hover:bg-gray-100">
            Sign Up
          </button>
        </Link>
        <Link href="/login">
          <button className="w-20 rounded bg-blue-500 py-2 font-bold text-white hover:bg-blue-700">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
