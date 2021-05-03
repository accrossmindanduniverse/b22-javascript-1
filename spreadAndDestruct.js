let data = 
  {
    id: 1,
    name: "Leanne Graham",
    username: 'Bret',
    email: 'sincere@april.biz',
    hobby: 'reading',
    address:
    {
      street: 'Kulkas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
  }

//a.
const newName = {...data, name: 'Fajar'}
const newEmail = {...data, email: 'fajarrizkymaulana186@gmail.com'}
const newHobby = {...data, hobby: 'menonton'}


// console.log(newName)
// console.log(newEmail)
// console.log(newHobby)

//b.

const {street, city} = data.address

console.log(street, city)
