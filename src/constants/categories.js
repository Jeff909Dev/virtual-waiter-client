import carnes from './../assets/img/categories/carnes.jpg';
import pescados from './../assets/img/categories/pescados.jpg';
import ensaladas from './../assets/img/categories/ensaladas.jpg';
import entrantes from './../assets/img/categories/entrantes.jpg';
import postres from './../assets/img/categories/postres.jpg';
import pastas from './../assets/img/categories/pastas.jpg';
import pizzas from './../assets/img/categories/pizzas.jpg';
import refrescos from './../assets/img/categories/refrescos.jpg';
import vinos_tintos from './../assets/img/categories/vinos_tintos.jpg';
import vinos_blancos from './../assets/img/categories/vinos_blancos.jpg';
import vinos_rosados from './../assets/img/categories/vinos_rosados.jpg';
import agua from './../assets/img/categories/agua.jpg';
import champan_cava from './../assets/img/categories/champan_cava.jpg';
import cafe_te from './../assets/img/categories/cafe_te.jpg';
import licores from './../assets/img/categories/licores.jpg';


export const categoriesImages = [
    carnes,
    pescados,
    ensaladas,
    entrantes,
    postres,
    pastas,
    pizzas,
    refrescos,
    vinos_tintos,
    vinos_blancos,
    vinos_rosados,
    agua,
    champan_cava,
    cafe_te,
    licores
]

export const categories = [
    null,
    { id: 1, Descripcion: 'Carnes', path: "meats", img: carnes },
    { id: 2, Descripcion: 'Pescados', path: "fish", img: pescados },
    { id: 3, Descripcion: 'Ensaladas', path: "salads", img: ensaladas },
    { id: 4, Descripcion: 'Entrantes', path: "starters", img: entrantes },
    { id: 5, Descripcion: 'Postres', path: "desserts", img: postres },
    { id: 6, Descripcion: 'Pastas', path: "pasta", img: pastas },
    { id: 7, Descripcion: 'Pizzas', path: "pizza", img: pizzas },
    { id: 8, Descripcion: 'Refrescos', path: "refreshs", img: refrescos },
    { id: 9, Descripcion: 'Vinos tintos', path: "red_wine", img: vinos_tintos },
    { id: 10, Descripcion: 'Vinos blancos', path: "white_wine", img: vinos_blancos },
    { id: 11, Descripcion: 'Vinos rosados', path: "rose_wine", img: vinos_rosados },
    { id: 12, Descripcion: 'Agua', path: "water", img: agua },
    { id: 13, Descripcion: 'Champán y cava', path: "champagne_and_cava", img: champan_cava },
    { id: 14, Descripcion: 'Infusiones y cafés', path: "infunsions_and_coffee", img: cafe_te },
    { id: 15, Descripcion: 'Licores', path: "liquor", img: licores },
]