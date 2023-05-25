import Link from "next/link";
import HomeLink from "./HomeLink";
import Menu from "./Menu";

const WebpageNav = () => {
  return (
    <section className='hidden md:block my-0 py-0 text-sm fixed w-60 '>
      <HomeLink />
      <nav className='pt-10'>
        <Menu />
      </nav>
    </section>
  );
};

export default WebpageNav;