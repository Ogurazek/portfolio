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
        title: 'Clon de YT Music 🎵📻',
        tecnologias: 'React | TypeScript | HTML | CSS...',
        link: 'https://podcast-player-ytmusic.vercel.app',
        description: 'He desarrollado una aplicación clon de YouTube Music utilizando React y TypeScript, con el entorno de desarrollo Vite. La aplicación está conectada a una API de Podcasts para obtener los audios.',
        img: '/public/ProyectoYTMusic.png',
        linkGit: 'https://github.com/Ogurazek/podcast-player'
    },
    {
        key: 2,
        title: 'Pasarela de Pago 💳',
        tecnologias: 'React | TypeScript | HTML | Docker...',
        link: 'https://podcast-player-ytmusic.vercel.app',
        description: 'Desarrollé una pasarela de pago que permite ingresar y verificar datos de tarjetas de crédito, número de tarjeta y código de seguridad. También, permite ver el precio de un objeto en Bitcoin a través de una API',
        img: '/public/ProyectoPasarelaPago.png',
        linkGit: 'sd'
    },
    {
        key: 3,
        title: 'Pokedex 👾🤖',
        tecnologias: 'React | TypeScript | HTML | Docker...',
        link: 'https://poke-api-xi-five.vercel.app',
        description: 'Desarrollé una Pokedex interactiva que muestra todos los Pokémon, permitiendo a los usuarios filtrar, buscar y visualizar detalles específicos de cada uno. La aplicación está conectada a la PokeApi para obtener los pokemones actualizados',
        img: '/public/ProyectoPokedex.png',
        linkGit: 'https://github.com/Ogurazek/PokeApi'
    },
    {
        key: 4,
        title: 'Clon de Instagram 📸📱',
        tecnologias: 'React | TypeScript | HTML | CSS...',
        link: 'https://instagram-clon-phi.vercel.app',
        description: 'Desarrollé un clon de la página de Instagram utilizando TypeScript y React. La aplicación replica varias funcionalidades clave de la plataforma original, brindando una experiencia interactiva y moderna para los usuarios.',
        img: '/public/ProyectoIG.png',
        linkGit: 'https://github.com/Ogurazek/Instagram-clon'
    },
    {
        key: 5,
        title: 'Blog de IA 🤖📚',
        tecnologias: 'HTML | JavaScript | Bootstrap...',
        link: 'https://www.youtube.com/watch?v=b-MvlaW83h8',
        description: 'Participé en el desarrollo de un blog en equipo utilizando Scrum para una gestión eficiente del tiempo y los recursos. Implementamos interfaces atractivas empleando JavaScript, HTML, CSS y Bootstrap.',
        img: '/public/ProyectoWeb.png',
        linkGit: '...'
    },
]