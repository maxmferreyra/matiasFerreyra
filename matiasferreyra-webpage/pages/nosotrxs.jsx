import Layout from '../components/Layout';

  export default function Nosotrxs() {
    return (
      <Layout>
        <div className="container">
          <ul className="slider">
            <li id="slide1">
              <img src="./img/nosotrxs1.jpg" alt="Nosotrxs"/>
            </li>
            <li id="slide2">
              <img src="./img/nosotrxs2.png" alt="Nosotrxs"/>
            </li>
            <li id="slide3">
              <img src="./img/nosotrxs3.png" alt="Nosotrxs"/>
            </li>
            <li id="slide4">
              <img src="./img/nosotrxs4.jpg" alt="Nosotrxs"/>
            </li>
            <li id="slide5">
              <img src="./img/nosotrxs5.jpg" alt="Nosotrxs"/>
            </li>
            <li id="slide6">
              <img src="./img/nosotrxs6.jpg" alt="Nosotrxs"/>
            </li>
          </ul>
  
          <ul className="menu">
            <li>
              <a href="#slide1"></a>
            </li>
            <li>
              <a href="#slide2"></a>
            </li>
            <li>
              <a href="#slide3"></a>
            </li>
            <li>
              <a href="#slide4"></a>
            </li>
            <li>
              <a href="#slide5"></a>
            </li>
            <li>
              <a href="#slide6"></a>
            </li>
            
          </ul>
        </div>
        <div className='info-proyect'>
          <h5>NOS(OTRXS)</h5>
          <ul>
            <li>Cortometraje documental</li>
            <li>Dirección y guión</li>
            <li>Córdoba, Argentina. 2016-2017</li>
          </ul>
          <p>Un set en blanco. Una mujer sostiene una pregunta y un personaje encapuchado se resiste a responderla. La pregunta
            se vuelve otras. Una familia posa alrededor del padre para un retrato. Venus se busca en el espejo. Y una voz
            omnipresente exige respuestas, la respuesta es un grito.</p>
        </div>      
      </Layout>
    )
  }