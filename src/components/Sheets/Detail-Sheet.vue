<template>
  <div class="container">
    <PageTitle title="Sheet Detail"></PageTitle>
  </div>
</template>

<script>
import PageTitle from "@/components/Shared/PageTitle";
import * as axios from "axios";

export default {
  name: 'DetailSheet',
  components: {PageTitle},
  methods: {},
  mounted() {
    const sheetId = this.$route.params.id;
    axios
        .get(`https://localhost:5001/api/sheets/${sheetId}`)
        .then(response => this.sheet = response.data)
        .catch(() => {
          this.sheet = {
            id: 'id',
            name: 'Sheet One',
            partNumber: '123ABCDEF4789',
            length: '120',
            width: '100',
            thickness: '90',
            image: 'xdlmao',
            maxStock: '100',
            currentStock: '10',
            location: 'LINE01',
          }
        })
  }
}
</script>

<style scoped>
.container {
  margin-top: 10rem;
}
</style>
