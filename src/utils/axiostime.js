export default (instance, callback) => {
    instance.interceptors.request.use(function(request){
        request.ts = performance.now()
        return request
    })

    instance.interceptors.response.use(function(response){
        callback(Number(performance.now() - response.config.ts))
        return response
    })
}