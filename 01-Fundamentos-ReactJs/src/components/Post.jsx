import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/wellingtonC.png" />
                    <div className={styles.authorInfo}>
                        <strong>Wellington Carvalho</strong>
                        <span>FullStack Developer</span>
                    </div>
                </div>
                <time title='30 de janeiro as 20:20' dateTime='2025-01-30 20:19:00'>publicado há 1h </time>
            </header>
            <div className={styles.conteudo}>
            <p className={styles.p}>Fala galeraa 👋</p>
            <p className={styles.p}>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p className={styles.p}><a href="">jane.design/doctorcare</a></p>
            <p className={styles.p}>
                <a className={styles.teste} href="">#novoprojeto</a>{' '}
                <a className={styles.a} href="">#nlw</a>{' '} 
                <a href="">#rocketseat</a>{' '}
                </p>
            </div>                
        </article>
    );
    
}