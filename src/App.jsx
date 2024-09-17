import { useState } from 'react'
import './App.css'
import Icon from './assets/images/icon-dice.svg'
import DividerDesktop from './assets/images/pattern-divider-desktop.svg'
import DividerMobile from './assets/images/pattern-divider-mobile.svg'
import api from './services/api'

function App() {
  const [conselho, setConselho] = useState({})


  async function adicionarConselho() {

    try {
      const respoonse = await api.get()
      const data = respoonse.data
      setConselho(data)
    }
    catch {
      alert('[Erro] conselho não encontrado')
    }
  }

  return (
    <main className='conteudo-principal'>
      <div className='container'>
        <div className='advice-id'>
          <h4 className='title'>Advice</h4>
          {
            Object.keys(conselho).length > 0 && (
              <span># {conselho.slip.id}</span>
            )
          }
        </div>
        {
          Object.keys(conselho).length > 0 && (
            <p className='advice animate__animated animate__rubberBand'>{conselho.slip.advice}</p>
          )
        }
        <picture>
          <source media="(max-width: 450px)" srcset={DividerMobile} />
          <img className='line' src={DividerDesktop} alt="linha horizontal" />
        </picture>
        <button onClick={adicionarConselho} className='btn-conselho'>
          <img src={Icon} alt="icone conselho" />
        </button>
      </div>
    </main>
  )
}

export default App