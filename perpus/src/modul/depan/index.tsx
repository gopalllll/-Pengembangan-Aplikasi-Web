import { MenuAtas } from "../../berbagi/komponen/MenuAtas"
import { DepanBukuRekomendasi } from "./BukuRekomendasi"
import { DepanBukuTerbaru } from "./BukuTerbaru"
import { DepanKategori } from "./Kategori"

export const Depan = () => {
  return (
    <div>
      <MenuAtas warna="#aa7755" />
      {/* MenuAtas : Logo Perpus, tombol menu: (kategori, login) */}
      
      {/* Buku rekomendasi */}
      <DepanBukuRekomendasi />

      {/* Buku terbaru */}
      <DepanBukuTerbaru />

      {/* Kategori (dari yg paling diminati) */}
      <DepanKategori />
    </div>
  )
}
