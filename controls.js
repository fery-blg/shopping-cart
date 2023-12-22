let item_list = [];

function inc() {
  this.count += 1;
  this.total = this.count * this.price;
}

function dec() {
  if (this.count === 0) alert("negative quatity are not allowed ");
  else {
    this.count -= 1;

    this.total = this.count * this.price;
  }
}

function createProduct(price) {
  const product = {
    count: 0,
    price: price,
    total: 0,
    increment: inc,
    decrement: dec,
  };
  item_list.push(product);
  return product;
}
const product_1 = createProduct(900);

const product_2 = createProduct(900);

function render() {
  document.getElementById("q1").innerHTML = product_1.count;
  document.getElementById("p1").innerHTML = product_1.price;
  document.getElementById("t1").innerHTML = product_1.total;
  document.getElementById("q2").innerHTML = product_2.count;
  document.getElementById("p2").innerHTML = product_2.price;
  document.getElementById("t2").innerHTML = product_2.total;
}

function increment(n) {
  if (n === 1) {
    product_1.increment();
    let q1 = document.getElementById("q1");
    q1.textContent = product_1.count;
    let t1 = document.getElementById("t1");
    t1.textContent = product_1.total;
  } else if (n === 2) {
    product_2.increment();
    let q2 = document.getElementById("q2");
    q2.textContent = product_2.count;
    let t2 = document.getElementById("t2");
    t2.textContent = product_2.total;
  }
}

function decrement(n) {
  if (n === 1) {
    product_1.decrement();
    let q1 = document.getElementById("q1");
    q1.textContent = product_1.count;
    let t1 = document.getElementById("t1");
    t1.textContent = product_1.total;
  } else if (n === 2) {
    product_2.decrement();
    let q2 = document.getElementById("q2");
    q2.textContent = product_2.count;
    let t2 = document.getElementById("t2");
    t2.textContent = product_2.total;
  }
}

function remove(n) {
  const item = document.getElementById(n);
  item.remove();
}

function checkout() {
  let sum = 0;
  for (let i = 0; i < item_list.length; i++) {
    sum += item_list[i]["total"];
  }
  document.getElementById("total").innerHTML = sum;
}