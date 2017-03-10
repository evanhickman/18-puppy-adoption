<template lang="html">
  <div class="">
      <p class="title has-text-centered">
        Geraldine Beane
        <span class="button is-success"><i class="fa fa-paw fa-fw" aria-hidden="true"></i> I'm Adopted</span>
      </p>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <div class="card is-fullwidth">
            <div class="card-image">
              <figure class="image">
                <img src="http://placehold.it/350x350" alt="puppy photo">
              </figure>
            </div>
          </div>
        </div>
      </div>
      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <p class="heading">Age</p>
          <p class="title">4</p>
        </div>
        <div class="level-item has-text-centered">
          <p class="heading">Breed</p>
          <p class="title">Hound</p>
        </div>
        <div class="level-item has-text-centered">
          <p class="heading">Color</p>
          <p class="title">Brown</p>
        </div>
        <div class="level-item has-text-centered">
          <p class="heading">Sex</p>
          <p class="title">Female</p>
        </div>
      </nav>
      <div class="card is-fullwidth">
        <div class="card-content">
          <h3 class="subtitle">About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, repellat officiis ea rem voluptate quod possimus non sit enim ipsa laboriosam, esse impedit totam, fugit eius temporibus, sint omnis nisi!
          </p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        imageUrl: '',
        description: '',
      },
    };
  },

  methods: {

  },
};
</script>
