import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router"

const Home: NextPage = () => {

  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>Luccas Dev</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className='body'>
        <section className='contentLeft'>
          <div className='content'>
            <div className='logo'>
              <Link href='/'>
                <a>Luccas</a>
              </Link>
            </div>
            <div className='menu'>
              <ul>
                <li>
                  <Link href='/'>
                    <a className={router.pathname == "/" ? "active" : ""}>Início</a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a className={router.pathname == "/about" ? "active" : ""}>Sobre Mim</a>
                  </Link>
                </li>
                <li>
                  <Link href='/portfolio'>
                    <a className={router.pathname == "/portfolio" ? "active" : ""}>Portfólio</a>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <a className={router.pathname == "/contact" ? "active" : ""}>Contato</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='contentRight'>
          <h4>Porfólio</h4>

          <div className="ellipse_24"></div>
          <div className="ellipse_25"></div>
        </section>
      </div>
    </>
    
    
  )
}

export default Home
