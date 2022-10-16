import { HashRouter, Route, Routes } from 'react-router-dom'
import { BukuTambah } from './modul/buku/tambah'
import { Depan } from './modul/depan'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Depan />} />
          <Route path="/depan" element={<Depan />} />
          <Route path="/buku/tambah" element={<BukuTambah />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;
