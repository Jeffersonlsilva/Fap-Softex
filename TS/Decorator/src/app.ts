import { SanduicheFrangoAssado } from "./model/frangoAssado";
import { PepperoniDecorator } from "./model/pepperoni";
import { QueijoMussarelaRalado } from "./model/queijoMussarelaRalado";

const sanduicheFrangoAssado: Sanduiche = new SanduicheFrangoAssado();
imprimirCusto(sanduicheFrangoAssado, 'Sanduíche de Frango Assado');

const sanduichePepperoni: Sanduiche = new PepperoniDecorator(sanduicheFrangoAssado);
imprimirCusto(sanduichePepperoni, 'Sanduíche de Frango Assado com Pepperoni');

const sanduichePepperoniQueijo: Sanduiche = new QueijoMussarelaRaladoDecorator(sanduichePepperoni);
imprimirCusto(sanduichePepperoniQueijo, 'Sanduíche de Frango Assado com Pepperoni e Queijo Mussarela Ralado');