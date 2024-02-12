import Axios from 'axios';
import { useState, useEffect } from 'react';
import image from './assets/trash-can.png';
import penImage from './assets/pen.png';

function App() {

  const [userList, setUserList] = useState([]);
  const [nimi, uusiNimi] = useState();
  const [titteli, uusiTitteli] = useState();
  const [sahkoposti, uusiSahkoposti] = useState();
  const [puhelinnumero, uusiPuhelinnumero] = useState();
  const [paivitys, asetaPaivitys] = useState('0');
  const [id, uusiId] = useState();
  const [buttonName, setButtonName] = useState("Lisää");
  const [peruuta, asetaPeruuta] = useState(false);

  useEffect(() => {
    Axios.get('http://localhost:3001/hae').then((res) => {
    setUserList(res.data)
  }) 
  }, [paivitys]);

  const poistaTiedot = (id) => {
    Axios.delete(`http://localhsot:3001/poista/${id}`)
    .then(res => {
      console.log(`Poistettu käyttäjä ID:llä ${id}`)
    })
    .catch(err => {
      console.error(err)
    })
  }

  const talletaHenkilo = () => {
    Axios.post('http://localhost:3001/luo', {
      nimi: nimi,
      titteli: titteli,
      sahkopostiosoite: sahkoposti,
      puhelinnumero: puhelinnumero,
      id: id
    }).then((response) => {
      asetaPaivitys(paivitys + 1)
      document.getElementById("lomake").reset();
    })
  }

  const paivitaTiedot = (id) => {
    setButtonName("Päivitä")

    Axios.get("http://localhost:3001/haehenkilo/" + id).then((response) => {
      uusiNimi(response.data[0].nimi);
      uusiTitteli(response.data[0].titteli);
      uusiSahkoposti(response.data[0].sahkopostiosoite);
      uusiPuhelinnumero(response.data[0].puhelinnumero);
      uusiId(response.data[0].id);
      asetaPeruuta(true);
    })
  }

  const peruutaLomake = () => {
    document.getElementById("lomake").reset();
  }


  return (
    <div>
    {
      userList.map((user) => ( 
        <div className='card' key={user.id}>
          <div className="left">
            <h4>{user.titteli}</h4>
            <p>{user.nimi}</p>
            <p>{user.sahkopostiosoite}</p>
            <p>{user.puhelinnumero}</p>
          </div>
          <div className='right'>
            <img className="edit" src={penImage} onClick={() => {paivitaTiedot(item['id'])}} />
            <img className="delete" src={image} onClick={() => {poistaTiedot(item['id'])}}/>
          </div>
        </div>
      ))
    }
      <div className='card-add'>
        <h3>LISÄÄ HENKILÖ</h3>
        <form id="lomake">
          <label>Nimi:</label>
          <input type="text" value={nimi} onChange={(event) => {uusiNimi(event.target.value)}}></input>
          <label>Titteli:</label>
          <input type="text" value={titteli} onChange={(event) => {uusiTitteli(event.target.value)}}></input>
          <label>Sähköposti:</label>
          <input type="text" value={sahkoposti} onChange={(event) => {uusiSahkoposti(event.target.value)}}></input>
          <label>Puhelinnumero:</label>
          <input type="text" value={puhelinnumero} onChange={(event) => {uusiPuhelinnumero(event.target.value)}}></input>
          <input type="hidden" value={id} onChange={(event) => {uusiId(event.target.value)}}></input>
        </form>
        <button onClick={talletaHenkilo}>{buttonName}</button>
        {
          peruuta && <button onClick={peruutaLomake}>Peruuta</button>
        }
      </div>
    </div>
  );
}

export default App;
