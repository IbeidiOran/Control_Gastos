/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    gastos,
    setGastos,
    presupuesto, 
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto
}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
          <ControlPresupuesto
          setGastos={setGastos}
          presupuesto={presupuesto}
          gastos ={gastos}
          setPresupuesto = {setPresupuesto}
          setIsValidPresupuesto = {setIsValidPresupuesto}
          />
        ) : (
            <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto ={setIsValidPresupuesto}
            />
       )}
     
    </header>
  )
}

export default Header