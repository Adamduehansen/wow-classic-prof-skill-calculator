import { describe, expect, it } from 'vitest';
import calculateSkill from './calculateSkill';

describe('calculateSkill', () => {
  it.each([
    [1, 5],
    [30, 150],
    [60, 300],
    [61, 307],
    [65, 337],
    [70, 375],
    [71, 382],
    [75, 412],
    [80, 450],
  ])('should calculate skill from level', (input, expected) => {
    // Act
    const result = calculateSkill(input);

    // Assert
    expect(result).toEqual(expected);
  });
});
