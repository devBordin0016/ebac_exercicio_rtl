import { render, screen } from '@testing-library/react';
import Post from './index';

describe('Post Component', () => {
    const imageUrl = 'https://acdn.mitiendanube.com/stores/430/263/products/1-32-batmovel-1966_011-a4f7118de5fcd5c95916789845019917-1024-1024.png';
    const postText = 'This is a test post';

    test('renders post with image and text', () => {
        render(<Post imageUrl={imageUrl}>{postText}</Post>);

        
        const imgElement = screen.getByTestId('post-image');
        expect(imgElement).toHaveAttribute('src', imageUrl);

        
        const textElement = screen.getByTestId('post-text');
        expect(textElement).toHaveTextContent(postText);

        
        expect(screen.getByTestId('post-comments')).toBeInTheDocument();
    });

    test('applies correct styles', () => {
        render(<Post imageUrl={imageUrl}>{postText}</Post>);
        
        const postElement = screen.getByTestId('post');
        expect(postElement).toHaveClass('post');
    });
});
