import { IngredDecorator } from "./ingredDecorator";

export class PepperoniDecorator extends DecoradorDeIngredientes {
  custo(): number {
    return this.sanduiche.custo() + 0.99;
  }
}