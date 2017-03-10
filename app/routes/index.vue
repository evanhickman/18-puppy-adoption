<template lang="html">
  <div class="">
    <div class="level">
      <div class="level-left">
        <h1>Friends for Adoption</h1>
      </div>

      <div class="level-right">
        <router-link :to="{ name: 'new' }" class="button is-info add-button">Add a Friend</router-link>
      </div>
    </div>
    <table class="table">
    <thead>
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Geraldine Beane</td>
        <td>4</td>
        <td><router-link :to="{ name: 'detail' }">Read More</router-link></td>
      </tr>
    </tbody>
    </table>
    <div class="level">
      <div class="level-left">
        <h1>Adopted Friends</h1>
      </div>
    </div>
        <table class="table">
        <thead>
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Geraldine Beane</td>
            <td>4</td>
            <td><router-link :to="{ name: 'detail' }">Read More</router-link></td>
          </tr>
          <tr>
            <td>Geraldine Beane</td>
            <td>4</td>
            <td><router-link :to="{ name: 'detail' }">Read More</router-link></td>
          </tr>
          <tr>
            <td>Geraldine Beane</td>
            <td>4</td>
            <td><router-link :to="{ name: 'detail' }">Read More</router-link></td>
          </tr>
          <tr>
            <td>Geraldine Beane</td>
            <td>4</td>
            <td><router-link :to="{ name: 'detail' }">Read More</router-link></td>
          </tr>
        </tbody>
        </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {

  },
};
</script>
