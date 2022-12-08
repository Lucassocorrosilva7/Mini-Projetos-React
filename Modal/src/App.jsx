import { useState } from 'react'
import Modal from './components/Modal'

const App = () => {
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    setModal(true);
  }

  return (
    <main className='main'>
    <button onClick={handleClick}>Modal</button>
      <Modal open={modal} onClose={() =>setModal(false)}/>
    </main>
  )
}

export default App