export class Aims {
  /**
   * @member {number} pi - holds the value 3.14
   */
  static pi = 3.14;

  /**
   * holds all the 2d area formulas
   */
  static area = {
    /**
     * @param  {number} b the base of the triangle
     * @param  {number} h the height of the triangle
     * @returns {number} the area of the triangle
     */
    triangle(b: number, h: number): number {
      return (b * h) / 2;
    },
    /**
     * @param  {number} l the length of the rectangle
     * @param  {number} w the width of the rectangle
     * @returns {number} the area of the rectangle
     */
    rectangle(l: number, w: number): number {
      return l * w;
    },
    /**
     * @param  {number} h the height of the trapezoid
     * @param  {number} b1 the base1 of the trapezoid
     * @param  {number} b2 the base2 of the trapezoid
     * @returns {number} the area of the trapezoid
     */
    trapezoid(h: number, b1: number, b2: number): number {
      return (h * (b1 + b2)) / 2;
    },
    /**
     * @param  {number} b the base of the parallelogram
     * @param  {number} h the height of the parallelogram
     * @returns {number} the area of the parallelogram
     */
    parallellogram(b: number, h: number): number {
      return b * h;
    },
    /**
     * @param  {number} r the radius of the circle
     * @returns {number} the area of the circle
     */
    circle(r: number): number {
      return Aims.pi * r ** 2;
    },
  };

  /**
   * holds all formulas for Volume and Area of solids
   */
  static solids = {
    //! Volume

    /**
     * calculates the volume of a right circular cone
     * @param  {number} r the radius of the base of the cone
     * @param  {number} h the height of the cone
     * @returns {number} volume of the cone
     */
    coneVolume(r: number, h: number): number {
      return (Aims.pi * r ** 2 * h) / 3;
    },
    /**
     * @param  {number} b the base of the pyramid
     * @param  {number} h the height of the pyramid
     * @returns {number} volume of the pyramid
     */
    pyramidVolume(b: number, h: number): number {
      return (b * h) / 3;
    },
    /**
     * @param  {number} r the radius of the sphere
     * @returns {number} volume of the sphere
     */
    sphereVolume(r: number): number {
      return (4 * (Aims.pi * r ** 3)) / 3;
    },
    /**
     * @param  {number} r the radius of the base of the cylinder
     * @param  {number} h the height of the cylinder
     * @returns {number} volume of the cylinder
     */
    cylinderVolume(r: number, h: number): number {
      return Aims.pi * r ** 2 * h;
    },
    /**
     * @param  {number} b the base of the prism
     * @param  {number} h the height of the prism
     * @returns {number} volume of the prism
     */
    prismVolume(b: number, h: number): number {
      return b * h;
    },

    //! Surface Area
    /**
     * @param  {number} r the radius of the base of the cone
     * @param  {number} l the length of the cone
     * @returns {number} the surface area of the cone
     */
    coneSA(r: number, l: number): number {
      return Aims.pi * r * l + Aims.pi * r ** 2;
    },
    /**
     * @param  {number} b the base of the pyramid
     * @param  {number} p the permimiter of the base of the pyramid
     * @param  {number} l the length of the base of the pyramid
     * @returns {number} the surface area of the pyramid
     */
    pyramidSA(b: number, p: number, l: number): number {
      return b + (p + l) / 2;
    },
    /**
     * @param  {number} r the radius of the sphere
     * @returns {number} the surface area of the sphere
     */
    sphereSA(r: number): number {
      return 4 * Aims.pi * r ** 2;
    },
    /**
     * @param  {number} r the radius of the base of the cylinder
     * @param  {number} h the height of the cylinder
     * @returns {number} the surface area of the cylinder
     */
    cylinderSA(r: number, h: number): number {
      return 2 * Aims.pi * r * h + 2 * Aims.pi * r ** 2;
    },

    /**
     * @param  {number} b the base of the prism
     * @param  {number} p the perimiter of the base of the prism
     * @param  {number} h the height of the prism
     * @returns {number} the surface area of the prism
     */
    prismSA(b: number, p: number, h: number): number {
      return 2 * b + p * h;
    },
  };

