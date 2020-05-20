// AND (E) Lógico
exp1 && exp2

var a1 = true && true; // true && true    - retorna true
var a2 = true && false; // true && false   - retorna false
var a3 = false && true; // false && true   - retorna false
var a4 = false && (3 == 4); // false && false  - retorna false
var a5 = "gato" && "cão"; // true && true    - retorna Cão
var a6 = false && "gato"; // false && true   - retorna false
var a7 = "gato" && false; // true && false   - retorna false

// OR (ou) Lógico
exp1 || exp2

var a1 = true || true; // true && true    - retorna true
var a2 = true || false; // true && false   - retorna true
var a3 = false && true; // false && true   - retorna true
var a4 = false && (3 == 4); // false && false  - retorna false
var a5 = "gato" && "cão"; // true && true    - retorna gato
var a6 = false && "gato"; // false && true   - retorna gato
var a7 = "gato" && false; // true && false   - retorna gato


// NOT Lógico (!)

var n1 = !true; //Retorna False
var n1 = !false; //Retorna True
var n3 = !"Gato"; //Retorna False