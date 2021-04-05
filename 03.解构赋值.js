const user = {
    name: 'zs',
    age: 20,
    gender: '男'
}

// const name = user.name
// const age = user.age

const { name: userName , age: userAge } = user
console.log(userName,userAge)