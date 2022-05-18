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
    ])('Is Position (%p , %p) valid', (positionX: number, positionY: number, expectedValue: boolean) => {
        expect(Robot.isValidPosition(positionX, positionY)).toBe(expectedValue);
    });
    it.each([
        [1, 1, FACING.NORTH, 1, 2],
        [1, 1, FACING.EAST, 2, 1],
        [2, 2, FACING.SOUTH, 2, 1],
        [2, 2, FACING.WEST, 1, 2]
    ])('assert robot from position (%p, %p) can move %p', (positionX: number, positionY: number, facing: FACING, expectedX: number, expectedY: number) => {
        r.place({positionX, positionY, facing});
        r.move();
        expect(r.getPositionX()).toBe(expectedX);
        expect(r.getPositionY()).toBe(expectedY);
    });
    it.each([
        [5, 5, FACING.NORTH],
        [5, 5, FACING.EAST],
        [5, 1, FACING.SOUTH],
        [1, 5, FACING.WEST]
    ])('assert robot from position (%p, %p) can not cross %p limit', (positionX: number, positionY: number, facing: FACING) => {
        r.place({positionX, positionY, facing});
        r.move();
        expect(r.getPositionX()).toBe(positionX);
        expect(r.getPositionY()).toBe(positionY);
    });
});

describe('Rotating tests', () => {
    it.each([
        [FACING.NORTH, FACING.WEST],
        [FACING.SOUTH, FACING.EAST],
        [FACING.EAST, FACING.NORTH],
        [FACING.WEST, FACING.SOUTH]
    ])('from %p faces %p when going left', (startFacing: FACING, endsFacing: FACING) => {
        r.place({positionX: 1, positionY: 2, facing: startFacing});
        r.left();
        expect(r.getFacing()).toBe(endsFacing);
    });

    it.each([
        [FACING.NORTH, FACING.EAST],
        [FACING.SOUTH, FACING.WEST],
        [FACING.EAST, FACING.SOUTH],
        [FACING.WEST, FACING.NORTH]
    ])('from %p faces %p when going right', (startFacing: FACING, endsFacing: FACING) => {
        r.place({positionX: 1, positionY: 2, facing: startFacing});
        r.right();
        expect(r.getFacing()).toBe(endsFacing);
    })
});

test('Place, move and place again is valid', () => {
    r.place({positionX: 1, positionY: 2, facing: FACING.NORTH});
    r.move();
    r.place({positionX: 5, positionY: 3, facing: FACING.SOUTH});
    expect(r.getPositionX()).toBe(5);
    expect(r.getPositionY()).toBe(3);
    expect(r.getFacing()).toBe(FACING.SOUTH);
});

test('Avoid acting before a Place command', () => {
    r.move();
    expect(r.getPositionX()).toBeUndefined();
    expect(r.getPositionY()).toBeUndefined();
    expect(r.getFacing()).toBeUndefined();
})