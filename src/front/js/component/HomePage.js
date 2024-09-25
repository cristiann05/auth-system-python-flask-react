import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/homepage.css';

const HomePage = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // Para mostrar algo mientras se verifica el token

    useEffect(() => {
        // Verificar si el usuario está autenticado
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/');  // Redirige a la página principal si no hay token
        } else {
            setLoading(false); // Cuando se verifica el token, deja de cargar
        }
    }, [navigate]);

    const handleLogout = () => {
        actions.logout(); // Llama a la función de logout desde el contexto
        navigate('/'); // Redirige a la página principal después de cerrar sesión
    };

    // Si está cargando (verificando el token), muestra algo para evitar la pantalla en negro
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="wrapper">
            {/* HEADER */}
            <header>
                <div className="netflixLogo">
                    <a id="logo" href="#home">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Logo" />
                    </a>
                </div>
                <nav className="main-nav">
                    <a href="#home">Home</a>
                    <a href="#tvShows">TV Shows</a>
                    <a href="#movies">Movies</a>
                    <a href="#originals">Originals</a>
                    <a href="#">Recently Added</a>
                    <a target="_blank" href="https://github.com/cristiann05">Portfolio</a>
                </nav>
                <nav className="sub-nav">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg" alt="Profile" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Cuenta</a></li>
                            <li><a className="dropdown-item" href="#" onClick={handleLogout}>Cerrar sesión</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* MAIN CONTAINER */}
            <section className="main-container">
                <div className="location" id="home">
                    <h1>Popular on Netflix</h1>
                    <div className="box">
                        <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true" alt="Popular 1" /></a>
                        <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true" alt="Popular 2" /></a>
                        <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true" alt="Popular 3" /></a>
                        <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true" alt="Popular 4" /></a>
                        <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true" alt="Popular 5" /></a>
                        <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" alt="Popular 6" /></a>
                    </div>
                </div>

                <h1 id="myList">Trending Now</h1>
                <div className="box">
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t1.PNG?raw=true" alt="Trending 1" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true" alt="Trending 2" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true" alt="Trending 3" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true" alt="Trending 4" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t5.PNG?raw=true" alt="Trending 5" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true" alt="Trending 6" /></a>
                </div>

                <h1 id="tvShows">TV Shows</h1>
                <div className="box">
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv1.PNG?raw=true" alt="TV Show 1" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv2.PNG?raw=true" alt="TV Show 2" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv3.PNG?raw=true" alt="TV Show 3" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv4.PNG?raw=true" alt="TV Show 4" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv5.PNG?raw=true" alt="TV Show 5" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv6.PNG?raw=true" alt="TV Show 6" /></a>
                </div>

                <h1 id="movies">Blockbuster Action & Adventure</h1>
                <div className="box">
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m1.PNG?raw=true" alt="Movie 1" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true" alt="Movie 2" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m3.PNG?raw=true" alt="Movie 3" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m4.PNG?raw=true" alt="Movie 4" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m5.PNG?raw=true" alt="Movie 5" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m6.PNG?raw=true" alt="Movie 6" /></a>
                </div>

                <h1 id="originals">Netflix Originals</h1>
                <div className="box">
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true" alt="Original 1" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true" alt="Original 2" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true" alt="Original 3" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true" alt="Original 4" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o5.PNG?raw=true" alt="Original 5" /></a>
                    <a href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true" alt="Original 6" /></a>
                </div>
            </section>

            {/* LINKS */}
            <section className="link">
                <div className="logos">
                    <a href="#"><i className="fab fa-facebook-square fa-2x logo"></i></a>
                    <a href="#"><i className="fab fa-instagram fa-2x logo"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-2x logo"></i></a>
                    <a href="#"><i className="fab fa-youtube fa-2x logo"></i></a>
                </div>
                <div className="sub-links">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </section>

            {/* FOOTER */}
            <footer>
                <p>© 2024 Netflix, Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
