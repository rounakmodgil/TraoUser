import axios from "axios";
import AxiosInstance from "./axiosInstance";
import {getAppToken} from "../util/token";

AxiosInstance.addBaseUrlToAxiosInstance();

export const loginUser = async (userName, password) => {
  return AxiosInstance.instance.post("/Authentication", {
    username: userName,
    password: password,
  }).then((res)=>{ return res});
  
};

export const getTraoMart = async () => {
  const res = await AxiosInstance.instance.get("/Traomart/getShoplists");
  return res.data.data;
};

export const getTraoMartCategories = async (shopId) => {
  const res = await AxiosInstance.instance.get("/Traomart/getCategories", {
    shopid: shopId,
  });
  return res.data.data;
};

export const getTraoMartSubCategories = async (shopId, categoryId) => {
  return await AxiosInstance.instance.get("/Traomart/getSubCategories", {
    shopid: shopId,
    category_id: categoryId,
  });
};

export const getTraoMartProducts = async (
  shopId,
  categoryId,
  subcategoryId
) => {
  return await AxiosInstance.instance.get("/Traomart/getProducts ", {
    shopid: shopId,
    category_id: categoryId,
    subcategory_id: subcategoryId,
  });
};

export const getOwnShop = async (
) => {
    const res = await AxiosInstance.instance.get("/Traomart/getownShoplists");
    return res.data.data;
};

export const getOwnShopCategories = async (shopId) => {
    const res = await AxiosInstance.instance.get("/Traomart/getownShopCategories", {
      shopid: shopId,
    });
    return res.data.data;
};

export const getOwnShopSubCategories = async (shopId, categoryId) => {
    return await AxiosInstance.instance.get("/Traomart/getownShopSubCategories", {
      shopid: shopId,
      category_id: categoryId,
    });
};

export const getOwnShopProducts = async (
    shopId,
    categoryId,
    subcategoryId
  ) => {
    return await AxiosInstance.instance.get("/Traomart/getownShopProducts ", {
      shopid: shopId,
      category_id: categoryId,
      subcategory_id: subcategoryId,
    });
};

export const getScheduleBookingCategories = async (latitude, longitude, location, city) => {
    const res = await AxiosInstance.instance.post("/Traomart/getSchedulebookingCategories", {
     latitude:latitude,
     longitude:longitude,
     location:location,
     city:city,
    });
    return res.data.data;
};

export const getScheduleBookingSubCategories = async (latitude, longitude, location, city, categoryId) => {
    const res = await AxiosInstance.instance.post("/Traomart/getSchedulebookingSubCategories", {
     latitude:latitude,
     longitude:longitude,
     location:location,
     city:city,
     category_id:categoryId
    });
    return res.data.data;
};

export const getScheduleBookingProducts = async (
    latitude, longitude, location, city, categoryId, subcategoryId
  ) => {
    return await AxiosInstance.instance.post("/Traomart/getSchedulebookingProducts ", {
        latitude:latitude,
        longitude:longitude,
        location:location,
        city:city,
        category_id:categoryId,
        subcategory_id:subcategoryId
    });
};

export const getProductsFromCart = async (
   deviceId
  ) => {
    return await AxiosInstance.instance.post("/Traomart/showcart", {
        device_id:deviceId
    });
};

export const addProductsToCart = async (
    latitude,longitude, location, city, categoryId,subcategoryId, productId,shopId,quantity, deviceId
  ) => {
    return await AxiosInstance.instance.post("/Traomart/addtocart ", {
        latitude:latitude,
        longitude:longitude,
        location:location,
        city:city,
        category_id:categoryId,
        subcategory_id:subcategoryId,
        product_id:productId,
        shopid:shopId,
        quantity:quantity,
        device_id:deviceId
    });
};

export const sendDeviceToken  = async (
  deviceId
 ) => {
   const token=await getAppToken();
   AxiosInstance.addAuthTokenToAxiosInstance(token);
   

   return await AxiosInstance.instance.post("/Traomart/senddevicetoken", {
       device_id:deviceId
   });
};