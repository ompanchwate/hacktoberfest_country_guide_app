let search = document.getElementById("search");
let country = document.getElementById("country");


//adding event on search button
search.addEventListener("click", () => {
    result.innerHTML = `
        <h2 class="font-bold uppercase text-xl text-center mt-6">Loading...</h2>    
        `
    let countryName = country.value;

    if (countryName == "") {
        result.innerHTML = `
        <h2 class="font-bold uppercase text-xl text-center mt-6 text-red-600">Enter the country name.</h2>    
        `
    }
    else {
        let finalURl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        // console.log(finalURl);

        fetch(finalURl).then((response) => response.json()).then((data) => {
            // console.log(data);
            // console.log(data[0].flags['png']);
            // console.log(data[0].capital);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);
            // console.log(data[0].continents[0]);
            // console.log(data[0].maps.googleMaps);

            if (data.status == "404") {
                result.innerHTML = `
        <h2 class="font-bold uppercase text-xl text-center mt-6 text-red-700">Invalid input <br> No Country is found</h2>    
        `
            }
            else {
                result.innerHTML = `
            <div class="info pt-4 sm:text-xl"> 
            
                <div class="flex items-center justify-center">
                    <img src="${data[0].flags['png']}" class="w-32"></img>
                </div>
           
                <h2 class="font-bold uppercase text-2xl text-center py-2">${data[0].name.common}</h2>

                <div class="wrapper py-2 flex items-center space-x-4">
                    <h4 class="inline font-bold">Google Map : </h4>
                    <a href="${data[0].maps.googleMaps}" class="text-blue-800 font-bold flex items-center"><img src="Assets/googleMaps.jpg" class="w-10"></img>Click here...</a>
                </div>   

                <div class="wrapper py-2">
                    <h4 class="inline font-bold">Capital : </h4>
                    <span>${data[0].capital}</span>
                </div>   
               
                <div class="wrapper py-2">
                    <h4 class="inline font-bold">Continent : </h4>
                    <span>${data[0].continents[0]}</span>
                </div>

                <div class="wrapper py-2">
                    <h4 class="inline font-bold">Currency : </h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)].name} (${data[0].currencies[Object.keys(data[0].currencies)].symbol})</span>
                </div>

            </div>
        `
            }

        });
    }
}); 