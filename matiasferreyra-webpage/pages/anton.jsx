import Layout from "../components/Layout"

export default function anton() {
  return (
    <Layout>
      <div className="container">
        <ul className="slider">
          <li id="slide1">
            <img src="./img/anton.jpg"/>
          </li>
          <li id="slide2">
            <img src="./img/anton2.png"/>
          </li>
          <li id="slide3">
            <img src="./img/anton3.png" alt="" />
          </li>
          <li id="slide4">
            <img src="./img/anton4.jpg" alt="" />
          </li>
          <li id="slide5">
            <img src="./img/anton5.jpg" alt="" />
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
        </ul>
      </div>
      <div className='info-proyect'>
        <h5>ANTON</h5>
        <ul>
          <li>Serie de animación. 4 x 11'</li>
          <li>Guión</li>
          <li>Córdoba, Argentina. 2013 - 2015</li>
        </ul>
        <p>Antón, un niño de 6 años, comienza un fantástico viaje a partir de un inesperado accidente doméstico: Fantasma, su
          perro, se come la torta de cumpleaños de su hermana, a pocos minutos de que lleguen los invitados.
          Antón deberá ir hasta el almacén de la Mujer Gigante a comprar el azúcar que necesita su mamá para hacer una
          nueva torta. Esta simple tarea se transformará sorpresivamente en una gran aventura que lo llevará hasta el Gran
          Árbol de las Orejas, lugar donde encontrará finalmente el azúcar para hacer la torta de cumpleaños.</p>
      <a href="https://vimeo.com/479100375?embedded=true&source=vimeo_logo&owner=20334939">Link a VIMEO</a>
      </div>      
    </Layout>
  )
}