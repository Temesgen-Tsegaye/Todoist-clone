
const Projectform=({project,handleProject,handleProjects, settogglep})=>{
         
    return (
        <div className='projectformcontainer'>
            <input onChange={(e)=>{handleProject(e.target.value); console.log(e.target.value)}} value={project.project} type="text" />
            <div>
                <button onClick={()=>{{handleProjects()} {settogglep(false)}console.log('added')}}>Add</button>
                <button onClick={()=>{settogglep(false)}} >Cancel</button>
            </div>
        </div>

    )
}
export default Projectform