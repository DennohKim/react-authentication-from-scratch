
import { Route, Routes } from 'react-router';
import Register from './pages/Register';

function App() {
  

  return (
    <main className="App">
    <Routes>
    <Route path="/register" element={<Register/>}/>

    </Routes>
     
    </main>
  )
}

export default App
