import axios from "axios"
const http = axios.create({
    timeout:5000
})

const get = () => {
    // return http.get({
    //     url:object.url,
    //     method:"get"
    // })
}
export default {
    install(app) {
        app.$get = get
    }
}