// /* ------------------------------ TASK 4 -----------------------------------
// Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
// ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
// Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
// nurodomas gamintojas ir jo pagaminti modeliai.


// Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
// turėti bent minimalų stilių ir būti responsive;
// -------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const results = document.getElementById('output');

const fetchCars = async () => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    for (const carBrand of data) {
        const brands = document.createElement('h1');

        brands.textContent = carBrand.brand;

        results.append(brands);

        for (const carModel of carBrand.models) {
            const models = document.createElement('div')
            
            models.textContent = carModel;

            results.append(models);
        }
    }
};

fetchCars();


