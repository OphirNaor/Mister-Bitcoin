
// export default {
//     getUser,



// }






// function getUser() {
//     const user = [
//         {
//             name: "Ochoa Hyde",
//             coins: 100,
//             moves: []
//         },
//         {
//             name: "John Smith",
//             coins: 50,
//             moves: []
//         },
//         {
//             name: "Bill Gates",
//             coins: 100,
//             moves: []
//         },
//         {
//             name: "Stive Gobs",
//             coins: 300,
//             moves: []
//         },

//     ]
//     return Promise.resolve(user)
// }

function getUser() {
    return {
        name: 'Bill Gates',
        coins: 1200,
        moves: []
    }
}

export const UserService = {
    getUser
}