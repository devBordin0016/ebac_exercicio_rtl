// src/components/PostComments/PostComments.test.tsx
import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from './index';

describe('PostComments Component', () => {
    test('renders the form and allows adding comments', () => {
        render(<PostComments />);

        // Adiciona o primeiro coment�rio
        const textarea = screen.getByPlaceholderText('Escreva seu comentario aqui');
        const submitButton = screen.getByRole('button', { name: /comentar/i });
        
        fireEvent.change(textarea, { target: { value: 'Primeiro coment�rio' } });
        fireEvent.click(submitButton);

        // Verifica se o primeiro coment�rio est� na lista
        expect(screen.getByText('Primeiro coment�rio')).toBeInTheDocument();

        // Adiciona o segundo coment�rio
        fireEvent.change(textarea, { target: { value: 'Segundo coment�rio' } });
        fireEvent.click(submitButton);

        // Verifica se ambos os coment�rios est�o na lista
        expect(screen.getByText('Primeiro coment�rio')).toBeInTheDocument();
        expect(screen.getByText('Segundo coment�rio')).toBeInTheDocument();
    });
});
