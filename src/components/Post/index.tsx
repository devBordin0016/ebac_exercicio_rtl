// src/components/Post/index.tsx
import styles from './Post.module.css';
import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
};

const Post = ({ children, imageUrl }: Props) => (
    <div className={styles.post} data-testid="post">
        <img className={styles['post-image']} src={imageUrl} alt="Post" data-testid="post-image" />
        <p className={styles['post-text']} data-testid="post-text">{children}</p>
        <div data-testid="post-comments-container">
            <PostComments data-testid="post-comments" />
        </div>
    </div>
);

export default Post;
