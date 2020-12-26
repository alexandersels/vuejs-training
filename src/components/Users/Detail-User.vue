<template>
  <div class="container">
    <PageTitle title="Users Detail"></PageTitle>
  </div>
</template>

<script>
import * as axios from "axios";

export default {
  name: "Detail-User",
  data() {
    return {}
  },
  mounted() {
    const userId = this.$route.params.id;
    console.log(userId);
    axios
        .get(`https://localhost:5001/api/users/${userId}`)
        .then(response => console.log(response))
  }
}
</script>

<style scoped>
.container {
  margin-top: 10rem;
}
</style>
