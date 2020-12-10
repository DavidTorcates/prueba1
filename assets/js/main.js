var app = new Vue({
    el: '#navbarTogglerDemo01',
    data: {
        ejercicio: "Curso Front End 151 - Vue Class",
        home: "Home",
        link: "Link",
        disabled: "Disabled",
        objArray: [
            { name: "Teresa", app: "Reyes", edad: 50 },
            { name: "Cristiano", app: "Ronaldo", edad: 45 },
            { name: "Brat", app: "Pitt", edad: 60 },
            { name: "Pamela", app: "Jiles", edad: 65 },
        ]
    }
})
var app2 = new Vue({
    el: '#componente2',
    data: {
        name: "Soy un titulo con Vue",
        conten: "With supporting text below as a natural lead-in to additional content.",
        Array: ["Excelente", "Muy Bueno", "Bien", "Se Puede Mejorar"],
        objArray: [
            { posicion: "1", name: "Arthur", last: "Curry", power: "Respirar Bajo del Agua" },
            { posicion: "2", name: "Alan", last: "Scott", power: "Volar" },
            { posicion: "3", name: "Clark", last: "Kent", power: "Rayos Laser" },
            { posicion: "4", name: "Jay", last: "Garrick", power: "Super Velocidad" },
        ]
    }
})
