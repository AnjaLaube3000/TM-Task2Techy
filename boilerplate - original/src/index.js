const person = {
  name: "Anja",
  age: 35
}

const location = {
  city: "Berlin",
  country: "Germany"
}

const overview = {
  ...person,
  ...location
}

console.log(overview)
