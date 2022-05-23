import Head from "next/head"
import HomeThumb from "../components/homeThumb"
import { useState } from 'react'

export default function Home() {

    const [projetos, setProjetos] = useState([
        {
            id: 1,
            titulo: "teste1",
            imagem: "/img/card/cardDefault.jpg",
            descricao: "lorem ipsum dolor sit amet"
        },
        {
            id: 2,
            titulo: "teste2",
            imagem: "/img/card/cardDefault2.webp",
            descricao: "lorem ipsum dolor sit amet"
        },
        {
            id: 3,
            titulo: "teste3",
            imagem: "/img/card/cardDefault3.jpg",
            descricao: "lorem ipsum dolor sit amet"
        },
        {
            id: 4,
            titulo: "teste4",
            imagem: "/img/card/cardDefault4.jpg",
            descricao: "lorem ipsum dolor sit amet"
        }
    ])

    return (
        <>
            <Head>
                <title>Home | portifolio</title>
            </Head>
            <HomeThumb />
            <div>
                <h3 className="text-6xl mt-12 text-center">Projetos</h3>

                <div className="mt-4 flex justify-around w-full flex-wrap lg:flex-nowrap lg:h-96 cardDiv">
                    {projetos.map(projeto => (
                        <div key={projeto.id} className="card ">
                            <div className="border-2 rounded border-main-p-light mb-4 lg:mb-0  bg-main-p-dark">
                                <div className="h-64 overflow-hidden ">
                                    <img src={projeto.imagem} alt="" className="object-cover m-auto h-full" />
                                </div>
                                <div className="p-2">
                                    <p>{projeto.titulo}</p>
                                    <small>{projeto.descricao}</small>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
            <div>
                <h3>Tecnologias</h3>
            </div>
        </>
    )
}
