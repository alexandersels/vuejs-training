<template>
  <div class="container">
    <PageTitle title="Sheet Detail"></PageTitle>
  </div>
</template>

<script>
import PageTitle from "@/components/Shared/PageTitle";

export default {
  name: 'DetailSheet',
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
