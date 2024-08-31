interface IAbrequired {
  a: number;
  b: string;
}

let ab: IAbrequired = {
  a: 1,
  b: "test"
}

type WeakInterface<T> = {
  [K in keyof T]?: T[K];
}

let allOptional: WeakInterface<IAbRequired> = {}
