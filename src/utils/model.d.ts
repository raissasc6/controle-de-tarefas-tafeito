type IdTarefa = number;

export type Categoria = {
  id: number;
  descricao: string;
};

export type Tarefa = {
  descricao: string;
  id_categoria: number;
  id: IdTarefa;
  id_usuario: number;
  data_conclusao: string | null;
  etiquetas: string[];
};
