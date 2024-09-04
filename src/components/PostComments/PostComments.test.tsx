import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';
import App from '../../App';

import Comment from '../../models/Comment';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve adicionar dois comentários', () => {
        render(<App />)
        fireEvent.change(screen.getByTestId('area-comment'), {
            target: {
                value: 'incrivel a sua miniatura'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))
        fireEvent.change(screen.getByTestId('area-comment'), {
            target: {
                value: 'aonde você comprou?'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))

        expect(screen.getByText('incrivel a sua miniatura')).toBeInTheDocument()
        expect(screen.getByText('aonde você comprou?')).toBeInTheDocument()
    })
});