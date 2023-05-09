// Function overloads
type compatible = string | number;
function merge(a: string, b: string): string;
function merge(a: number, b: number): number;
function merge(a: compatible, b: compatible): compatible {
  if (typeof a === 'string' || typeof b === 'string') {
    return `${a} ${b}`;
  }

  return a + b;
}

console.log(merge('Hello', 'World').toUpperCase());
console.log(merge(1, 2).toFixed(3));

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});

// index properties
interface ErrorContainer {
  source: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  source: 'form',
  email: 'Not a valid email',
};

// Type casting
const inputValue: any = 'hello guys';

console.log((inputValue as string).toUpperCase());
