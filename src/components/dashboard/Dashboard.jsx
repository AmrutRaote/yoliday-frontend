import { useState, useEffect } from "react";
import ProjectsCard from "./ProjectsCard";
import SearchPanel from "./SearchPanel";

function Dashboard ()
{
    const [ searchQuery, setSearchQuery ] = useState( "" );
    const [ projects, setProjects ] = useState( [] );

    useEffect( () =>
    {
        const fetchProjects = async () =>
        {
            try
            {
                const response = await fetch( import.meta.env.VITE_DATA_URL );
                const result = await response.json();

                if ( result.statusCode === 200 && result.data )
                {
                    const projectArray = Object.values( result.data );
                    setProjects( projectArray );
                } else
                {
                    console.error( "Invalid response format", result );
                }
            } catch ( error )
            {
                console.error( "Error fetching projects:", error );
            }
        };

        fetchProjects();
    }, [] );

    const filteredProjects = projects.filter( ( project ) =>
        project.title.toLowerCase().includes( searchQuery.toLowerCase() )
    );

    return (
        <div className="h-full sm:h-full sm:p-5 sm:bg-slate-100">
            <div className="bg-white rounded-lg ">
                <h2 className="hidden p-5 text-2xl font-semibold sm:block">Portfolio</h2>
                <SearchPanel onSearch={ ( query ) => setSearchQuery( query ) } />

                <div className="mx-5 my-5 h-[650px] sm:h-[500px] overflow-y-auto">
                    { filteredProjects.length === 0 ? (
                        <h2 className="text-xl font-semibold text-center">No projects found</h2>
                    ) : (
                        filteredProjects.map( ( project, index ) => (
                            <ProjectsCard key={ index } project={ project } />
                        ) )
                    ) }
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
