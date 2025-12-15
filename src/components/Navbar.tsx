import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 border-b-2 border-red-500">
            {/* LOGO */}
            <Link
                href="/"
                className="text-6xl font-extrabold text-red-600 uppercase no-underline leading-none"
            >
                EatUp
            </Link>

            {/* MOBILE MENU */}
            <Menu />
        </div>
    );
};

export default Navbar;
