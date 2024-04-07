<template>
  <div>
    <h1>Add New Todos</h1>
    <form action="" @submit.prevent="addTodo">
      <input
        type="text"
        placeholder="Add New Todo"
        v-model="todoObject.text"
        required
      /><br />
      <input
        type="date"
        placeholder="From"
        v-model="todoObject.from"
        required
      />
      <input
        type="date"
        placeholder="To"
        v-model="todoObject.to"
        required
      /><br />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>
<!-- Start Vue Code -->

<script setup>
import { ref, onMounted } from "vue";
// هعمل بوش للوبجيكت ده ف الاراى
const todolist = ref([]);
const todoObject = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  isCompleted: false,
  // eslint-disable-next-line prettier/prettier
  createdAt: ""
});
// Our Methods

//  اول ميثود هعملها بتعمل بوش للاوبجيكت بتاعى للاراى الفاضيه
// واضيف تاريخ الاضافه
// وافرغ الاوبجيكت بعد السبميت
const addTodo = () => {
  todoObject.value.id = todolist.value.length + 1;
  todoObject.value.createdAt = new Date();
  todolist.value.push(todoObject.value);
  addToLocalStorage();
  alert("Todo Was Add Successfully");
  todoObject.value = {
    id: "",
    text: "",
    from: "",
    to: "",
    isCompleted: false,
    // eslint-disable-next-line prettier/prettier
    createdAt: ""
  };
  console.log(todolist.value);
};

// هعمل فنكشن لللوكال ستوريج وعملها فاير ف الداله اللى فوق
const addToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todolist.value));
};
// هعمل فنكشن علشان اللوكال استوريج تفضل محتفظه بالداتا مهما عمل ريفرش للصفحه
// وهخليها ت فاير وقت الماونتت
const UpdateTodos = () => {
  if (localStorage.getItem("todos")) {
    todolist.value = JSON.parse(localStorage.getItem("todos"));
  }
};
//  فنكشن الماونتت للابديت
onMounted(() => {
  UpdateTodos();
});
</script>
<!-- End Vue Code -->

<!-- Start Our Styles -->
<style lang="scss" scoped>
form {
  input[type="text"] {
    width: 50%;
    padding: 10px 0;
    font-size: 20px;
    outline: none;
  }
  input[type="submit"] {
    width: 200px;
    padding: 10px 20px;
    font-size: 20px;
    background-color: rgb(3, 107, 98);
    color: #fff;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
  }
  input[type="date"] {
    margin: 15px;
  }
}
</style>
<!-- End Our Styles -->
