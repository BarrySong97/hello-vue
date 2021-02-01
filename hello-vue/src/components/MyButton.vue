<template>
  <button @click="handleClick">{{buttonName}}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  methods: {
    handleClick(event) {
      this.$emit("move", event);
    },
  },
})
export default class Home extends Vue {
    @Prop()
    protected buttonName!: string;
}
</script>
