import { render, screen } from '@testing-library/react';
import TaskCard from '../TaskCard';

test('renders TaskCard component', () => {
    render(<TaskCard title="Test Task" description="This is a test task." />);
    const titleElement = screen.getByText(/Test Task/i);
    const descriptionElement = screen.getByText(/This is a test task./i);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
});