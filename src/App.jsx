import React from 'react'
import Course from './Course';

function App() {

  const cursos = [
    {
      id: 1,
      nome: 'React',
      descricao: 'Aprenda componentes, props e hooks.',
      carga: '40h',
    },
    {
      id: 2,
      nome: 'JavaScript',
      descricao: 'Domine ES6+, funções e objetos.',
      carga: '30h',
    },
    {
      id: 3,
      nome: 'HTML e CSS',
      descricao: 'Crie páginas modernas e responsivas.',
      carga: '20h',
    },
  ];

  const [active, setactive] = React.useState(null);
  const [course, setCourse] = React.useState(null);



  return (
    <>
      <h1>Avaliable Courses</h1>
      <Course courses={cursos} course={course} setCourse={setCourse} active={active} setActive={setactive}/>
    </>
  )
}

export default App
