import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/wellingtonC.png" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wellington Carvalho</strong>
                            <time title='30 de janeiro as 20:20' dateTime='2025-01-30 20:19:00'>Cerca de 1h atrás </time>
                        </div>
                        <button title="Deletar Comentario">
                            <Trash size={24}/>
                        </button>                     
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>            
            </div>
        </div>
    )
}