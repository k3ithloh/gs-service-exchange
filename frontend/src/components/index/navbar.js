import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = ( auth ) => {
  const { data: session } = useSession()

  const signInOptions = () => {
    if (session) {
      return (
        <div className='ml-12 w-24'>
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,6c1.93,0,3.5,1.57,3.5,3.5S13.93,13,12,13 s-3.5-1.57-3.5-3.5S10.07,6,12,6z M12,20c-2.03,0-4.43-0.82-6.14-2.88C7.55,15.8,9.68,15,12,15s4.45,0.8,6.14,2.12 C16.43,19.18,14.03,20,12,20z"/></g></svg>
        </div>
      )
    } else {
      return (
      // <Link href="/login">
        <button className='text-white font-bold hover:bg-grey_600 rounded-lg py-1 w-24 text-center' onClick={signIn}>
          Sign In
        </button>
      // </Link>
      )

    }
  }

  return (
    <nav className="flex h-20 items-center justify-between px-44 py-4 drop-shadow-md bg-grey_800">
      <div className="flex items-center justify-start">
        <Link href="/">
          <Image
            alt="GS Logo"
            src="/gs-logo-white.png"
            layout="fixed"
            height={100}
            width={100}
          />
        </Link>
      </div>

      <div className="flex justify-end items-center">
        <Link href="/about">
          <a className='text-white font-bold hover:bg-grey_600 rounded-lg py-1 w-24 text-center'>
            About
          </a>
        </Link>
        
        <Link href="/about">
          <a className='text-white font-bold hover:bg-grey_600 rounded-lg py-1 w-24 text-center'>Services</a>
        </Link>

        <div className="hover:bg-grey_600 rounded-lg py-1 w-24 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </div>

        <a className='text-grey_600'>|</a>
        
        {signInOptions()}

      </div>
    </nav>
  );
}

export default Navbar;