import Vue from "vue";
import Component from "vue-class-component";

function broadcastOut(
  this: any,
  componentName: string,
  eventName: string,
  args: any
) {
  this.$children.forEach((child: Vue) => {
    const name = child.$options.name;
    if (name === componentName) {
      child.$emit.apply(child, [eventName, args]);
    } else {
      broadcastOut.call(child, componentName, eventName, args);
    }
  });
}
@Component
export class Emiter extends Vue {
  broadcast(componentName: string, eventName: string, args: any) {
    broadcastOut.call(this,componentName, eventName, args);
  }

  dispatch(componentName: string, eventName: string, args: any) {
    let parent = this.$parent || this.$root;

    while (parent) {
      if (parent.$options.name === componentName) {
        parent.$emit.apply(parent, [eventName, args]);
        break;
      } else {
        parent = parent.$parent;
      }
    }
  }
}
