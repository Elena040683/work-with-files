const fs = require('fs/promises');

const fileOperation = async(action, filePath, data) => {
  switch(action) {
    case "read":
      const text = await fs.readFile(filePath, "utf-8");
      console.log(text);
      // const data = await fs.readFile(filePath);
      // const text = data.toString();
      // console.log(text);
      break;
    
    case "add":
      const result = fs.appendFile(filePath, data);
      console.log(result);
      break;

    case "replace":
      await fs.writeFile(filePath, data);
      break;
    default:
      console.log("unknown action");
  }
};

const filePath = "files/file.txt";
//fileOperation("read", filePath);
const phrase = "Учить ноду очень очень классно!"
//fileOperation("add", filePath, `\n${phrase}`);
fileOperation("replace", filePath, `\n${phrase}`);


// fs.readFile("files/file.txt")
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message))

// Работа с JSON файлами

//const productsOperations = require('./work-with-json/products');

// 1. Получить все товары 
// 2. Получить один товар по id
// 3. Добавить товар в список
// 4. Обновить товар по id
// 5. Удалить товар по id


//const invokeAction = async(action) => {
//   switch(action){
//     case "getAll":
//       const products = await productsOperations.getAll();
//       console.log(products);
//       break;
//   }
// };
 
//invokeAction('getAll');