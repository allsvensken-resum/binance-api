import axios from "axios"
import config from "config"

const instance = axios.create({
    baseURL: config.get("resource") as string,
    timeout: 5000
})

instance.defaults.headers.post["X-BTK-APIKEY"] = config.get("api_key")
instance.defaults.headers.post["Content-Type"] = "application/json"
instance.defaults.headers.post["Accept"] = "application/json"
export default instance