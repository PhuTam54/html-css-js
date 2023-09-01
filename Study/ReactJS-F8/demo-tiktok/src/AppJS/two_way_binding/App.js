import { useState } from 'react'

// Response from API
const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  },
]

function App() {
  // Checkbox
  const [checked, setChecked] = useState([])
  
  const handleCheck = ( id ) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    // Call API
    console.log({ ids: checked });
  }
  
  return (
    <div style={{ padding: 32 }}>
      {courses.map( course => (
        <div key={ course.id }>
          <input 
          type='checkbox'
          checked={checked.includes(course.id)}
          onChange={()=> handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default App;

// Radio
// const [checked, setChecked] = useState()
  
//   const handleSubmit = () => {
//     // Call API
//     console.log({ id: checked });
//   }
  
//   return (
//     <div style={{ padding: 32 }}>
//       {courses.map( course => (
//         <div key={ course.id }>
//           <input 
//           type='radio'
//           checked={checked === course.id}
//           onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}

//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );

// Input
// const [name, setName] = useState('')
// const [email, setEmail] = useState('')
// <input
//   value={name}
//   onChange={e => setName(e.target.value)}
// />
// <br></br>
// <input
//   value={email}
//   onChange={e => setEmail(e.target.value)}
// />
// <br></br>
