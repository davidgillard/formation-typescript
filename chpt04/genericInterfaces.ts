interface IPrint {
  print(): void;
}

interface ILogInterface<T extends IPrint> {
  logToConsole(IPrintObj: T): void;
}

class LogClass<T extends IPrint> implements ILogInterface<T> {
  logToConsole(IPrintObj: T): void {
    IPrintObj.print();
  }
}

let printObject: IPrint = {
  print() {console.log(`printObject.print() called`)}
}

let logClass = new LogClass();
logClass.logToConsole(printObject);
