
// import api from './../assets/js/API'
import $BigNumber from "bignumber.js";
import bigInt from 'big-integer'
const utils = {

  // bigNumber 转换， 参数： （值、精度）,去掉精度、
  mathpow(data, num) {
    //精度
    var n1;
    if (!data) {
      n1 = $BigNumber(data);
    } else {
      n1 = $BigNumber(data.toString());
    }
    var n2 = $BigNumber(Math.pow(10, num ? num : 8));

    var res = n1.div(n2);
    return res.toString();
  },
  mathpow1(data, num) {
    let n1 = '';
    if (data) {
      n1 = data.toString()
    }
    if (n1.length > num) {
      const a = n1.slice(0, n1.length - num);
      const b = n1.slice(0 - num);
      return a + '.' + b
    } else {
      if (num == n1.length) {
        return '0.' + n1
      } else {
        const addZero = new Array(num - n1.length).fill(0).join('');
        return '0.' + addZero + n1
      }
    }
  },
  // 值 精度， 给值添加精度
  mathlog(data, num) {
    const res = data + '';
    if (res.includes('.')) {
      const resArray = res.split('.');
      let zero = new Array(num).fill(0);
      const one = resArray[0];
      const two = resArray[1];
      for (var i = 1; i <= two.length; i++) {
        zero.pop();
      }
      return one + two + zero.join('')
    }
    return data + new Array(num).fill(0).join('');
  },
  // 计算加法
  plus(a, b) {
    if (a !== '' && b !== '') {
      const n1 = bigInt(a);
      const n2 = bigInt(b);
      return (n1.add(n2)).toString()
    } else {
      return 0
    }
  },
  // 计算减法
  minus(a, b) {
    if (a != '' && b != '') {
      const n1 = bigInt(a);
      const n2 = bigInt(b);
      return (n1.subtract(n2)).toString()
    } else {
      return 0
    }
  },
  // 转为bignumber 计算乘法
  multiplication(a, b) {
    if (a != '' && b != '') {
      const n1 = bigInt(a);
      const n2 = bigInt(b);
      return (n1.multiply(n2)).toString()
    } else {
      return 0
    }
  },
  // 计算除法
  division(a, b) {
    if (a != '' && b != '') {
      const n1 = bigInt(a);
      const n2 = bigInt(b);
      return (n1.divide(n2)).toString()
    } else {
      return 0
    }
  },
  // 切换网络
  async switchNetwork(id) {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: '0x' + id
      }]
    })
  },
  // 网页钱包授权
  async linkWallet({ successFn, errorFn }) {
    if (window.ethereum) {
      try {
        const data = await window.ethereum.request({ method: 'eth_requestAccounts' });
        successFn(data);
      } catch (e) {
        errorFn(e)
      }
      setTimeout(() => {
        window.ethereum && window.ethereum.on("accountsChanged", function () {
          window.location.reload();
        });
        window.ethereum && window.ethereum.on("chainChanged", function () {
          window.location.reload();
        });
      }, 1000);
    }

  },
  // 处理数字
  dealNumber(num, fixed = 0) {
    if (num * 1 > 10000 && num % 10000 == 0) {
      return `${(num / 10000).toFixed()}万`
    }
    return (num * 1).toFixed(fixed)
  },
  // copy
  copy(url) {
    var input = document.createElement('input'); // 创建input标签，只有input标签选中可以
    input.setAttribute('id', 'copyInput'); // 给input一个id属性
    input.setAttribute('value', url); // 给input一个value属性，属性值是变量span的文本
    document.getElementsByTagName('body')[0].appendChild(input); // body里面添加input实体
    document.getElementById('copyInput').select(); // 使用js去通过id找到并执行input实体的全部选中
    document.execCommand("Copy"); //原生copy方法执行浏览器复制命令
    document.getElementById('copyInput').remove(); // 为避免下次页面添加copy方法 所以这里copy完之后要移除input实体
  },
  // 截断保留2位
  fixedNumber2(num) {
    let res = num + '';
    if (res.includes('.')) {
      const data = res.split('.');
      return data[0] + '.' + data[1].slice(0, 2)
    }
    return res
  },
  formatDate(time) {//时间戳转日期
    let date = new Date(time);
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? ('0' + MM) : MM;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + MM + '-' + d;
    // return y + '-' + MM + '-' + d;
  },
  getUrlRequest() {
    const url = window.location.href;
    const params = {};
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    let match;

    while (match = regex.exec(url)) {
      params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }

    return params;
  },

  openMeiQia(username, address) {
    const mqLangMap = {
      zh: "tw",
      en: "en",
      fr: "en",
      ja: "ja",
      kr: "ko",
      ru: "ru",
      th: "th",
      tr: "en",
      vi: "vi",
    };
    const localeLang = localStorage.getItem("NFTLANG");
    window._MEIQIA("language", mqLangMap[localeLang] || "en");
    window._MEIQIA("metadata", {
      name: username,
      address: address
    });
    window._MEIQIA("showPanel");
  }
}
export default Object.freeze(utils)