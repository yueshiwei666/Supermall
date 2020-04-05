import { request, requests } from "./request";

export function homedata() {
  return request({
    url: "/home/multidata"
  });
}

export function homedata2(type, page) {
  return requests({
    //http://106.54.54.237:8000/api/h3/home/data?type=sell&page=1
    url: "/home/data",
    params: {
      type: type,
      page: page
    }
  });
}
