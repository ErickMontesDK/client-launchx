<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Commanders Inscritos </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(commander, index) in commanders"
          :key="index"
          @click="setActiveCommander(commander, index)"
        >
          {{ commander.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentCommander">
        <h4>Commander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentCommander.name}}
          <br><label><strong>Username:</strong></label> {{ currentCommander.username}}
          <br><label><strong>MainStack:</strong></label> {{ currentCommander.mainStack}}
        </div>
        <router-link :to="'/commander/' + currentCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un commander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import CommanderService from "../services/CommanderService";

export default {
  name: "commander-list",
  data() {
    return {
      tutorials: [],
      commanders: [],
      currentTutorial: null,
      currentCommander: null,
      currentIndex: -1,
      title: "",
      commanderId: ""
    };
  },
  methods: {
    getAllCommanders(){
      CommanderService.getAll()
        .then(response => {
          this.commanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActivecommander(commander, index) {
      this.currentCommander= commander;
      this.currentIndex = commander? index : -1;
    }
  },
  mounted() {
    this.getAllCommanders();
  }
};
</script>
