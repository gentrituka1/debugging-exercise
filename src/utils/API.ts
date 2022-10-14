import createCrud from "accumulated-helpers/utils/useRestCrud";

const API = "https://dummyjson.com/products";

/*
  Creates a full simple CRUD - yep, we built this monster together in a session a month ago 😊
*/
export const { getAll } = createCrud(API);


