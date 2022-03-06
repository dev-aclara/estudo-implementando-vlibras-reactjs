import React, {useState} from 'react'
import './Card.css'

function Card() {

    const [ptd,setPtd] = useState('Permission To Dance');
    const [about, setAbout] = useState('A língua internacional de sinais está incorporada à coreografia e a comunidade foi tocada por esse ato, até mesmo Tedros Adhanom Ghebreyesus, o diretor-geral da Organização Mundial da Saúde. É uma bela mensagem de esperança, apesar de todas as dificuldades do que o mundo estava vivendo desde a covid-19. Um ótimo lembrete de que de fato existe vida após a pandemia.');

    return (
        <div className='Card'>
            <div className='upper-container'> 
                <div className='image-container'>
                    <img src="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/c/3/8/9/1108961625861818.jpg" alt='' height="100px" width="100px" />
                </div>
            </div>
            <div className='lower-container'>
                <h3> {ptd} </h3>
                <p> {about} </p>
                <button>Check it out!</button>
            </div>
            
        </div>
        
        
    )
}

export default Card