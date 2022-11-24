
const Projectform=({project,handleProject,handleProjects, settogglep})=>{
          const filter=()=>{
          
            

          }
    return (
        <div className='projectformcontainer'>
            <input value={project.project} onChange={(e)=>{handleProject(e)}} type="text" />
            <div>
                <button onClick={()=>{{handleProjects()} {settogglep(false)}}}>Add</button>
                <button onClick={()=>{settogglep(false)}} >Cancel</button>
            </div>
        </div>

    )
}
export default Projectform