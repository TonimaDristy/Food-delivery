import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="h-20 px-6">
            {/* LOGO + MENU STACKED */}
            <div className="flex flex-col items-start">
                <Link
                    href="/"
                    className="text-2xl font-bold no-underline"
                >
                    EatUp
                </Link>

                <Menu />
            </div>
        </div>
    );
};

export default Navbar;
