import { Link, useLocation } from "react-router-dom";

function Sidebar ()
{
    const location = useLocation();
    const MenuList = [
        {
            name: "Dashboard",
            icon: "/dashboard.png",
            path: "/dashboard",
        },
        {
            name: "Portfolio",
            icon: "/portfolio.png",
            path: "/portfolio",
        },
        {
            name: "Inputs",
            icon: "/input.png",
            path: "/inputs",
        },
        {
            name: "Profile",
            icon: "/profile.png",
            path: "/profile",
        },
    ];

    return (
        <div className="relative h-screen bg-[#DF5532] w-[236px] border shadow-sm">
            <div className="flex items-center gap-3 p-4">
                <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                <h2 className="text-lg text-white">LOGO</h2>
            </div>

            <div className="mt-14">
                { MenuList.map( ( item, index ) => (
                    <Link
                        to={ item.path }
                        key={ index }
                        className={ `flex items-center gap-3 px-4 py-2 my-4 text-white rounded-md cursor-pointer 
                            ${ location.pathname === item.path ? 'bg-gradient-to-r  from-white/60 to-transparent' : 'hover:bg-gradient-to-r hover:from-white/20 hover:to-transparent' } ` }
                    >
                        <img src={ item.icon } alt={ `icon` } className="w-6 h-6" />
                        <h2 className="text-base">{ item.name }</h2>
                    </Link>
                ) ) }
            </div>
        </div>
    );
}

export default Sidebar;
