const users =
  [
    {name: {first: 'Bruce', last: 'Wayne'}, age: 26, sales: 2314},
    {name: {first: 'Alvaro', last: 'Angelos'}, age: 55, sales: 1668},
    {name: {first: 'Denese', last: 'Dossett'}, age: 29, sales: 9248},
    {name: {first: 'Douglas', last: 'Denney'}, age: 49, sales: 5058},
    {name: {first: 'Earline', last: 'Erickson'}, age: 19, sales: 18876},
    {name: {first: 'Herman', last: 'Hazell'}, age: 25, sales: 2746},
    {name: {first: 'Homer', last: 'Hirth'}, age: 26, sales: 474},
    {name: {first: 'Hwa', last: 'Heidt'}, age: 32, sales: 9607}
  ]

  function filterUserHasThanMore50(array) {
    const passed = []
    for (var i = 0; i < array.length; i++) {
      if(array[i].age > 50)
        passed.push(array[i])
    }
    return passed
  }  

  const filterAgeEx1 = users.filter(function(user) {
    return user.age > 50
  })

console.log(filterAgeEx1)