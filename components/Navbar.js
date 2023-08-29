import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r  from-emerald-500 to-emerald-900 py-4">
            <div className="container px-4 flex justify-center items-center md:justify-start md:pl-16 md:pt-5">
                <h1 className="text-3xl font-semibold text-white text-center">TaskTrackr</h1>
            </div>
        </nav>
    );
};

export default Navbar;
