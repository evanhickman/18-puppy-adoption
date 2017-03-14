<template lang="html">
  <div class="">
      <div v-if="currentPuppy">
        <p class="title has-text-centered">
          {{ currentPuppy.name }}
          <a v-on:click.prevent="adoptMe" href="#" class="button is-primary" v-bind:class="{'is-success': currentPuppy.adopted }">
            <span><i class="fa fa-paw fa-fw" aria-hidden="true"></i></span>
            <span v-if="currentPuppy.adopted"> I'm Adopted!</span>
            <span v-else>Adopt Me!</span>
          </a>
        </p>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="card is-fullwidth">
              <div class="card-image">
                <figure class="image">
                  <img :src="currentPuppy.image_url" alt="puppy photo">
                </figure>
              </div>
            </div>
          </div>
        </div>
        <nav class="level is-mobile">
          <div class="level-item has-text-centered">
            <p class="heading">Age</p>
            <p class="title">{{currentPuppy.age}}</p>
          </div>
          <div class="level-item has-text-centered">
            <p class="heading">Breed</p>
            <p class="title">{{currentPuppy.breed}}</p>
          </div>
          <div class="level-item has-text-centered">
            <p class="heading">Color</p>
            <p class="title">{{currentPuppy.color}}</p>
          </div>
          <div class="level-item has-text-centered">
            <p class="heading">Sex</p>
            <p class="title">{{currentPuppy.sex}}</p>
          </div>
        </nav>
        <div class="card is-fullwidth">
          <div class="card-content">
            <h3 class="subtitle">About Me</h3>
            <p>{{currentPuppy.description}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import store from '../store';
import { findOne, toggleAdopted } from '../actions/puppy.js';

export default {
  name: 'Detail',
  data() {
    return {
      currentPuppy: {},
      puppies: this.$select('puppies'),
    };
  },

  mounted() {
    store.dispatch(findOne(this.$route.params.id));
  },

  watch: {
    puppies: 'getPuppy',
    '$route.params.id': 'getPuppy',
  },

  methods: {
    getPuppy() {
      this.currentPuppy = this.puppies.find(puppy => puppy.id == this.$route.params.id);
    },

    adoptMe() {
      store.dispatch(toggleAdopted(this.currentPuppy));
    }
  },
};
</script>
