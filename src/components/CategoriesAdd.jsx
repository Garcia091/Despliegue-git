import React, { useEffect, useRef, useState } from 'react'

const CategoriesAdd = ({setCategories}) => {

    const [search, setSearch] = useState('')
    const searchref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategories(categorias=>[search, ...categorias])
        setSearch('')
    }

    const handleInputChange = (e) =>{
        setSearch(e.target.value)
    }

    useEffect(() => {
        searchref.current.focus()
    }, [])

     useEffect(() => {
        console.log('Componente Lista ')
      
    }, [])
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    ref={searchref}
                    name="search"
                    placeholder="categories"
                    value={search}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

export default CategoriesAdd
