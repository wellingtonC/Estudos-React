import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { IPostProps } from './IPost';

export function Post({ post }: IPostProps) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publisehdDateFormatter = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelative = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCrateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalida(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Campo Obrigatorio');
    }

    function deleteComment(commentTodeDelete: string) {
        const commentsWithoutDeletOne = comments.filter(comments => {
            return comments !== commentTodeDelete;
        })
        setComments(commentsWithoutDeletOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publisehdDateFormatter} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelative}
                </time>
            </header>
            <div className={styles.content}>
                {post.content.map(Line => {
                    if (Line.type === 'paragraph') {
                        return <p key={Line.content}>{Line.content}</p>
                    } else if (Line.type === 'link') {
                        return <p key={Line.content}><a href={Line.url}>{Line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCrateNewComment} className={
                styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalida}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                })}
            </div>
        </article>
    );

}