import React, { useEffect, useState } from 'react'
import CategoriesAdd from './CategoriesAdd'
import CategoriesList from './CategoriesList'
import ListaUSer from './ListaUSer'

const CategoriasApp = () => {

    const initialState = [
        { id: 1, name: "Sara" },
        { id: 2, name: "Luis" },
    ]

    const [categories, setCategories] = useState(['Horror'])
    const [user, setUser] = useState(initialState)
    const [text, setText] = useState('')

    const handleAdd = () => {
        const newUser = { id: Date.now(), name: text }
        setUser([...user, newUser])
    }

    return (
        <div>
            <h1>Componentes con hooks</h1>
            <div>
                <input type="text"
                value={text}
                onChange={(e)=> setText(e.target.value) }
                 />
                 <button onClick={handleAdd}>Enviar</button>
                 
            </div>
            
            <ListaUSer
                user={user}
            />

            <CategoriesAdd setCategories={setCategories} />
            <CategoriesList
                categoria={categories}
            />

        </div>
    )
}

export default CategoriasApp
