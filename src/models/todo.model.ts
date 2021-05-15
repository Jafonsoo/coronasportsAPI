import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nome: string;

  @property({
    type: 'string',
    required: true,
  })
  Nacionalidade: string;

  @property({
    type: 'string',
    required: true,
  })
  Equipa: string;

  @property({
    type: 'string',
    required: true,
  })
  Funcao: string;

  @property({
    type: 'date',
    required: true,
  })
  DataCovid: string;

  @property({
    type: 'string',
    required: true,
  })
  EstadoAtual: string;


  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
