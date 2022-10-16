import { useState } from "react"
import { MenuAtas } from "../../../berbagi/komponen/MenuAtas"

export const BukuTambah = () => {

  // const [buku, setBuku] = useState({
  //   judul: "",
  //   kategori: 0,
  //   penerbit: "",
  //   isbn: "",
  // })

  const [judul, setJudul] = useState("")
  const [kategori, setKategori] = useState(0)
  const [penerbit, setPenerbit] = useState("")
  const [isbn, setISBN] = useState("")

  const onChangeKategori = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const yangDipilih = parseInt(e.target.value) 
    setKategori(yangDipilih)

  } 

  const onChangeJudul = (e: React.ChangeEvent<HTMLInputElement>) => {
    const yangDiketik = e.target.value
    setJudul(yangDiketik)
  } 

  const onClickTambah = () => {
    const payloadPOSTKeServer = {
      judul: judul,
      kategori: kategori,
      penerbit: penerbit,
      isbn: isbn,
    }

    fetch("http://localhost:3100/buku", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payloadPOSTKeServer),
    }).then(responMentahDariServer => {
      return responMentahDariServer.json()
    }).then(responJSONDariServer => {
      console.log(responJSONDariServer)
    })
  }

  return (
    <div>
      <MenuAtas warna="#aa7755" />
      {/* MenuAtas : Logo Perpus, tombol menu: (kategori, login) */}

      <div style={{
        padding: 16,
        display: `flex`,
        flexDirection: `column`,
        gap: 8,
      }}>
        <select value={kategori} onChange={onChangeKategori}>
          <option value={0}>- Pilih Kategori -</option>
          <option value={1}>Non Fiksi</option>
          <option value={2}>Petualangan</option>
          <option value={3}>Aksi</option>
          <option value={4}>Horor</option>
        </select>
        {
          kategori !== 0 &&
          <div style={{
            display: `flex`,
            flexDirection: `column`,
            gap: 8,
          }}>
            <input value={judul} onChange={onChangeJudul} placeholder="Judul buku" />
            <input value={penerbit} placeholder="Penerbit" onChange={e => setPenerbit(e.target.value)} />
            <input value={isbn} placeholder="ISBN" onChange={e => setISBN(e.target.value)} />
            <button onClick={onClickTambah}>Tambah</button>

            <h3>
        Buku <u>{judul}</u> dengan kategori <u>{kategori}</u>, 
        penerbit <u>{penerbit}</u>,
        ISBN <u>{isbn}</u>,
          akan ditambahkan.

            Kirim struktur data {} ke server
            </h3>
          </div>
        }

      </div>
      
    </div>
  )
}
