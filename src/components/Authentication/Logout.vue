<template>
  <div class="container">
    <PageTitle title="Logout"></PageTitle>
    <div class="row">
      <PrimaryButton text="Logout" :clicked=onLogoutClicked></PrimaryButton>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/Shared/PrimaryButton";
import PageTitle from "@/components/Shared/PageTitle";

export default {
  name: "Logout",
  components: {PrimaryButton, PageTitle},
  methods: {
    onLogoutClicked() {
      this.$root.user = undefined;
      this.$root.token = undefined;
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 10rem;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
