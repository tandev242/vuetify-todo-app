<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add new task"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>
    <v-list v-if="tasks.length" class="pt-0" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="handleDoneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-btn @click.stop="deleteTask(task.id)" icon>
                <v-icon color="red lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div v-else class="no-tasks text-h5 primary--text">No tasks</div>
  </div>
</template>
<script>
export default {
  name: "Todo",
  components: {},
  data() {
    return {
      newTaskTitle: "",
      tasks: [
        {
          id: 1,
          title: "Wake up",
          done: false,
        },
        {
          id: 2,
          title: "Get bananas",
          done: false,
        },
        {
          id: 3,
          title: "Coding",
          done: false,
        },
      ],
    };
  },
  methods: {
    handleDoneTask(id) {
      let task = this.tasks.find((task) => task.id == id);
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id != id);
    },
    addTask() {
      if (this.newTaskTitle) {
        let newTask = {
          id: Date.now(),
          title: this.newTaskTitle,
          done: false,
        };
        this.tasks.push(newTask);
        this.newTaskTitle = "";
      }
    },
  },
};
</script>
<style>
.no-tasks {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>