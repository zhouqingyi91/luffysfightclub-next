'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();
  return (
    <ul className='space-y-2 hover:[&>li>a]:text-white'>
      <li>
        <Link
          href={'/street'}
          className={pathname.startsWith('/street') ? 'text-white' : ''}
        >
          street
        </Link>
      </li>
      <li>
        <Link
          href={'/portrait'}
          className={pathname.startsWith('/portrait') ? 'text-white' : ''}
        >
          portrait
        </Link>
      </li>
    </ul>
  );
};

export default Menu;