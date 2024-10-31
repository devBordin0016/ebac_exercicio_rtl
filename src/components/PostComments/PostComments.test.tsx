import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from './index';

describe('PostComments Component', () => {
    test('renders the form and allows adding comments', () => {
        render(<PostComments />);

        
        const textarea = screen.getByPlaceholderText('Escreva seu comentario aqui');
        const submitButton = screen.getByRole('button', { name: /comentar/i });
        
        fireEvent.change(textarea, { target: { value: 'Primeiro coment�rio' } });
        fireEvent.click(submitButton);

        
        expect(screen.getByText('Primeiro coment�rio')).toBeInTheDocument();

        
        fireEvent.change(textarea, { target: { value: 'Segundo coment�rio' } });
        fireEvent.click(submitButton);

        
        expect(screen.getByText('Primeiro coment�rio')).toBeInTheDocument();
        expect(screen.getByText('Segundo coment�rio')).toBeInTheDocument();
    });
});
