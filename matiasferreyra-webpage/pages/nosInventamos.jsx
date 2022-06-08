import Layout from '../components/Layout';

  export default function NosInventamos() {
    return (
      <Layout>
        <div className="container">
          <ul className="slider">
            <li id="slide1">
              <img src="./img/nosinventamosunafuera1.png" alt="Nos inventamos una fuerza"/>
            </li>
            <li id="slide2">
              <img src="./img/nosinventamosunafuera2.png" alt="Nos inventamos una fuerza"/>
            </li>
            <li id="slide3">
              <img src="./img/nosinventamosunafuera3.jpg" alt="Campo Santo"/>
            </li>
            <li id="slide4">
              <img src="./img/nosinventamosunafuera4.jpg" alt="Campo Santo"/>
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
          <h5>NOS INVENTAMOS UNA FUERZA</h5>
          <ul>
            <li>Cortometraje documental. En desarrollo</li>
            <li>Guión y dirección: Matías Ferreyra</li>
            <li>Córdoba, Argentina. 2020 - 2021</li>
          </ul>
          <p>Matías, Emiliano, Nicolás, Alberto y yo, nos conocimos en la escuela de ballet de una teatro. Nos hicimos amigos y
construimos en poco tiempo una familia, quizás esa con la que los cinco alguna vez soñamos.
Este retrato intimo y enérgico es una forma de pensarlos a la distancia, poner sus cuerpos en movimiento y rendirle
homenaje a al valor de la amistad.</p>
        </div>      
      </Layout>
    )
  }