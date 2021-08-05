import React, { memo, useEffect } from 'react'

const UserItem = memo( ({ user }) => {

    //console.log(' Usuario item')
    return (
        <>
            <li>
                <p> id: {user.id}</p>
                <p> Nombre: {user.name}</p>

            </li>
        </>
    )
})

export default UserItem
