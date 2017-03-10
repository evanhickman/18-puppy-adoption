<template lang="html">
  <div class="app">
    <nav class="nav">
      <div class="nav-left is-brand">
        <router-link :to="{ name: 'index' }" class="nav-item">Puppies</router-link>
      </div>
      <div class="nav-right">
        <router-link :to="{ name: 'index' }" class="nav-item">All Puppies</router-link>
        <router-link :to="{ name: 'new' }" class="nav-item">Add Puppy</router-link>
      </div>
    </nav>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <nav class="panel">
              <p class="panel-heading">
                Adopt a Friend
              </p>
              <div class="panel-block">
                <article class="media">
                  <figure class="media-left">
                    <p class="image">
                      <img src="http://bulma.io/images/placeholders/64x64.png">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <div>Geraldine Beane</div>
                      <!-- TODO: Update this to add id params -->
                      <router-link :to="{ name: 'detail' }"><small>Read More</small></router-link>
                    </div>
                  </div>
                </article>
              </div>
              <div class="panel-block">
                <article class="media">
                  <figure class="media-left">
                    <p class="image">
                      <img src="http://bulma.io/images/placeholders/64x64.png">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <div>Geraldine Beane</div>
                      <!-- TODO: Update this to add id params -->
                      <router-link :to="{ name: 'detail' }"><small>Read More</small></router-link>
                    </div>
                  </div>
                </article>
              </div>
              <div class="panel-block">
                <article class="media">
                  <figure class="media-left">
                    <p class="image">
                      <img src="http://bulma.io/images/placeholders/64x64.png">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <div>Geraldine Beane</div>
                      <!-- TODO: Update this to add id params -->
                      <router-link :to="{ name: 'detail' }"><small>Read More</small></router-link>
                    </div>
                  </div>
                </article>
              </div>
              <div class="panel-block">
                <article class="media">
                  <figure class="media-left">
                    <p class="image">
                      <img src="http://bulma.io/images/placeholders/64x64.png">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <div>Geraldine Beane</div>
                      <!-- TODO: Update this to add id params -->
                      <router-link :to="{ name: 'detail' }"><small>Read More</small></router-link>
                    </div>
                  </div>
                </article>
              </div>
              <div class="panel-block">
                <article class="media">
                  <figure class="media-left">
                    <p class="image">
                      <img src="http://bulma.io/images/placeholders/64x64.png">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <div>Geraldine Beane</div>
                      <!-- TODO: Update this to add id params -->
                      <router-link :to="{ name: 'detail' }"><small>Read More</small></router-link>
                    </div>
                  </div>
                </article>
              </div>
              <div class="panel-block">
                <article class="media">
                  <figure class="media-left">
                    <p class="image">
                      <img src="http://bulma.io/images/placeholders/64x64.png">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <div>Geraldine Beane</div>
                      <!-- TODO: Update this to add id params -->
                      <router-link :to="{ name: 'detail' }"><small>Read More</small></router-link>
                    </div>
                  </div>
                </article>
              </div>
              </div>
              <div class="column is-two-thirds">
                <router-view></router-view>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import {
  findAll
} from '../actions/puppy';


export default {
  name: 'Application',
  data() {
    return {
      puppies: this.$select('puppies'),
    };
  },

  created() {
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
