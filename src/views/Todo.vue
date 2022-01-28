<template>
  <div class="home">
    <v-list class="pt-0" flat>
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
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>
<script>
export default {
  name: "Todo",
  components: {},
  data() {
    return {
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
  },
};
</script>
<style>
</style>