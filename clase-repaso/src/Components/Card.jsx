import React from 'react'

const Card = ({nombre,medico}) => {

    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth()

  return (
    <div>
        <h3>{nombre} Tenes turno con el medico {medico} </h3>
        <h3>Para el día {dia+7}/{mes+1} a las 16:00hs</h3>
    </div>
  )
}

export default Card