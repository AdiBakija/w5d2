class Pizza {

  constructor(size, crust, stuffedcrust) {
    this.size = size;
    this.crust = crust;
    this.stuffedcrust = stuffedcrust;
    this.toppings = ["Cheese"];
  }

  addTopping(...topping) {//Note the use of the spread operator
    this.toppings.push(...topping);
  }

  removeTopping(topping) {
    let index = this.toppings.indexOf(topping);
    this.toppings.splice(index, 1);
  }

}

let pizza1 = new Pizza("Medium", "thin", true);


pizza1.addTopping("Green Peppers", "Mushrooms", "Bacon");
pizza1.removeTopping("Green Peppers")
console.log(pizza1);