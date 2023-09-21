export function formatPrice(value: number): string {
  const formatedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100);

  return formatedValue;
}