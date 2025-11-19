import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

test('renders TaskList component', () => {
    render(<TaskList tasks={[]} />);
    const taskListElement = screen.getByTestId('task-list');
    expect(taskListElement).toBeInTheDocument();
});

test('displays tasks correctly', () => {
    const tasks = [{ id: 1, title: 'Test Task 1' }, { id: 2, title: 'Test Task 2' }];
    render(<TaskList tasks={tasks} />);
    const taskElements = screen.getAllByTestId('task-item');
    expect(taskElements.length).toBe(tasks.length);
    expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    expect(screen.getByText('Test Task 2')).toBeInTheDocument();
});

