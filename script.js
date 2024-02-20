function generateEmail(name, surname, age) {
    let domain = "gmail.com"
    let email = `${name}${surname}${age}@${domain}`
    return email.toLowerCase()
}
let name = prompt("Введите имя")
let surname = prompt("Введите фамилию")
let age = prompt("Введите возраст")

let email = generateEmail(name, surname, age)
console.log(email);

// Создать функцию генератор эмейла которая принимает фамилию и выдаёт вам готовый вариант эмейла 

function generate_id(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  }

  const randomId = generate_id(10);
  console.log(`Ваш айди: ${randomId}`);

// Создать функцию рандомного айди с цифрами и буквами