import Link from 'next/link';
import { useState } from 'react';
export default function Navbar(){
    return (
      <div className="flex flex-row h-20 py-4">
        <div className="flex justify-start flex-grow space-x-6 text-xl">
          <Link href="/">
          Feature<span className="text-orange-500">Hunt</span>
          </Link>
          <span className="text-lg hover:cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-orange-500">About</span>
        </div>
        <div className="flex justify-end h-10">
          <Link
          href="/submit"
            className="text-base rounded-md px-4 py-2 text-orange-500 bg-orange-100 hover:cursor-pointer"
          >
            Submit
          </Link>
        </div>
      </div>
    );
}