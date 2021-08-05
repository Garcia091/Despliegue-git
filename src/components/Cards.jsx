import React, { useEffect, useState } from 'react'

const Cards = ({ categoria }) => {

    const [stateImages, setStateImages] = useState([])

    useEffect(() => {
        imgGif(categoria)
            .then(imgData => setStateImages(imgData))
    }, [categoria])

    const imgGif = async (categoria) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=xBejx4N52eSlTRIgcEK8j7kQ3N2qWplj`
        const res = await fetch(url)
        const { data } = await res.json()

        const imgData = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return imgData
    }


    useEffect(() => {
        console.log('Componente Cards ')

    }, [])

    return (


        <div className="">
            <h1>Categoría: { categoria }</h1>
            {
                stateImages.map(img => (
                    <div className="card text-white bg-dark ms-3 py-3 w-50 conatiner text-center m-2" >

                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img.url} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">nombre: {img.title}</h5>
                                    <p className="card-text"><small className="text-muted">{img.id}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default Cards
