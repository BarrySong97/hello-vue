<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" >
      <my-button @move="handleClick" buttonName="emit"></my-button>
      <h1 slot="nameSlot">name slot</h1>
    </HelloWorld>
  </div>
</template>

<script lang="ts">
import MyButton from "@/components/MyButton.vue";
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    MyButton
  },
  methods: {
    handleClick(){
      alert("emit success")
      
    }
  }
})
export default class Home extends Vue {}
</script>
