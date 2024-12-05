export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('should check whether it is a triangle');
    }

    const bigSide: number = Math.max(a, b, c);

    if (a + b + c - bigSide <= bigSide) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const A = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +A.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private r: number,
  ) {
    if (r <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const A = Math.pow(this.r, 2) * Math.PI;

    return +A.toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
  ) {
    if (a && b <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const A = this.a * this.b;

    return +A.toFixed(2);
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
