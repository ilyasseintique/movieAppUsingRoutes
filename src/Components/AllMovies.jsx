// import React, {useState } from 'react';
// import Movies from './Films';
// import '../App.css';

// export default function AllMovies({value}) {
//   const [newMovie,setNewMovie] = useState(Movies)
//   const [arr,setArr] = useState(Array(4).fill(null))
//   const [toggling,setToggling] = useState(true)
//   function appendobj(arr){
//   let obj = {
//     title : arr[0],
//     description : arr[1],
//     posterURL : arr[2],
//     rating : arr[3]
//   }
//   setNewMovie([...Movies],obj)
// }
//     const filteredfilms = value ? newMovie.filter((mov)=> {
//        return mov.title.toLowerCase().includes(value.toLowerCase()) || value==Number(mov.rating)
//     }) : newMovie
//   return (
//     <>
//       <div className="ml-12 mt-10 gap-y-10 gap-x-10 grid md:grid-cols-4 text-center">
//         {filteredfilms.map((movie) => (
//       <MovieCard key={movie.title} movie={movie} /> 
//         ))}
//         <button onClick={()=> setToggling(!toggling)} className='md:w-[20vw] w-[77vw]  bg-gray-600/40 h-[65vh] rounded-xl flex justify-center items-center text-lg font-bold flex-col ' >
//           <h2>Add your movie </h2>
//           <i className="fa-solid fa-plus text-6xl "></i>
//         </button>
//       </div>
//       { toggling || <Form/> }
//     </>
    
//   );
// }

// function Form(){
//   return(
//     <form className='flex flex-col gap-5 relative left-1/2 bg-gray-400 w-120 mb-10 pb-5'>
//       <input  type="text" placeholder=' title' className='w-120 h-8 text-black' onChange={(e) => {
//         arr[0]=e.target.value;
//         }}
//         />
//       <input  type="text" placeholder=' posterURL' className='w-120 h-8 text-black' onChange={(e) => {
//         arr[1]=e.target.value;
//          }}
//         />
//       <input  type="text" placeholder=' description' className='w-120 h-8 text-black' onChange={(e) => {
//         arr[2]=e.target.value;
//          }}
//         />
//       <input  type="text" placeholder=' rating' className='w-120 h-8 text-black' onChange={(e) => {
//         arr[3]=e.target.value;
//          }}
//         />
//         <button type='submit' className='w-80 h-10 bg-blue-500/80 ml-20 rounded-md ' onClick={()=>{appendobj(arr); setArr(arr.fill(null)); setToggling(true) }}>Add</button>
//     </form>
//   )
// }

// function MovieCard({ movie }) {
//   const [details, setDetails] = useState('');

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-72 hover:scale-105 transition-transform duration-300">
//       <img
//         src={movie.posterURL}
//         alt={movie.title}
//         className="w-full h-96 object-cover"
//       />
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-gray-800">{movie.title}</h2>
//         <p className="text-gray-600 text-sm mt-2 line-clamp-3">
//           {details}
//         </p>
//         <div className="flex items-center justify-between mt-4">
//           <span className="text-yellow-500 font-semibold">⭐ {movie.rating}</span>
//           <button
//             onClick={() => setDetails(details ? '' : movie.description)}
//             className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 text-sm"
//           >
//             {details ? 'Hide' : 'Details'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import Movies from './Films';
import '../App.css';

export default function AllMovies({ value }) {
  const [newMovie, setNewMovie] = useState(Movies);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: ""
  });
  const [toggling, setToggling] = useState(true);

  const filteredfilms = value
    ? newMovie.filter((mov) => {
        return (
          mov.title.toLowerCase().includes(value.toLowerCase()) ||
          value == Number(mov.rating)
        );
      })
    : newMovie;

  const appendobj = (e) => {
    e.preventDefault(); // stop form refresh
    let obj = { ...formData };
    setNewMovie([...newMovie, obj]); // add new movie
    setFormData({ title: "", description: "", posterURL: "", rating: "" }); // reset
    setToggling(true);
  };

  return (
    <>
      <div className="ml-12 mt-10 gap-y-10 gap-x-10 grid md:grid-cols-4 text-center">
        {filteredfilms.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}

        <button
          onClick={() => setToggling(!toggling)}
          className="md:w-[20vw] w-[77vw] bg-gray-600/40 h-[65vh] rounded-xl flex justify-center items-center text-lg font-bold flex-col"
        >
          <h2>Add your movie </h2>
          <i className="fa-solid fa-plus text-6xl "></i>
        </button>
      </div>

      {!toggling && (
        <Form formData={formData} setFormData={setFormData} appendobj={appendobj} />
      )}
    </>
  );
}

function Form({ formData, setFormData, appendobj }) {
  return (
    <form
      className="flex flex-col gap-5 relative left-1/2 bg-gray-400 w-120 mb-10 pb-5"
      onSubmit={appendobj}
    >
      <input
        type="text"
        placeholder="title"
        className="w-120 h-8 text-black"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="posterURL"
        className="w-120 h-8 text-black"
        value={formData.posterURL}
        onChange={(e) => setFormData({ ...formData, posterURL: e.target.value })}
      />
      <input
        type="text"
        placeholder="description"
        className="w-120 h-8 text-black"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="rating"
        className="w-120 h-8 text-black"
        value={formData.rating}
        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
      />
      <button
        type="submit"
        className="w-80 h-10 bg-blue-500/80 ml-20 rounded-md"
      >
        Add
      </button>
    </form>
  );
}

function MovieCard({ movie }) {
  const [details, setDetails] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-72 hover:scale-105 transition-transform duration-300">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-96 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{movie.title}</h2>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{details}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-yellow-500 font-semibold">
            ⭐ {movie.rating}
          </span>
          <button
            onClick={() => setDetails(details ? "" : movie.description)}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 text-sm"
          >
            {details ? "Hide" : "Details"}
          </button>
        </div>
      </div>
    </div>
  );
}
