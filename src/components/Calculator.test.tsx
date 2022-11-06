import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  test('should set default value', async () => {
    // Arrange
    const mockOnChange = vi.fn();
    render(<Calculator defaultValue={10} onChange={mockOnChange} />);

    // Act
    const input = await screen.findByLabelText('Level');

    // Assert
    expect(input).toHaveAttribute('value', '10');
  });

  test('should trigger onChange event when changed', async () => {
    // Arrange
    const mockOnChange = vi.fn();
    render(<Calculator defaultValue={10} onChange={mockOnChange} />);

    // Act
    const input = await screen.findByLabelText('Level');
    fireEvent.change(input, {
      target: {
        value: '11',
      },
    });

    // Assert
    expect(mockOnChange).toHaveBeenCalledWith(10, 11);
  });
});
