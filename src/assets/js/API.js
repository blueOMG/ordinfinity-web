
let data = {
  USDT_Addr: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  // chain id
  chainId: 1, // 测试网 97  主网 56,
  // api url
  apiUrl: process.env.NODE_ENV === 'production' ? 'https://nft-uni.com/api' : 'https://nft-uni.com/api',
  langMap: {
    zh: "zh_CN",
    en: "en_US",
    fr: "fr_CA",
    ja: "ja_JP",
    kr: "ko_KR",
    ru: "ru_RU",
    th: "th_TH",
    tr: "tr_TR",
    vi: "vi_VN",
  },
}


export default data