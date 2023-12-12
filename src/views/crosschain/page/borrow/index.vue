<template>
  <div class="container-xl">
   <div class="w-[20rem] h-[4rem] bg-red-300 mt-16" @click="link">link</div>
   <div>{{ addr }}</div>
   <div class="w-[20rem] h-[4rem] bg-red-300 mt-16" @click="send">send</div>
  </div>
</template>

<script>
import {preorder,crorder} from '../../../../api/api'
export default {
  data() {
    return {
      addr: '',

    }
  },
  methods: {
    async link() {
      console.log(window.unisat)
      try {
        let accounts = await window.unisat.requestAccounts();
        console.log('connect success', accounts);
        this.addr = accounts[0]
      } catch (e) {
        console.log('connect failed');
      }
    },
    async send() {
      
      const res = await preorder({
        "from_chain":"btc",
        "to_chain": "eth",
        "from_address": 'bc1pa4vs6fe9cwlfm9daukhws032gdpzce0zpfykq3qkng37x7l8s88sjrm6uh',
        "to_address": "0x9B861f4B0D3C7E9977801578C91F0855a9199D78",
        "token": "TTIN",
        "amount": 500
      });
      console.log('@@@@@@@',res)
      const data = res.data;
      const hex = await window.unisat.signPsbt(data.psbt_hex,data.toSignInputs);
      console.log(hex)
      const txid = await unisat.pushPsbt(hex);
      const res1 = await crorder({
        order_id:data.order_id,
        "txid": txid,
        "from_chain":"btc",
        "to_chain": "eth",
        "from_address": "bc1pa4vs6fe9cwlfm9daukhws032gdpzce0zpfykq3qkng37x7l8s88sjrm6uh",
        "to_address": "0x9B861f4B0D3C7E9977801578C91F0855a9199D78",
        "token": "TTIN",
        "amount": 20
      });
      console.log('@@@order_id',res1)
      this.updateList();
    },
    updateList() {}
  }
}
</script>
<style scoped>
</style>