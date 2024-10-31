// src/components/PostComments/PostComments.test.tsx
import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from './index';

describe('PostComments Component', () => {
    test('renders the form and allows adding comments', () => {
        render(<PostComments />);

        // Adiciona o primeiro comentário
        const textarea = screen.getByPlaceholderText('Escreva seu comentario aqui');
        const submitButton = screen.getByRole('button', { name: /comentar/i });
        
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        // Verifica se o primeiro comentário está na lista
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        // Adiciona o segundo comentário
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        // Verifica se ambos os comentários estão na lista
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
