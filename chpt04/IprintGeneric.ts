interface IPrintId {
  id: number;
  print(): void;
}

interface IPrintName {
  name: string;
  print(): void;
}

function useT<T extends IPrintId | IPrintName>(item: T): void {
  item.print();
  item.id = 1; // error : id is not common
  item.name = "test"; // error : name is not common
}

// en sortie de la compilation nous avons cette erreur :
// error TS2339: Property 'id' does not exist on type 'T'
// error TS2339: Property 'name' does not exist on type 'T'