  /**
   * holds all of the linear equation forms
   */
  static linear = {
    /**
     * @param  {number} y1 the first y coordinate
     * @param  {number} y2 the second y coordinate
     * @param  {number} x1 the first x coordinate
     * @param  {number} x2 the second x coordinate
     * @returns {number} the value of m where m is the slope of the two points
     */
    psForm(y1: number, y2: number, x1: number, x2: number): number {
      return (y1 - y2) / (x1 - x2);
    },
    /**
     * @param  {number} A a placeholder for the constant A
     * @param  {number} B a placeholder for the constant B
     * @returns {string} the final standard form equation
     */
    stdForm(A: number, B: number): string {
      return `${A}x + ${B}y = C`;
    },
    /**
     * @param  {number} m the slope
     * @param  {number} x the x variable
     * @param  {number} b a placeholder for the contant b
     * @returns {string} the final slope intercept equation
     */
    slopeInt(m: number, b: number): string {
      return `y = ${m}x + ${b}`;
    },
  };

  /**
   * holds the pythagorean theorem
   */
  static pyTheo = {
    /**
     * @param  {number} a the a side of the right triangle
     * @param  {number} b the b side of the right triangle
     * @returns {number} the hypotenuse of the triangle, squared
     */
    pgTheorem(a: number, b: number): number {
      return a ** 2 + b ** 2;
    },
  };

  /**
   * holds all of the coordinate geometry formulas
   */
  static coordGeom = {
    /**
     * @param  {number} x1 the first points x coordinate
     * @param  {number} x2 the second points x coordinate
     * @param  {number} y1 the first points y coordinate
     * @param  {number} y2 the second points y coordinate
     * @returns {number} the distance between the two points
     */
    distance(x1: number, x2: number, y1: number, y2: number): number {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    },
    /**
     * @param  {number} x1
     * @param  {number} x2
     * @param  {number} y1
     * @param  {number} y2
     * @returns {Tuple} a tuple containing the x and y coordinate of the midpoint
     */
    midpoint(x1: number, x2: number, y1: number, y2: number): [number, number] {
      return [(x2 - x1) ** 2, (y2 - y1) ** 2];
    },
    /**
     * @param  {number} x1
     * @param  {number} x2
     * @param  {number} y1
     * @param  {number} y2
     * @returns {number} the slope of the two points
     */
    slope(x1: number, x2: number, y1: number, y2: number): number {
      return (y2 - y1) / (x2 - x1);
    },
  };

  /**
   * holds the quadratic formula
   */
  static quadForm = {
    /**
     * @param  {number} b a placeholder for the b variable
     * @param  {number} a a placeholder for the a variable
     * @param  {number} c a placeholder for the c variable
     * @returns {Array} an array holding the plus and minus versions of the formula
     */
    quad(b: number, a: number, c: number): number[] {
      return [
        (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a),
        (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a),
      ];
    },
  };


  /**
   * holds the sum of interior angles formula
   */
  static sumIntAngles = {
    /**
     * @param  {number} n number of sides on the polygon
     * @returns {number} the sum of the measures of the interior angles of a convex polygon
     */
    sum(n: number): number {
      return (n - 2) * 180;
    },
  };

  /**
   * holds the distance formula for a moving object
   */
  static distanceForm = {
    /**
     * @param  {number} r the rate the object moves at
     * @param  {number} t the time the object is moving for
     * @returns {number} the distance the object traveled
     */
    distance(r: number, t: number) : number {
      return r * t
    }
  }


  // static permutations = {
  //   permutes(n: number, r: number) : number {
  //     let n1: number; 
  //     if(n === 0 || n === 1 ){
  //       n1 = 1
  //     }
  //     let n3: number;

  //     let n2: number = (n - r)
  //      while (n > 1 && n2 > 1){
  //       n--
  //       n2--
  //       n1 = n1 * n
  //       n3 = n3 * n2
  //     }
  //     return (n1) / (n3)
  //   }
  // }
}
