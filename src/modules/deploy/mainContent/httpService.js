// import axios from "axios";
const Jsonp = window.Jsonp;
export const getTaobaoProductData = function (itemNumId) {
    const timeout = 5000;
    let param = {
        AntiCreep: true,
        H5Request: true,
        type: "jsonp",
        dataType: "jsonp",
        data: `{"itemNumId":"${itemNumId}","detail_v":"3.3.2"}`
    };
    let jsonpUrl =
        "https://acs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/";
    return Jsonp(jsonpUrl, {
        ...param,
        timeout
    });
};