<template>
  <div class="show-todos">
    <h1>Our Saved To DoList</h1>
    <!-- هعمل جدول استقبل فيه الداتا -->
    <table v-if="todolist.length > 0">
      <thead>
        <tr>
          <th>Number</th>
          <th>Text</th>
          <th>From</th>
          <th>To</th>
          <th>CreatedAt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todolist"
          :key="todo.id"
          :style="`${
            todo.isCompleted
              ? 'background:rgb(0, 120, 212);color:#fff'
              : 'background:transparent'
          }`"
        >
          <td>{{ todo.id }}</td>
          <td>{{ todo.text }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleString() }}</td>
          <td>
            <div>
              <button class="completed" @click="markcomplet(todo)">
                {{ todo.isCompleted ? "Completed" : "IS Pending" }}
              </button>
              <button class="Remove" @click="deletetodo(index)">Remove</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h1 v-else>No Todos To Show</h1>
  </div>
</template>

<script setup>
// اول حاجه هعمل داله تشيك على اللوكال بحيث تجيب الداتا منها
import { ref, onMounted } from "vue";
const todolist = ref([]);
const UpdateTodos = () => {
  if (localStorage.getItem("todos")) {
    todolist.value = JSON.parse(localStorage.getItem("todos"));
  }
  console.log(todolist.value);
};

// هعملها مونتت
onMounted(() => {
  UpdateTodos();
});

// هعمل داله للحذف
const deletetodo = (index) => {
  todolist.value.splice(index, 1);
  addToLocalStorage();
};
// هعمل برضو داله اللوكال علشان لما احذف واعمل ريفرش ميرجعش تانى
const addToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todolist.value));
};
// داله الاكتمال
const markcomplet = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  // هضيف بعدها برضو داله اللوكال للتحديث
  addToLocalStorage();
};
</script>

<!-- Css Styling -->
<style lang="scss" scoped>
table {
  font-size: 17px;
  font-weight: bold;
  width: 100%;
  border: 1px solid #ddd;
  td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  th {
    padding: 10px;
    border: 1px solid #ddd;
    background: #fff;
  }
}
button {
  padding: 5px;
  cursor: pointer;
  margin-left: 3px;
  font-size: 17px;
  border: 1px solid #0a4d47;
  border-radius: 5px;
  &.completed {
    background: indianred;
    color: #fff;
  }
  &.Remove {
    background: #0a4d47;
    color: #fff;
  }
}
</style>
