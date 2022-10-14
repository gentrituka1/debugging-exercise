const defaultLang: Lang = "en";
export const strings = {
  en: {
    products_title: "Here's all our products!",
    more: "More...",
    errorHeader: "ERROR:",
  },
  fr: {
    products_title: "Here's all our products!",
    more: "More...",
    errorHeader: "ERROR:",
  },
};

type Obj = typeof strings;
type Lang = keyof typeof strings;
type Key = keyof typeof strings[Lang];

export function getKey<T extends Lang>(key: Key, lang?: T): Obj[T][Key] {
  if (!lang) return strings[defaultLang][key];

  return strings[lang][key];
}

export const gK = getKey;
