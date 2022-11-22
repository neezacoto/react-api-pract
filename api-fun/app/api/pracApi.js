import axios from "axios"

const pracApi = {
    "GET": (navigation, location, data) => {
        // axios({
        //     method: 'get',
        //     url: 'https://jsonplaceholder.typicode.com/posts',
        //     params: {
        //         _limit: 1
        //     }
        // })
        //     .then(res => navigation.navigate(location, {data, resp: res}))
        //     .catch(err => console.error(err))

        //axios get request by default so axios("link")
        //additionally
        // axios.get("https://jsonplaceholder.typicode.com/posts", {
        //     params: {_limit: 1}
        // })

        axios
            .get("https://jsonplaceholder.typicode.com/posts?_limit=1")
            .then(res => navigation.navigate(location, {data, resp: res}))
            .catch(err => console.error(err))
    },
    "POST": (navigation, location, data) => {
        //         axios({
        //     method: 'post',
        //     url: 'https://jsonplaceholder.typicode.com/posts',
        //     data: {
        //         title: 'New Todo',
        //         completed: false
        //     }
        // })
        //     .then(res => navigation.navigate(location, {data, resp: res}))
        //     .catch(err => console.error(err))

        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: 'New Todo',
            completed: false
        })
            .then(res => navigation.navigate(location, {data, resp: res}))
            .catch(err => console.error(err))
    },
    "PUT/PATCH": (navigation, location, data) => {
        //the id must be included in the url thats the 
        //the difference between post and put is that put replaces the entire thing, and patch just changes the fields
        axios.patch("https://jsonplaceholder.typicode.com/posts/1",{
            title: 'Updated Todo',
            completed: true
        })
            .then(res => navigation.navigate(location, {data, resp: res}))
            .catch(err => console.error(err))

    },
    "DELETE": (navigation, location, data) => {
        axios
            .delete("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => navigation.navigate(location, {data, resp: res}))
            .catch(err => console.error(err))
    },
    "Sim Request": (navigation, location, data) => {
        axios
            .all([
                axios.get("https://jsonplaceholder.typicode.com/posts?_limit=1"),
                axios.get("https://jsonplaceholder.typicode.com/todos")
            ])
            .then( res => {
                console.log(res[1])
                res[0],
                res[1]
                navigation.navigate(location, {data, resp: res})
            })
            .catch(err => console.error(err))
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