/**
 * This finds the area of a rectangle
 * @param  {number} length the bottom or top of the rectangle
 * @param  {number} width the left or right side of the rectangle
 * @returns {number} the area of the rectangle
 */
export const calcArea = (length: number, width: number): number => {
  return length * width;
};

/**
 * this is a test string
 * @type {string[]}
 */

const testing: string[] = ["johnny"];

console.log(testing);

/**
 * do math related to areas
 */
export class Areas {
  // static pi = Math.PI;
  /**
   * @member {number} pi - holds the value 3.14
   */
  static pi = 3.14;
  /**
   * if you are creating a circle, else leave blank
   * @param  {number} radius - the radius of a circle
   */
  constructor(public radius?: number) {}

  static circle = {
    /**
     * finds the area of a circle
     * @param {number} radius radius of a circle
     * @returns {number} the area of a circle
     */
    area(radius: number): number {
      return radius * Areas.pi ** 2;
    },
    /**
     * finds the circumference of a circle
     * @param {number} radius radius of a circle
     * @returns {number} the area of a circle
     */
    circumference(radius: number): number {
      return 2 * Areas.pi * radius;
    },
  };

  static triangle = {
    area(base: number, height: number): number {
      return (base * height) / 2;
    },
  };
}

