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
                  <Link href='/'>
                    <a>Sobre Mim</a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <a>Portfólio</a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <a>Contato</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='contentRight'>
          <h4>Principal</h4>
        </section>
      </div>
    </>
    
    
  )
}

export default Home
