let person1 = {
  Nombre: "Joni",
  Apellido: "Santos",
  Nacionalidad: "portugués",
  Gustos: ["Chismes", "Compartir", { Comida: "Vegana", Humor: "Tonto" }],
};

let person2 = {
  Nombre: "Jina",
  Apellido: "Niu",
  Nacionalidad: "española",
  Gustos: [{ Personas: "Niurka", Redes: "Instagram" }, "Moda"],
};

let person3 = {
  Nombre: "Jon",
  Apellido: "Devil",
  Nacionalidad: "japonés",
  Gustos: ["Empoderamiento", { Cine: "Terror" }, "Ropa gótica"],
};

let personalities = [person1, person2, person3];

// console.log(personalities.map((item, index) => item.Nombre + ' ' + item.Apellido + ' es ' + item.Nacionalidad))

let persons = "";
personalities.map((item, index) => {
  persons +=
    "<li>" +
    item.Nombre +
    " " +
    item.Apellido +
    " es " +
    item.Nacionalidad +
    "</li>";
});

let list = document.querySelector("#List");
list.innerHTML = persons;
