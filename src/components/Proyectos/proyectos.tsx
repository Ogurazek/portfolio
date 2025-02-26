import styles from './proyectos.module.css';
import CardProyectos from './CardProyectos/cardProyectos';


export default function Proyectos() {
    return (
        <>
            <h2>Proyectos</h2>
            <div className={styles.line}></div>
            <div className={styles.container}>
                {proyectos.map(proyecto => (
                    <CardProyectos
                        key={proyecto.key}
                        title={proyecto.title}
                        tecnologias={proyecto.tecnologias}
                        link={proyecto.link}
                        description={proyecto.description}
                        img={proyecto.img}
                        linkGit={proyecto.linkGit}
                    />))}
            </div>
        </>
    );
}


const proyectos = [
    {
        key: 1,
        title: 'Landing Page Karate 🥋',
        tecnologias: 'NextJS | TypeScript | CSS(module)',
        link: 'https://page-karate.vercel.app',
        description: 'Este proyecto es un sitio web informativo sobre un dojo de Karate, diseñado para proporcionar detalles sobre el dojo, inscripciones, torneos y más. Está desarrollado utilizando Next.js 14 con React 18.',
        img: '/proyectoKarate.webp',
        linkGit: 'https://github.com/Ogurazek/PageKarate'
    },
    {
        key: 2,
        title: 'Clon de YT Music 🎵📻',
        tecnologias: 'React | TypeScript | Vite | CSS...',
        link: 'https://podcast-player-ytmusic.vercel.app',
        description: 'He desarrollado una aplicación clon de YouTube Music utilizando React y TypeScript, con el entorno de desarrollo Vite. La aplicación está conectada a una API de Podcasts para obtener los audios.',
        img: '/ProyectoYTMusic.webp',
        linkGit: 'https://github.com/Ogurazek/podcast-player'
    },
    {
        key: 3,
        title: 'Pasarela de Pago 💳',
        tecnologias: 'React | TypeScript | CSS | Docker...',
        link: 'https://pasarelapago.vercel.app',
        description: 'Desarrollé una pasarela de pago que permite ingresar y verificar datos de tarjetas de crédito, número de tarjeta y código de seguridad. También, permite ver el precio de un objeto en Bitcoin a través de una API',
        img: '/ProyectoPasarelaPago.webp',
        linkGit: 'https://github.com/Ogurazek/PasarelaDePago'
    },
    {
        key: 4,
        title: 'Pokedex 👾🤖',
        tecnologias: 'React | TypeScript | CSS | Docker...',
        link: 'https://poke-api-xi-five.vercel.app',
        description: 'Desarrollé una Pokedex interactiva que muestra todos los Pokémon, permitiendo a los usuarios filtrar, buscar y visualizar detalles específicos de cada uno. La aplicación está conectada a la PokeApi para obtener los pokemones actualizados',
        img: '/ProyectoPokedex.webp',
        linkGit: 'https://github.com/Ogurazek/PokeApi'
    },
    {
        key: 5,
        title: 'Clon de Instagram 📸📱',
        tecnologias: 'React | TypeScript | CSS...',
        link: 'https://instagram-clon-phi.vercel.app',
        description: 'Desarrollé un clon de la página de Instagram utilizando TypeScript y React. La aplicación replica varias funcionalidades clave de la plataforma original, brindando una experiencia interactiva y moderna para los usuarios.',
        img: '/ProyectoIG.webp',
        linkGit: 'https://github.com/Ogurazek/Instagram-clon'
    },
    {
        key: 6,
        title: 'Blog de IA 🤖📚',
        tecnologias: 'HTML | JavaScript | Bootstrap...',
        link: 'https://www.youtube.com/watch?v=b-MvlaW83h8',
        description: 'Participé en el desarrollo de un blog en equipo utilizando Scrum para una gestión eficiente del tiempo y los recursos. Implementamos interfaces atractivas empleando JavaScript, HTML, CSS y Bootstrap.',
        img: '/ProyectoWeb.webp',
        linkGit: '...'
    },
]