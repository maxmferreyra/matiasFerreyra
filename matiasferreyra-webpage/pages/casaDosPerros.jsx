import Layout from '../components/Layout';

  export default function CasaDosPerros() {
    return (
      <Layout>
        <div className="container">
          <ul className="slider">
            <li id="slide1">
              <img src="./img/unacasacondosperros1.jpg" alt="unacasacondosperros"/>
            </li>
            <li id="slide2">
              <img src="./img/unacasacondosperros2.jpg" alt="unacasacondosperros"/>
            </li>
            <li id="slide3">
              <img src="./img/unacasacondosperros3.png" alt="unacasacondosperros"/>
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
          </ul>
        </div>
        <div className='info-proyect'>
          <h5>UNA CASA CON DOS PERROS</h5>
          <ul>
            <li>Guion y dirección.</li>
            <li>Opera prima. Largometraje de ficción. En desarrollo</li>
            <li>Córdoba, Argentina. 2017 - 2021</li>
          </ul>
          <p>Atrapado en el medio de una extraña guerra por la ocupación de la casa familiar, Manuel de 9 años, siente que su
             familia ya no es un lugar seguro para él. Pronto encuentra, en la complicidad con su abuela esquizofrénica, un
             modo de resistir, pero como en todo ecosistema familiar sucede, la regla es adaptarse o desaparecer.  </p>
        </div>      
      </Layout>
    )
  }