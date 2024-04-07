import { ref } from "vue";
const counterfunction = () => {
  const counter = ref(0);

  const increase = () => {
    counter.value++;
  };

  const decrease = () => {
    if (counter.value >= 0) {
      counter.value--;
    }
  };
  // return
  return { counter, increase, decrease };
};
export default counterfunction;
