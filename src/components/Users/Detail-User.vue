<template>
  <div class="container" v-if="user">
    <PageTitle title="User Detail"></PageTitle>
    <section>
      <span>Personal Information</span>
      <div class="row">
        <label>Firstname: </label>
        <label>{{ user.firstName }}</label>
      </div>
      <div class="row">
        <label>Lastname: </label>
        <label>{{ user.lastName }}</label>
      </div>
      <div class="row">
        <label>Email: </label>
        <label>{{ user.email }}</label>
      </div>
    </section>
    <section>
      <span>General Information</span>
      <div class="row">
        <label>Id: </label>
        <label>{{ user.id }}</label>
      </div>
      <div class="row">
        <label>Personal Number: </label>
        <label>{{ user.personalNumber }}</label>
      </div>
    </section>
    <section>
      <span>Functional Information</span>
      <div class="row">
        <label>Line: </label>
        <label>{{ user.line }}</label>
      </div>
      <div class="row">
        <label>Role: </label>
        <label>{{ user.role }}</label>
      </div>
    </section>
  </div>
</template>

<script>
import * as axios from "axios";
import PageTitle from "@/components/Shared/PageTitle";

export default {
  name: "Detail-User",
  components: {PageTitle},
  data() {
    return {
      user: undefined,
    }
  },
  mounted() {
    const userId = this.$route.params.id;
    axios
        .get(`https://localhost:5001/api/users/${userId}`)
        .then(response => this.user = response.data)
        .catch(() => {
          this.user = {
            id: 'id',
            personalNumber: '123456',
            role: 'admin',
            firstName: 'Firstname',
            lastName: 'Lastname',
            line: 'Line',
            email: 'firstname.lastname@mail.com'
          }
        })
  }
}
</script>

<style scoped>
.container {
  margin-top: 10rem;
}

.row {
  display: flex;
  padding: .5rem;
}

section span {
  display: block;
  margin: 1.5rem 0;
  font-size: 2.5rem;
  font-weight: 400;
}

.row label {
  color: #4c4d4d;
  font-size: 1.6rem;
}

.row label:first-child {
  padding: 0 1rem;
  font-weight: 600;
}
</style>
