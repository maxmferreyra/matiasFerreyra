import Head from "next/head";
import Link from "next/link";

const name = "Matias Ferreyra";
const secondTitle = "Guionista / Script Doctor";

export default function Layout({children, title, description, home}) {
    console.log(home)
  return (
    <div>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{title}</title>
          <meta 
              name='description'
              content={description}
          />
      </Head>
      <header>
          <>
            <h1>{name}</h1>
            <h2>{secondTitle}</h2>
          </>
      </header>
      <main>
       <section className="mainSection">
        <h5>Proyectos personales</h5>
          <div className="personalProyects">
            <Link href="/campoSanto">
            <a>Campo Santo</a>
            </Link>
            <Link href="/nosInventamos">
            <a>Nos inventamos una fuerza</a>
            </Link>
            <Link href="/nosotrxs">
            <a>Nos(otrxs)</a>
            </Link>
            <Link href="/casaDosPerros">
            <a>Una casa con dos perros</a>
            </Link>
          </div>
        <h5>En colaboración</h5>
          <div className="colaborationProyects">
            <Link href="/anton">
            <a>Anton</a>
            </Link>
            <Link href="/antoMundoRaro">
            <a>Anton y el mundo raro</a>
            </Link>
            <Link href="/cruzRoja">
            <a>Cruz Roja</a>
            </Link>
            <Link href="/defendernos">
            <a>Defendernos</a>
            </Link>
            <Link href="/lunaGranDanes">
            <a>Luna y el Gran Danes</a>
            </Link> 
            <Link href="/meLoPuedoQuedar">
            <a>Me lo puedo quedar</a>
            </Link> 
            <Link href="/pasosParaVolar">
            <a>Pasos para Volar</a>
            </Link> 
            <Link href="/renataNaza">
            <a>Renata, Nazareno y el mundo mágico</a>
            </Link> 
            <Link href="/rutas">
            <a>Rutas</a>
            </Link>  
          </div>
          
        
      </section>
      <section className="mainChildren">
          {children}
      </section> 
      </main>
      <nav>
        <Link href="/">
          <a>Inicio | </a>
        </Link>
        <Link href="/contact">
          <a>Contacto | </a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
        {!home && (
      <div className="container-backHome">
        <Link href="/">
          <a className="backHome">← Back to home</a>
        </Link>
      </div>
      )}
    </div>
  )
}

Layout.defaultProps = {
    title: "Matias Ferreyra",
    description: "Descripcion de mi sitio web"
}
