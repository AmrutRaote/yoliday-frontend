import { Search } from "lucide-react";

function SearchPanel ( { onSearch } )
{
    const MenuList = [
        { name: "Project" },
        { name: "Saved" },
        { name: "Shared" },
        { name: "Achievements" },
    ];

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:mt-4">
                {/* Menu List */ }
                <div className="flex justify-around sm:justify-start sm:mx-5">
                    { MenuList.map( ( item, index ) => (
                        <div
                            key={ index }
                            className={ `flex items-center gap-3 px-2 py-4 text-sm text-black cursor-pointer sm:px-4 sm:py-2 sm:text-base border-b-2 border-none hover:border-[#DF5532] hover:border-solid hover:text-[#DF5532] }` }
                        >
                            <h2 className="text-base">{ item.name }</h2>
                        </div>
                    ) ) }
                </div>

                <hr className="block w-full sm:hidden" />


                {/* Search and Filter Section */ }
                <div className="flex flex-col gap-2 mt-3 sm:mt-0 sm:flex-row sm:items-center">
                    {/* Filter Icon (Visible on larger screens) */ }
                    <div className="items-center justify-center hidden gap-3 sm:flex">
                        <img src="/filter.png" className="h-[15px]" alt="filter" />
                        <h2>Filter</h2>
                    </div>

                    {/* Search Bar */ }
                    <div className="flex items-center mx-2 bg-white border rounded-lg sm:mx-5">
                        <input
                            type="text"
                            placeholder="Search a project"
                            className="w-full px-3 py-2 text-lg outline-none sm:text-sm "
                            onChange={ ( e ) => onSearch( e.target.value ) }
                        />
                        <Search className="text-white bg-[#DF5532] mx-2 w-8 h-7 sm:h-6 sm:w-7 px-[6px]  rounded-lg" />
                    </div>
                </div>
            </div>
            <hr className=" sm:ml-5 w-[553px] hidden sm:block" />
        </>
    );
}

export default SearchPanel;

