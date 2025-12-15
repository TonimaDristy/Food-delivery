import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="h-12 p-4 flex items-center justify-between border-b-2 border-red-500 uppercase">
            {/* LOGO */}
            <div className="text-xl font-bold">
                <Link href="/" className="text-red-500 no-underline">
                    EatUp
                </Link>
            </div>

            {/* MOBILE MENU */}
            <Menu />
        </div>
    );
};

export default Navbar;
