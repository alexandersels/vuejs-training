<template>
  <div class="container">
    <PageTitle title="Order Detail"></PageTitle>
  </div>
</template>

<script>
import PageTitle from "@/components/Shared/PageTitle";

export default {
  name: 'DetailOrder',
  components: {PageTitle},
  methods: {},
  mounted() {
    const sheetId = this.$route.params.id;
    console.log('mounted details')
    console.log(sheetId)
  }
}
</script>

<style scoped>
.container {
  margin-top: 10rem;
}
</style>
