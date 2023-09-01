import { useState } from 'react'

function App() {

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(storageJobs)
    return storageJobs ?? []
  })

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]

      //save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }

  const handleDelete = (job)=> {
    setJobs(prev => {
      const newJobs = prev.filter(newJob => newJob !== job)

      // save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.clear()
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
  }

  return (
    <div style={{ padding: 32 }}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <div>
            <li key={index}>{job}</li>
            <button onClick={()=> handleDelete(job)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;