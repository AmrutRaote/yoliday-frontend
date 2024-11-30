import { TbHomeFilled } from "react-icons/tb";
import { PiBagSimpleFill } from "react-icons/pi";
import { HiDocumentPlus } from "react-icons/hi2";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Footer ()
{
    const MenuList = [
        {
            name: "Home",
            icon: <TbHomeFilled className="size-8" />,
            path: "/dashboard",
        },
        {
            name: "Portfolio",
            icon: <PiBagSimpleFill className="size-8" />,
            path: "/portfolio",
        },
        {
            name: "Inputs",
            icon: <HiDocumentPlus className="size-8" />,
            path: "/inputs",
        },
        {
            name: "Profile",
            icon: <FaUser className="size-8" />,
            path: "/profile",
        },
    ];

    return (
        <div className="flex justify-center border-t-2 rounded-3xl">
            { MenuList.map( ( item, index ) => (
                <Link
                    key={ index }
                    to={ item.path } // Use the Link component for routing
                    className="flex flex-col w-[90px] items-center justify-center gap-3 p-3 mt-1 bg-white cursor-pointer hover:border-t-2 hover:border-t-[#DF5532] hover:text-[#DF5532] text-slate-400"
                >
                    { item.icon }
                    <h2 className="text-base">{ item.name }</h2>
                </Link>
            ) ) }
        </div>
    );
}

export default Footer;
