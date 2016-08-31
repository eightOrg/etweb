/**
 * Created by Administrator on 2016/8/31.
 */
var api = {
    "server": "http://127.0.0.1",
    "port": "8888"
}
function getApiPath(request) {
    return api.server + ":" + api.port + "/" + request ;
}