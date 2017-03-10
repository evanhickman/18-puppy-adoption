<template lang="html">
  <div class="app">
    <nav class="nav">
      <div class="nav-left is-brand">
        <a href="#" class="nav-item">Puppies</a>
      </div>
      <div class="nav-right">
        <a href="#" class="nav-item">
          <p>All Puppies</p>
        </a>
        <a href="#" class="nav-item">
          <p>Add Puppy</p>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../actions/puppy';


export default {
  data() {
    return {
      puppies: this.$select('puppies'),
    };
  },

  // created() {
  //   store.dispatch(findAll());
  // },

  methods: {

  },
};
</script>
