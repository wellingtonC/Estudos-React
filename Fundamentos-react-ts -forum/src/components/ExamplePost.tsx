import { IPostType } from "./Post/IPost";

export const ExamplePost: IPostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/wellingtonC.png',
            name: 'Wellington Carvalho',
            role: 'Fullstack Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala Pessoal' },
            { type: 'paragraph', content: 'Terminei meu primeiro projeto na rocketseat em react, espero que gostem.' },
            { type: 'link', content: 'view on github', url: 'https://github.com/wellingtonC/Estudos-React.git' },
        ],
        publishedAt: new Date('2025-01-30 09:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/rocketseat-education.png',
            name: 'Mayke Brito',
            role: 'Educator @Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        ],
        publishedAt: new Date('2024-01-31 22:00:00'),
    }

];