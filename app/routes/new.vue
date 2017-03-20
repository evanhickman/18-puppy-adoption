<template lang="html">
  <div class="">
    <h1>Found a Lost Puppy? We Can Help!</h1>
    <form @submit.prevent="submit">
      <p class="input-name">Name</p>
      <p>
        <input type="text" v-model="formValues.name" class="input">
      </p>
      <p class="input-name">Age</p>
      <p>
        <input type="text" v-model="formValues.age" class="input">
      </p>
      <p class="input-name">Sex</p>
      <p>
        <input type="text" v-model="formValues.sex" class="input">
      </p>
      <p class="input-name">Color</p>
      <p>
        <input type="text" v-model="formValues.color" class="input">
      </p>
      <p class="input-name">Breed</p>
      <p>
        <input type="text" v-model="formValues.breed" class="input">
      </p>
      <p class="input-name">Image URL</p>
      <p>
        <input type="text" v-model="formValues.image_url" class="input">
      </p>
      <p class="input-name">description</p>
      <p>
        <textarea type="text" v-model="formValues.description" class="textarea"></textarea>
      </p>
      <p class="action-buttons">
        <router-link :to="{ name: 'index' }" class="button">Back</router-link>
        <button class="button is-info" type="submit">Submit</button>
      </p>
    </form>
  </div>
</template>

<script>
import store from '../store';
import { create } from '../actions/puppy';
export default {
  name: 'New',
  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        image_url: '',
        description: '',
      },
    };
  },

  methods: {
    submit() {
      store.dispatch(create(this.formValues)).then(() => {
        this.$router.push({ name: 'index' });
      });
    },
  },
};
</script>
