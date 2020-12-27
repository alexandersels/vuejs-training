<template>
  <div class="container">
    <PageTitle title="Users Detail"></PageTitle>
    <label>Firstname</label>
    <label>{{ user.firstName }}</label>
    <label>Lastname</label>
    <label>{{ user.lastName }}</label>
    <label>Email</label>
    <label>{{ user.email }}</label>
    <label>Id</label>
    <label>{{ user.id }}</label>
    <label>Personal Number</label>
    <label>{{ user.personalNumber }}</label>
    <label>Line</label>
    <label>{{ user.line }}</label>
    <label>Role</label>
    <label>{{ user.role }}</label>
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
    console.log(userId);
    axios
        .get(`https://localhost:5001/api/users/${userId}`)
        .then(response => this.user = response.data)
  }
}
</script>

<style scoped>
.container {
  margin-top: 10rem;
}
</style>
