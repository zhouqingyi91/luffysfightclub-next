'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link'
import React from 'react'

export default function HomeLink() {
  const pathname = usePathname();

  return (
    <h1>
      <Link
        className={`text-xl md:text-lg capitalize hover:text-white 
        ${pathname === "/" ? "text-white" : ""}`}
        href={"/"}
      >
        luffysfightclub
      </Link>
    </h1>
  )
}
