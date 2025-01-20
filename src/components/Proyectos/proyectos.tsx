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
                        title={proyecto.title}
                        tecnologias={proyecto.tecnologias}
                        link={proyecto.link}
                        description={proyecto.description}
                        img={proyecto.img}
                    />))}
            </div>
        </>
    );
}


const proyectos = [
    {
        title: 'Clon de YT Music 🎵📻',
        tecnologias: 'React, TypeScript, HTML, CSS...',
        link: 'https://podcast-player-ytmusic.vercel.app',
        description: 'Clon de la aplicación de música de YouTube, con funcionalidades crear playList, reproducir y pausar canciones. Se utilizó la API de Podcast para obtener los audios.',
        img: '/public/ProyectoYTMusic.png'
    },
    {
        title: 'Pasarela de Pago 💳',
        tecnologias: 'React, TypeScript, HTML, CSS, Docker...',
        link: 'https://podcast-player-ytmusic.vercel.app',
        description: 'Pasarela de Pago la cual tomaba datos de la tarjeta de crédito, verificaba si los datos eran correctos, según su fecha, número de tarjeta y código de seguridad. También se utilizo una API para saber el precio del Bitcoin actualmente.',
        img: '/public/ProyectoPasarelaPago.png'
    },
    {
        title: 'Pokedex 👾🤖',
        tecnologias: 'React, TypeScript, HTML, CSS, Docker...',
        link: 'https://poke-api-xi-five.vercel.app',
        description: 'Pokedex, la cual muestra todos los pokemones, con la posibilidad de filtrar, buscar, ver detalles de cada uno de ellos. Se utilizo una API para obtener los datos de los pokemones.',
        img: '/public/ProyectoPokedex.png'
    },
    {
        title: 'Clon de Instagram 📸📱',
        tecnologias: 'React, TypeScript, HTML, CSS...',
        link: 'https://poke-api-xi-five.vercel.app',
        description: 'Pokedex, la cual muestra todos los pokemones, con la posibilidad de filtrar, buscar, ver detalles de cada uno de ellos. Se utilizo una API para obtener los datos de los pokemones.',
        img: '/public/ProyectoIG.png'
    },
    {
        title: 'Clon de Instagram 📸📱',
        tecnologias: 'React, TypeScript, HTML, CSS...',
        link: 'https://poke-api-xi-five.vercel.app',
        description: 'Pokedex, la cual muestra todos los pokemones, con la posibilidad de filtrar, buscar, ver detalles de cada uno de ellos. Se utilizo una API para obtener los datos de los pokemones.',
        img: '/public/ProyectoIG.png'
    },
]