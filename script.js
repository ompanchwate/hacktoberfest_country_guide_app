let search=document.getElementById("search");
let country= document.getElementById("country");


//adding event on search button
search.addEventListener("click",() => {

    let countryName = country.value;
    let finalURl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURl);

    fetch(finalURl).then((response) => response.json()).then((data) => {
        console.log(data);
        console.log(data[0].capital);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);
        console.log(data[0].continents[0]);
        
        result.innerHTML = `
            <div class="info py-5"> 

                <h2 class="font-bold uppercase text-lg text-center py-2">${data[0].name.common}</h2>

                <div class="wrapper py-2">
                    <h4 class="inline font-bold">Capital : </h4>
                    <span>${data[0].capital}</span>
                </div>   
               
                <div class="wrapper py-2">
                    <h4 class="inline font-bold">Continent : </h4>
                    <span>${data[0].continents[0]}</span>
                </div>

            </div>
        `
    });

}); 