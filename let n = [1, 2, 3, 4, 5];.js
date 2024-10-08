let n = [1, 2, 3, 4, 5];
let mul_n = n.map((n) => n * 3);
let odd_n = mul_n.filter((n) => n % 2 !== 0);
console.log(odd_n); 