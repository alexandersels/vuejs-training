<template>
  <div class="container">
    <PageTitle title="Users Detail"></PageTitle>
  </div>
</template>

<script>
import * as axios from "axios";
import PageTitle from "@/components/Shared/PageTitle";

export default {
  name: "Detail-User",
  components: {PageTitle},
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
