import React from 'react'
import ReactDOM from 'react-dom'

//import Multi, { BoaNoite } from './components/Multiplos'
// import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        {/* <Saudacao tipo="Bom dia" nome="José" /> */}
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" sobrenome="Silva" />
            <Filho nome="Paulo" sobrenome="Silva" />
            <Filho nome="Carla" sobrenome="Silva" />
        </Pai>
    </div>
, document.getElementById('root'))
