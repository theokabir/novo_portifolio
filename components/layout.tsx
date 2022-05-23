import Navbar from './navbar'
import Footer from './footer'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
