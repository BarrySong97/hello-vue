<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App">
      <my-button v-on:click="handleClick" buttonName="emit"></my-button>
      <button v-on:click="handleClick">test</button>
      <h1 slot="nameSlot">name slot</h1>
    </HelloWorld>
  </div>
</template>

<script lang="ts">
import MyButton from "@/components/MyButton.vue";
import { Component, Vue, Mixins } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Emiter } from "@/utils/Emiter.ts";

@Component({
  components: {
    HelloWorld,
    MyButton,
  },
  provide: {
    name: "barry",
  },
  methods: {},
})
export default class Home extends Mixins(Emiter) {
 
  handleClick() {
    
    this.broadcast("myButton", "on-message", "hello");
  }
}
</script>
