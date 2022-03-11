import { useParams, useNavigate, useLocation } from 'react-router-dom'
function Movie() {
   const { title } = useParams()
   const navigate = useNavigate()
   const location = useLocation()
   return <><h1>Movie page {title}</h1><button className='btn' onClick={() => { navigate("/") }} >Go back</button></>
}
export { Movie }