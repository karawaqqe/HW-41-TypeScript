export const age: number = 50;
export const userName: string = 'Max';
export const toggle: boolean = true;
export const empty: null = null;
export const notInitialize: undefined = undefined;
export const callback = (a: number): number => {
  return 100 + a;
};

let anything: any = -20;
anything = 'Text';
anything = {};
export { anything };

let some: unknown;
some = 'Text';

export let str: string;

if (typeof some === 'string') {
  str = some;
}

export const person: readonly [string, number] = ['Max', 21];

export enum LoadStatus {
  LOADING = 'loading',
  READY = 'ready',
}

export let value: string | number;
value = 'Hello';
value = 100;

export let mode: 'enable' | 'disable';
mode = 'enable';

export function showMessage(message: string): void {
  console.log(message);
}

export function calc(num1: number, num2: number): number {
  return num1 + num2;
}

export function customError(): never {
  throw new Error('Error');
}

type PageStatus = 'open' | 'close';

export type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: PageStatus;
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

export const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

export const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
