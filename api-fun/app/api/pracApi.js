import axios from "axios"

const pracApi = {
    "GET": (navigation, location, data) => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
            .then(res => navigation.navigate(location, {data, resp: res}))
            .catch(err => console.error(err))
        
    },
    "POST": (navigation, location, data) => {
        console.log(data) 
        navigation.navigate(location, data)
    },
    "PUT/POST": (navigation, location, data) => {
        console.log(data) 
        navigation.navigate(location, data)
    },
    "DELETE": (navigation, location, data) => {
        console.log(data) 
        navigation.navigate(location, data)
    },
    "Sim Request": (navigation, location, data) => {
        console.log(data) 
        navigation.navigate(location, data)
    },
    "Custom Headers": (navigation, location, data) => {
        console.log(data) 
        navigation.navigate(location, data)
    },
    "Transform": (navigation, location, data) => {
        console.log(data) 
        navigation.navigate(location, data)
    },
    "Error Handling": (navigation, location, data) => {
        console.log(data) 
        navigation.navigate(location, data)
    },
    "Cancel": (navigation, location, data) => {
        console.log(data) 
        navigation.navigate(location, data)
    },
}

export default pracApi;