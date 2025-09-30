import React,{useState} from "react";
import AllMovies from "./AllMovies";
        
export default function Filter(){
    const [value,setValue] = useState('')
    return (
        <>
            <form  style={{position:'relative',left:'80%',marginTop:10}} >
                <label htmlFor="fitler" >
                    <input 
                    style={{border:'2px solid black', padding:5}}
                    type="text"
                     value={value} 
                     placeholder="search for a movie " 
                     name="filter" 
                     onChange={(e)=> setValue(e.target.value)} 
                     id='Filter' 
                     />
                </label>
            </form>
            {<AllMovies value={value}/>}
        </>

    )
}