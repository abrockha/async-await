async function cityLocation(city){
    fetch('https://geocode.xyz/' + city + "?json=1")
    .then(response => response.json())
    .then(data => console.log("The latitude is " + data.latt + ", \nThe longitude is " + data.longt));


}
let city = "Slidell";
cityLocation(city);