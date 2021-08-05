import React, { useEffect } from 'react'
import Cards from './Cards'

const CategoriesList = ({categoria}) => {

    useEffect(() => {
        console.log('Componente Lista ')
      
    }, [])

    return (
        <div>
            {
                categoria.map((cate, index) =>{
                    return(
                        <Cards 
                        key={index}
                        categoria={cate} />
                    )
                })
            }
          
        </div>
    )
}

export default CategoriesList
