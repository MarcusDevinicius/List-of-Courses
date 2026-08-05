import React from 'react'

const Course = ({courses, course, setCourse, active, setActive}) => {

    let currentCourse;

    function handleClick(id) {
        if(course === id) {
            setCourse(null);
        }
        else {
            setCourse(id)
        }
    }

  return (
    <div>
        {courses.map(({id, nome, descricao, carga}) => ( 
            <div key={id}>
                <h2>{nome}</h2>
                {/* <p>{course === id ? descricao : ''}</p> */}
                {course === id && (
                    <>
                        <p>{descricao}</p>
                        <p>{carga}</p>
                    </>
                )}
                <button onClick={() => handleClick(id)}>{course === id ? 'Show less' : 'See details'}</button>
            </div>
        ))}
    </div>
  )
}

export default Course;