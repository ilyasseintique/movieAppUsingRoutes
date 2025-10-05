import Filter from "./Components/Filter"
import { Route,Routes } from "react-router-dom"
import ShoweMov from './Components/Show'

export default function App(){
  return (
    <>
      <Routes>
            <Route path='/' element={<Filter/>}/>
            <Route path='/movie/:id' element={<ShoweMov/>}/>
      </Routes>
    </>
  )


}