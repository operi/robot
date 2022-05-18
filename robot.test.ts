import { Robot, FACING } from './robot'

var r = null;

beforeEach(() => {
    r = new Robot();
})

describe('Position Validation tests', () => {
    it.each([
        [2, -1, false],
        [1, 6, false],
        [-1, 3, false],
        [7, 2, false]
    ])('Is Position (%p , %p) valid', (x_position: number, y_position: number, expected_value: boolean) => {
        expect(Robot.isValidPosition(x_position, y_position)).toBe(expected_value);
    });
    it.each([
        [1, 1, FACING.NORTH, 1, 2],
        [1, 1, FACING.EAST, 2, 1],
        [2, 2, FACING.SOUTH, 2, 1],
        [2, 2, FACING.WEST, 1, 2]
    ])('assert robot from position (%p, %p) can move %p', (x_position: number, y_position: number, facing: FACING, expected_x: number, expected_y: number) => {
        r.place(x_position, y_position, facing);
        r.move();
        expect(r.getPositionX()).toBe(expected_x);
        expect(r.getPositionY()).toBe(expected_y);
    });
    it.each([
        [5, 5, FACING.NORTH],
        [5, 5, FACING.EAST],
        [5, 1, FACING.SOUTH],
        [1, 5, FACING.WEST]
    ])('assert robot from position (%p, %p) can not cross %p limit', (x_position: number, y_position: number, facing: FACING) => {
        r.place(x_position, y_position, facing);
        r.move();
        expect(r.getPositionX()).toBe(x_position);
        expect(r.getPositionY()).toBe(y_position);
    });
});

describe('Rotating tests', () => {
    it.each([
        [FACING.NORTH, FACING.WEST],
        [FACING.SOUTH, FACING.EAST],
        [FACING.EAST, FACING.NORTH],
        [FACING.WEST, FACING.SOUTH]
    ])('from %p faces %p when going left', (start_facing: FACING, ends_facing: FACING) => {
        r.place(1, 2, start_facing);
        r.left();
        expect(r.getFacing()).toBe(ends_facing);
    });

    it.each([
        [FACING.NORTH, FACING.EAST],
        [FACING.SOUTH, FACING.WEST],
        [FACING.EAST, FACING.SOUTH],
        [FACING.WEST, FACING.NORTH]
    ])('from %p faces %p when going right', (start_facing: FACING, ends_facing: FACING) => {
        r.place(1, 2, start_facing);
        r.right();
        expect(r.getFacing()).toBe(ends_facing);
    })
});