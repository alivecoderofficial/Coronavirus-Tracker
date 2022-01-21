fetch("https://corona.lmao.ninja/v2/countries/nepal")
    .then((Response) => {
        return Response.json();
    }).then((data) => {
        document.getElementById("country_name").innerHTML = data.country;
        document.getElementById('Country_flag').src = data.countryInfo.flag
        document.getElementById('totalCases').innerHTML = data.cases
        document.getElementById('totalDeaths').innerHTML = data.deaths
        document.getElementById('totalRecovered').innerHTML = data.recovered
        document.getElementById('todayCases').innerHTML = data.todayCases
        document.getElementById('todayDeaths').innerHTML = data.todayDeaths
        document.getElementById('todayRecovered').innerHTML = data.todayRecovered
        document.getElementById('activeCases').innerHTML = data.active
        document.getElementById('criticalCases').innerHTML = data.critical
        document.getElementById('totalTests').innerHTML = data.tests
    })