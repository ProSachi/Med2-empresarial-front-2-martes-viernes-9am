import cursos from "../data/cursos"
import CursosCard from "./CursosCard"

const ListaCursos = () => {
  return (
    <>
   {cursos.map((curso)=>(
    <CursosCard key={curso.id} nombre={curso.titulo} modulo={curso.modulo}/>
    ))}
    </>
  )
}

export default ListaCursos