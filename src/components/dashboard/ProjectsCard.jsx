
import { Button } from "../ui/button";

function ProjectsCard ( { project } )
{
    return (
        <div className="flex flex-row shadow-md my-5 rounded-xl w-full sm:h-[161px] sm:w-[811px] h-[132px] bg-white">
            {/* Image Section */ }
            <img
                className="rounded-l-xl w-[120px]  sm:w-[200px] sm:h-full object-cover"
                src={ project?.image }
                alt="project sample"
            />

            {/* Content Section */ }
            <div className="flex flex-col justify-between w-full p-4 sm:mx-5 ">
                {/* Title */ }
                <h2 className="text-base font-semibold sm:text-lg">
                    { project?.title || "Kemampuan Merangkum Tulisan" }
                </h2>

                {/* Description */ }
                <p className="hidden my-2 sm:block sm:text-sm text-slate-400 line-clamp-2">
                    { project?.description }
                </p>

                {/* Footer */ }
                <div className="flex items-center justify-between gap-5 mt-4 sm:mt-5">
                    {/* Author Details */ }
                    <div>
                        <h2 className="text-xs font-medium sm:text-base">{ project?.name }</h2>
                        <h2 className="text-[10px] sm:text-sm text-slate-400">{ project?.sub_name }</h2>
                    </div>

                    {/* Button */ }
                    <Button className="px-3 py-1 sm:px-5 sm:py-2 text-xs sm:text-sm bg-gradient-to-br from-[#F39519] to-[#FFCD67]">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProjectsCard;


// // ////////////////////////////////////


// import { Button } from "../ui/button"

// function ProjectsCard ( { project } )
// {
//     return (
//         <div className="flex sm:h-[161px] sm:w-[811px] h-[110px] w-[343px] shadow-md my-5 rounded-xl">

            
//             <img className="rounded-l-xl " src={ project?.image } alt="smaple" />

//             <div className="mx-5">
//                 <h2 className="text-lg font-semibold">{ project?.title || "Kemampuan Merangkum Tulisan" } </h2>
//                 <p className="text-sm text-slate-400 line-clamp-2">{ project?.description }</p>

//                 <div className="flex items-center justify-between mt-5">

//                     <div>
//                         <h2>{ project?.name }</h2>
//                         <h2 className="text-slate-400">{ project?.sub_name }</h2>
//                     </div>


//                     <Button className="bg-gradient-to-br from-[#F39519] to-[#FFCD67]">Add to Cart</Button>

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default ProjectsCard
