import { createI18n } from 'vue-i18n';
import zh from "../../lang/zh.js";
import en from "../../lang/en.js";

let locale_lang = 'en'
if (localStorage.getItem("NFTLANG")) {
  locale_lang = localStorage.getItem("NFTLANG");
} else {
  localStorage.setItem("NFTLANG", locale_lang);
}
const i18n = createI18n({
  legacy: false,
  locale: locale_lang,  // 设置默认语言
  fallbackLocale: 'en', // 如果当前语言不存在，使用备选语言
  messages: {
    zh,   // 中文语言包
    en,   // 英文语言包
  }
});

export default i18n;