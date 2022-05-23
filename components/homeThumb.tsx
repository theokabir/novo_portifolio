import { useEffect } from 'react'

const HomeThumb : React.FC = () => {

    useEffect(() =>{
        document.addEventListener('mousemove', e => {


            Array.from(document.getElementsByClassName('mouse-parallax') as HTMLCollectionOf<HTMLElement>)
            .forEach(element => {

                var speed = + element.getAttribute('data-speed')
                var x : Number = (e.clientX * speed) / 250
                var y : Number = (e.clientY * speed) / 250

                element.style.transform = `translateX(${x}px) translateY(${y}px)`

            });

        })
    }, [])


    return (
        <div className="p-px thumb-div">
            <div className="thumb" />

            <div
            className="h-56 w-56 mx-auto mt-36 mb-4 md:mb-0 md:mt-56 overflow-auto
            rounded-full border-8 border-main-p-light bg-main-p-dark z-50"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="200">
                {/* adicionar imagem */}
            </div>

            {/* ficha */}
            <div className="md:w-56 w-3/4 mx-auto md:m-0 text-justify md:bg-main-p-light
            md:rounded p-2 text-black md:relative md:-top-88 md:left-2/3 z-40 md:-mb-88
            mouse-parallax md:border-4 md:border-dashed md:border-main-s-light thumb-text"
            data-speed="3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit velit eum temporibus exercitationem error officiis fuga amet eaque unde doloribus dolores ex recusandae eveniet, omnis dolore, itaque, adipisci quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, nisi qui asperiores cumque fugit sapiente iusto quo nobis, </p>
            </div>

            <div className="top-0 -z-10 hidden lg:block">
                <img src="/img/parallax/react.png" alt="react"
                className=" h-32 parallax-imagem-1 mouse-parallax"
                data-speed="1" />

                <img src="/img/parallax/next.png" alt="nextJS"
                className="h-36 parallax-imagem-2 mouse-parallax"
                data-speed="-2" />

                <img src="/img/parallax/express.png" alt="express"
                className=" h-32 parallax-imagem-3 mouse-parallax"
                data-speed="-3" />

                <img src="/img/parallax/python.png" alt="python"
                className="h-24 parallax-imagem-4 mouse-parallax"
                data-speed="2" />

                <img src="/img/parallax/mongo.png" alt="mongo"
                className="h-24 parallax-imagem-5 mouse-parallax"
                data-speed="3" />

                <img src="/img/parallax/node.png" alt="mongo"
                className="h-24 parallax-imagem-6 mouse-parallax"
                data-speed="-1" />
            </div>
    </div>
    )
}

export default HomeThumb
