import { IngredDecorator } from "./ingredDecorator";

export class QueijoMussarelaRaladoDecorator extends DecoradorDeIngredientes {
  custo(): number {
    return this.sanduiche.custo() + 2.0;
  }
}
