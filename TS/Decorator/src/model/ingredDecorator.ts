
export abstract class DecoradorDeIngredientes implements Sanduiche {
  constructor(protected sanduiche: Sanduiche) {}

  abstract custo(): number;
}