  import Layout from '../components/Layout';

  export default function CampoSanto() {
    return (
      <Layout>
        <div className="container">
          <ul className="slider">
            <li id="slide1">
              <img src="./img/camposanto1.png" alt="Campo Santo"/>
            </li>
            <li id="slide2">
              <img src="./img/camposanto2.png" alt="Campo Santo"/>
            </li>
            <li id="slide3">
              <img src="./img/camposanto3.png" alt="Campo Santo" />
            </li>
            <li id="slide4">
              <img src="./img/camposanto4.png" alt="Campo Santo"/>
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
            
          </ul>
        </div>
        <div className='info-proyect'>
          <h5>CAMPO SANTO</h5>
          <ul>
            <li>Cortometraje de ficción. 16mm</li>
            <li>Guión y dirección</li>
            <li>Córdoba, Argentina 2011-2012</li>
          </ul>
          <p>Luego de experimentar un encuentro cercano con una virgen coplera, Clementina (50) decide emprender un viaje en
moto en busca de un lugar llamado Campo Santo, el camino le traerá un encuentro inesperado con el pasado.</p>
        </div>      
      </Layout>
    )
  }


