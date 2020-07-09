import React from 'react'; //ngambil dari node modul


function Tombol(a){
  return <button onClick={()=>alert('Hai ini')}>{a.Kata} </button>
}


function Hai(){
  return <div>
    <p>Saya</p>
  <Tombol Kata="Klik disini" />
  <Tombol Kata="Ini aku"/>
  </div>
}

//diakhir harus pake export nama functionnya
export default Hai;