class Car {
    constructor(make, model, year, color, ownershipStatus) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.ownershipStatus = ownershipStatus
    }
}

const Car1 = new Car("Honda", "Civic", 2002, "Silver", "Used")
const Car2 = new Car("Ford", "Mustang", 2015, "Black", "New")
const Car3 = new Car("Mini", "Cooper Base", 2010, "Green", "Used")

console.log(Car1);
console.log(Car2);
console.log(Car3);

class GroceryItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    calculateTotal(total) {
        total = GroceryItem.this.price++
    }

}

const GroceryItem1 = new GroceryItem("Tomato", 5.00);
const GroceryItem2 = new GroceryItem("Knife", 10.00);
const GroceryItem3 = new GroceryItem("cutterBoard", 20.00);
const GroceryItem4 = new GroceryItem("Lamp", 5.00);
const GroceryItem5 = new GroceryItem("PS5", 730.00);
const GroceryItem6 = new GroceryItem("DragonBallZBattleOfGods", 20.00);



console.log(GroceryItem1, GroceryItem2, GroceryItem3, GroceryItem4, GroceryItem5, GroceryItem6)

GroceryItem1.calculateTotal()