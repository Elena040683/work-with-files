const fs = require('fs/promises');
console.log(__dirname);
const getAll = async() => {
  //считаем файл products.json
  const products = await fs.readFile('products.json');
  return products;
}

module.exports = getAll;