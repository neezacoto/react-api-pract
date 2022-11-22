import axios from "axios"

//axios globals
axios.defaults.headers.common['X-Auth-Token'] = '>>>>>>>myFakeToken_Christian'

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
            .get("https://jsonplaceholder.typicode.com/posts?_limit=1", {timeout: 5000})
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

            //I could have done 
            // .then( axios.spread((todos, posts) => ...)
            //this gives variable names to instead of an array in the same order
    },
    "Custom Headers": (navigation, location, data) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'sometoken'
            }
        }
        
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: 'New Todo',
            completed: false
        }, config)
            .then(res => navigation.navigate(location, {data, resp: res}))
            .catch(err => console.error(err))
    },
    "Transform": (navigation, location, data) => {
        const options = {
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts?_limit=1',
            data: {
                title: "hello World"
            },
            transformResponse: axios.defaults.transformResponse.concat(data => {
                data.title = data.title.toUpperCase();
                return data;
            })
        }

        axios(options).then(res => navigation.navigate(location, {data, resp: res}))
    },
    "Error Handling": (navigation, location, data) => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts404uhh", {
                validateStatus: status => status >= 400
            })
            .then(res => navigation.navigate(location, {data, resp: res}))
            .catch(err => {
                console.log(err)
                if(err.response) {
                    console.log(err)
                    //server responded with a status other than 200 range
                    navigation.navigate(location, {data, resp: err.response})
                } else if(err.request) {
                    //Request made but no response
                    console.error(err.request)
                } else {
                    console.error(err.message)
                }
            })
    },
    "Cancel": (navigation, location, data) => {
        const source = axios.CancelToken.source();
        
        axios
            .get("https://jsonplaceholder.typicode.com/posts?_limit=1", {
                cancelToken: source.token
            })
            .then(res => navigation.navigate(location, {data, resp: res}))
            .catch(thrown => {
                if(axios.isCancel(thrown)) {
                    console.log("Request canceled", thrown.message)
                }
            })

            if(true) {
                source.cancel('Request canceled!');
            }
    },

}
//if logging was needed
const logger = () => {
    axios.interceptors.request.use(
        config => {
            console.log(
                `${config.method.toUpperCase()} request sent to ${
                    config.url
                } at ${new Date().getTime()}`
            )

            return config
        },
        error=> {
            return Promise.reject(error)
        }
    )
}
//INSTANCES
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

/**
 * axiosInstance.get('/comments').then(res => ...)
 */

/**
 * additionally I could have used the await async functions but this is good practice
 */

export default pracApi;