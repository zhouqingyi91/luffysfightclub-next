import MobileNav from "./MobileNav";
import WebpageNav from "./WebpageNav";

const NavBar = () => {
  return (
    <article className='font-semibold tracking-wider uppercase'>
      <WebpageNav />
      <MobileNav />
    </article>
  );
};

export default NavBar;