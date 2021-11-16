$nameProfile = document.querySelector(".name")
$urlVideo = document.getElementById("search")
$search = document.querySelector(".search")
$video = document.getElementById("video")

let random_name = ["Aylen Tejas",
    "Aiser Beza",
    "Ai Soda",
    "Lola Mento",
    "Seko Me",
    "Laper Dida",
    "Eldo Mingo",
    "Aiko Mida",
    "Ayse Bollat",
    "Aitor Tilla",
    "Ai Do",
    "Mehdi Duro",
    "Aide Piña",
    "Elvi Ernes",
    "Elsa Bado",
    "Agua Cate",
    "Héctor Tuga",
    "Jacky Sieras",
    "Aiman Zana",
    "Big Daddy",
    "Duende verde",
    "Frodo",
    "Zeus",
    "Power Ranger",
    "Harry Potas",
    "Jaime Havizan",
    "Iono Ce",
    "Matt Enmen",
    "Lucho Portuano",
    "Elton Tito",
    "AR To",
    "Elizen Siado",
    "Reggae Man",
    "Jimmy Neutron",
    "Oso de Goma",
    "Shrek",
    "Ángel y Cupido",
    "Paco jerte",
    "Pato lavida",
    "Aitor menta",
    "Armando casas",
    "Tomas turbao",
    "Paco mermela",
    "Keko jones",
    "Solomeo paredes",
    "Alberto catetas",
    "Teyeno tuoyo",
    "Al bajad mamad",
    "Casimiro lastetas",
    "Omar Icono",
    "Víctor Tillas",
    "Armando Broncas",
    "Juan Macho Alfa",
    "Andrés Trozado",
    "Jorge Nitalesio",
    "Valdomero Plancha",
    "Rubén Fermizos",
    "Juanca Dáveres",
    "Isaac A. Mocos",
    "Elba Gina",
    "Aydee Pepperoni",
    "Lazo Rita",
    "Débora Vergara",
    "Mónica Galindo",
    "Mama Lona",
    "Luci Latanga",
    "Verónica Gando",
    "Rosa Canales",
    "Débora Testa",
    "Miva Gina",
    "Lola Maras",
    "Anna Banana",
    "Kiti kiero",
    "Lola Ila",
    "Soly Luna",
    "Nancy Diva",
    "Chiki Ttita",
    "Laga Tita",
    "Cardi Borriquero",
    "Cuchi Chuchi",
    "La Kuqi",
    "Lauri Sol",
    "Laura Lala",
    "Laura Lady",
    "Pechu gitana",
    "Sofía de Grecy",
    "Caramelo Rosa",
    "Babi Dulce",
    "Marisol Girasol",
    "Bella Dur Miente",
    "Flor de flores",
    "Ester Colero",
    "Susana Torio",
    "Dolores Delano",
    "Elsa Capuntas",
    "Inés Queleto",
    "Blanca Nieves",
    "Estela Gartija",
    "Cindy Nero"]

function addUserName(){
    let a = parseInt(Math.random()*random_name.length)
    $nameProfile.innerHTML = `<p>${random_name[a]}</p>`
    console.log(a)
}

addUserName()

$search.addEventListener('click', () => {
    let a = $urlVideo.value
    $video.setAttribute("src", a)
    console.log(a)
})