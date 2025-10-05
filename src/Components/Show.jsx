import '../App.css'
import { useParams,Link } from 'react-router-dom';
import films from './Films';

export default function Show(){
    const { id } = useParams();
    const showedFilm = films.find((mov) => mov.id == Number(id))
    return(
        <div>
            <div className='h-150 flex justify-center items-center flex-col'>
                {showedFilm.iframe}
                <h1 className='text-xl font-bold text-center w-150 mt-5'>
                    <span><i>Description : </i></span>
                    {showedFilm.description}
                </h1>
            </div>
            <Link to={'/'}>
                <button className='w-32 h-10 bg-green-500/60 rounded-md relative left-1/2 -translate-x-1/2 cursor-pointer hover:bg-green-500/80 hover:shadow-2xl '>Go to home</button>
            </Link> 
        </div>
    )
}