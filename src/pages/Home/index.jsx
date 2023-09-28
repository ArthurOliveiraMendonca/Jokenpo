import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Home.module.css'

function Home() {
    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://raw.githubusercontent.com/PaolaMarinho/apibrasileirao2023/main/apibrasileirao2023.json')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>Times Série A</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    nome={repo.nome}
                                    mascote={repo.mascote}
                                    estadio={repo.estadio}
                                    estado={repo.estado}
                                    img={repo.img}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
    )
}

export default Home