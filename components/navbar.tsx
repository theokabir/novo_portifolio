import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from 'react'

const Navbar: React.FC = () => {

    const router = useRouter()

    const [sticky, setSticky] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 60)
                setSticky(true)
            else
                setSticky(false)
        })
    }, [])

    return (
        <nav className={`nav ${(sticky) ? 'nav-sticky' : ''} z-50`}>
            <div className={`nav-container ${(sticky) ? 'nav-container-sticky' : ''}`}>
                <div className="py-5">
                    <ul className="flex justify-center">
                        <li className={`nav-link ${(router.pathname == '/') ? 'nav-link-active' : ''}`}>Home</li> |
                        <li className={`nav-link ${(router.pathname.indexOf('/projetos') != -1) ? 'nav-link-active' : ''}`}>Projetos</li> |
                        <li className={`nav-link ${(router.pathname == '/curriculo') ? 'nav-link-active' : ''}`}>Currículo</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
