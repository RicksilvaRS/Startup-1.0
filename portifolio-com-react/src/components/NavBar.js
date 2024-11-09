import {useState, useEffect} from "react"
import {Navbar, Container, NavLink} from "react-bootstrap";
export const NavBar = () => {
    const [activeLink, SetActiveLink] = useState('home');
    const [seScrolled,scolled] = useState(false);

    useEffect(() =>{
        const onScroll = () => {
            if (window.scrollY>50) {
                seScrolled(true)
            } else {
                seScrolled(false)
            }
        }
        window.addEventListener("scroll", onscroll)

        return() => window.removeEventListener("scroll", onScroll)
    }, [])
    const onUpdateActiveLink = (value) => {
        SetActiveLink(value);
    }

return(
<Navbar expand="lg" className={scolled ? "scrolled" : ""}>
    <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="span-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <nav className="me-auto">
                <NavLink href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('home')}>home</NavLink>
                <NavLink href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('skills')}>skills</NavLink>
                <NavLink href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('projects')}>Projetos</NavLink>
                <span className="nav-text">
                    <div className="social-icon">
                       <a href=""><img src={} alt=""/></a>
                       <a href=""><img src={} alt=""/></a>
                       <a href=""><img src={} alt=""/></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>L`ets connect</span></button>
                </span>
            </nav>
        </Navbar.Collapse>
    </Container>
     </Navbar>

);    
}