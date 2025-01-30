
function getChallenges() {
    fetch("https://codecyprus.org/th/api/list?include-active=true")
        .then(response => response.json()) //Parse JSON text to JavaScript object
        .then(jsonObject => {
            console.log(jsonObject); //TODO - Success, do something with the data.

            let treasureHuntsArray =jsonObject.treasureHunts;

            for (let i =0; i<4; i++){
                let listItem = document.createElement("li");
                let TreasureId = treasureHuntsArray[i].uuid;
                listItem.innerHTML = "<a href = 'https://codecyprus.org/th/api/start?player=TeamI&app=TeamI&treasure-hunt-id=" + TreasureId +"'> " + treasureHuntsArray[i].name + "</a>";
                ChallengesList.appendChild(listItem);
            }
        });
}