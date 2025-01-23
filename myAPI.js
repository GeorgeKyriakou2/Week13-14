let myDiv = document.getElementById('myDiv');

async  function callList(){

    const response = await fetch('https://codecyprus.org/th/api/list');
     let jsonObject = await response.json();

    console.log(jsonObject);
    console.log(jsonObject.treasureHunts[0].name);

    myDiv.innerHTML = jsonObject.treasureHunts[0].ownerEmail +jsonObject.treasureHunts[0].name;
}

callList();