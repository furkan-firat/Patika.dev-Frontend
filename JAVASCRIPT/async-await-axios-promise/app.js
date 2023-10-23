import axios from "axios";


const getUsers = (number) =>{
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);

        resolve(data);
    });
}

const getPosts = (number) => {
    return new Promise( async(resolve, reject) => {
        const { data } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)

        resolve(data);

    });
}

async function getData(number) {

    return Promise.all([getUsers(number), getPosts(number)])
    .then(console.log)
    .catch(console.log)
    
}

export default getData;