<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Commander</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="commander.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="commander.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">mainStack</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="commander.mainStack"
          name="mainStack"
        />
      </div>
      <button @click="saveCommander" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Explorer creado exitosamente. </h4>
      <button class="btn btn-success" @click="newCommander">Add</button>
    </div>
  </div>
</template>

<script>
import CommanderService from "../services/CommanderService";
export default {
  name: "add-commander",
  data() {
    return {
      commander: {
        id: null,
        name: "",
        username: "",
        mainStack: ""
      },
      submitted: false
    };
  },
  methods: {
    saveCommander() {
      var data = {
        name: this.commander.name,
        username: this.commander.username,
        mainStack: this.commander.mainStack
      };
      CommanderService.create(data)
        .then(response => {
          this.commander.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newCommander() {
      this.submitted = false;
      this.commander = {};
    }
  }
};
</script>
