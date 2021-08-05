import React, { memo, useEffect } from 'react'
import UserItem from './UserItem'

const ListaUSer = memo( ({ user }) => {

    //console.log('Listar Usuario')
    useEffect(() => {
      
    }, [user])

    return (
        <ul>
            {
                user.map(data => {
                    return (
                        <UserItem user={data} key={data.id} />
                    )
                })
            }

        </ul>
    )
})

export default ListaUSer
