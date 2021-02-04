<template>
  <button >{{ buttonName }}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  inject: ["name"],
  name: "myButton"
})
export default class Home extends Vue {
  @Prop()
  protected buttonName!: string;
  
 
  created() {
    this.$on("on-message",(msg: string) => {alert(msg)});
  }

  handleClick() {
    this.$emit("move", "barry song");
  }
}
</script>
