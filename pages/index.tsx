import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"
import MyPhoto from '../assets/images/minha_foto.jpg';

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
          <div className="container">
            <div className="home">
              <div className="home_content">
                <div className="left">
                  <Image
                    src={MyPhoto}
                    alt="Minha foto"
                    width={250}
                    height={250}
                  />
                </div>
                <div className="right">
                  <h2 className='nome'>Paulo Luccas</h2>
                  <p>Desenvolvedor Full-stack</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
    
    
  )
}

export default Home
