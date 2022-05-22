/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie(title, director, budget, wasExpensive) {
    this.title = String;
    this.director = String;
    this.budget = Number;
    this.wasExpensive = function (Number) {
        if (Number > 100000000) {
            return true;
        } else return false;
    }
}

const newMovie = new Movie();

console.log(newMovie.wasExpensive(50000000));