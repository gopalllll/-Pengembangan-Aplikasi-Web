import './style.css'

export const MenuAtas = (props: {warna: string}) => {
  return (
    <div id="menu-atas" style={{
      background: props.warna,
    }}>
      <h1>Perpus</h1>
      <div className="burger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
