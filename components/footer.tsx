const Footer : React.FC = () => {
    return (
        <div className="md:flex justify-between px-16 py-2 items-center bg-main-s-dark">
            <p>Theo Kabir Novais de Carvalho; 2022 &copy;</p>
            <div>
                <p>github: <a rel="noreferrer" className=" text-blue-400 decoration hover:underline" href="https://www.github.com/theokabir" target="_blank">github.com/theokabir</a></p>
                <p>email: <a className=" text-blue-400 decoration hover:underline" href="mailto:theokabir3003@gmail.com">theokabir3003@gmail.com</a></p>
            </div>
        </div>
    )
}

export default Footer
