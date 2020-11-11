<template lang="html">
  <div class="row justify-content-center">
    <div class="col-5">
      <form>
        <div class="form-group">
          <label for="firstNameInput">First Name</label>
          <input
            id="firstNameInput"
            type="text"
            class="form-control"
            aria-describedby="firstNameHelp"
          >
          <small
            id="firstNameHelp"
            class="form-text text-muted"
          >You need to enter your first name here</small>
        </div>
        <div class="form-group">
          <label for="lastNameInput">Last Name</label>
          <input
            id="lastNameInput"
            type="text"
            class="form-control"
            aria-describedby="lastNameHelp"
          >
        </div>
        <div class="form-group">
          <label for="emailInput">Email</label>
          <input
            id="emailInput"
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
          >
        </div>
        <div class="form-group">
          <label for="usernameInput">Username</label>
          <input
            id="usernameInput"
            type="text"
            class="form-control"
            aria-describedby="usernameHelp"
          >
        </div>
        <div class="form-group">
          <label for="passwordInput">Password</label>
          <input
            id="passwordInput"
            type="password"
            class="form-control"
            aria-describedby="firstNameHelp"
          >
        </div>
        <button
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="js">

export default {
  name: 'Signup',

  props: [],
  data() {
    return {

    };
  },
  computed: {

  },

  mounted() {

  },
  methods: {

  },
};

</script>

<style scoped lang="scss">
  .signup {

  }
</style>
