import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

test('renders TaskForm and handles input', () => {
    render(<TaskForm />);
    const input = screen.getByPlaceholderText(/task name/i);
    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(input.value).toBe('New Task');
});

test('submits the form', () => {
    const handleSubmit = jest.fn();
    render(<TaskForm onSubmit={handleSubmit} />);
    const input = screen.getByPlaceholderText(/task name/i);
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.submit(screen.getByRole('form'));
    expect(handleSubmit).toHaveBeenCalledWith('New Task');
});