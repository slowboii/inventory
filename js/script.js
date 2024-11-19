//Model
let myInventory = [];
let itemList = [
    {
    navn:'Kaffekopp', 
    type:'Kjøkken utstyr', 
    properties: {
        kanSlettes: true,
        stackable: false
    }
];

//Controller
function addItem(itemName){
    if(itemList.includes(itemName)){
        let index = itemList.indexOf(itemName);
        myInventory.push(itemList[index]);
    }
    return myInventory;
}

//View
function drawItemList(){
    let itemList = document.getElementById('itemsList');
    for(let i = 0; i < itemList.length; i++){   
        itemList.innerHTML += /*html*/`
            <div id="item_${i}">${itemList[i].navn}</div>
        `;
    }
}
drawItemList();


class Inventory {
    displayItemList(){
        document.addEventListener('DOMContentLoaded', () => {
            let inventoryDiv = document.getElementById('itemList');
            console.log(this.itemsList);
            for (let i = 0; i < this.itemsList.length; i++){
                inventoryDiv.innerHTML += /*html*/`
                    <div id="item_${i}">${this.itemsList[i].navn}</div>
                `;
            }
        });
    }
/*     deleteItem(item){
        for(let i = 0, i < this.inventory.length, i++){ // Looper gjennom inventory'et
            if(this.inventory[i].navn == item){
                this.inventory.splice(i, 1); // vi fjerner index i fra array'et
            }
        }
        return this.inventory;
    } */
}

let inventory = new Inventory();
let app = document.getElementById('app');

inventory.displayItemList();

app.innerHTML = /*html*/`
    <div id="inventoryContainer">
        <div id="itemList">
            <h2>Items du kan plukke opp</h2>
        </div>
    
        <div id="inventory">
            <h2>Inventory</h2>
        </div>
    </div>
`;