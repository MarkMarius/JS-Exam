/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById('submit-btn').addEventListener('click', (event) => {
    event.preventDefault();

    const results = document.getElementById('output');

    results.innerText = '';

    const multiplyWeight = () => {
        const weightKg = document.getElementById('search').value;

        if (weightKg > 0) {
            let lb = 2.2406;
            let g = 0.0010000;
            let oz = 35.274;

            let convertedLb = Math.round(weightKg * lb);
            let convertedG = Math.round(weightKg / g);
            let convertedOz = Math.round(weightKg * oz);

            results.innerText =`Weight in grams: ${convertedG}g, weight in lb: ${convertedLb}lb, weight in oz: ${convertedOz}oz.`;

        } else {
            alert('Weight can not be 0 or negative');
        }
    }

    multiplyWeight(results);

});
