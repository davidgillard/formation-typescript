enum DoorState{
  Open,
  Closed
}

function checkDoorState(state: DoorState) {
  console.log(`enum value is : ${state}`);
  switch (state) {
    case DoorState.Open:
      console.log(`Door is open`)
      break;

    default:
      console.log(`Door is closed`)
      break;
  }
}

checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

// explications:

// Ici, nous pouvons clairement voir que le compilateur a généré une valeur numérique pour chacune de nos 
// valeurs d'énumération définies. La valeur numérique de la valeur d'énumération DoorState.Open est 0,
// et de même, la valeur numérique de DoorState.Closed a été définie sur 1.
// L'utilisation d'énumérations nous aide à fournir un ensemble clair de valeurs pour une variable ou un paramètre
// de fonction. Elles fournissent également un moyen éprouvé d'éliminer les nombres magiques en définissant 
// un nombre limité de valeurs possibles.
