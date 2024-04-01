"use client";

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const NavigationTestPage = () => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("b");

  console.log(q);

  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <div>
      <Link href="/" prefetch={false}>Click</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage
