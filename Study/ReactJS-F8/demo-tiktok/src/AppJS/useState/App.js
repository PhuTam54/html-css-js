import { useState } from 'react'

/* 
- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback?
- Initital state với callback?
- Set state là thay thế state bằng giá trị mới
*/
const orders = [100, 200, 300]

function App() {
  // ex1
  const [counter, setCounter] = useState(()=> {
    const total = orders.reduce((total, cur) => total + cur)

    console.log(total);
    return total
  })

  const handleIncrease = ()=> {
    // setCounter(counter + 1)
    setCounter(prevState => prevState + 1)
  }

  //return (
  //   <div className="App" style={{padding: 20}}>
  //     <h1>{counter}</h1>
  //     <button onClick = {handleIncrease}>Increase</button>
  //   </div>
  // );


  // ex2
  const [info, setInfo] = useState({
    name: 'Phu Tam',
    age: 19,
    address: 'BN'
  })

  const handleUpdate = ()=> {
    setInfo({
      ...info,
      bio: 'Yeu mau hong, man'
    })
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick = {handleUpdate}>Update</button>
    </div>
  );
}

export default App;