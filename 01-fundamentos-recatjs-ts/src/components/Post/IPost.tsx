export interface IAuthor {
    name: string;
    role: string;
    avatarUrl: string;
}

export interface IPostType {
    id: number;
    author: IAuthor;
    publishedAt: Date;
    content: IContent[];
}

export interface IPostProps {
    post: IPostType
}

export interface IContent {
    type: 'paragraph' | 'link';
    content: string;
    url?: string;
}
