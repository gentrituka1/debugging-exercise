import createCrud from "accumulated-helpers/utils/useRestCrud";

const API = "https://dummyjson.com/products";

export const { getAll, getSingle, post } = createCrud(API);
