<template>
  <div class="container" v-if="sheet">
    <PageTitle title="Sheet Detail"></PageTitle>
    <section>
      <span>General Information</span>
      <div class="row">
        <label>Name: </label>
        <label>{{ sheet.name }}</label>
      </div>
      <div class="row">
        <label>Part Number: </label>
        <label>{{ sheet.partNumber }}</label>
      </div>
      <div class="row">
        <label>Image: </label>
        <label>{{ sheet.image }}</label>
      </div>
      <div class="row">
        <label>Location: </label>
        <label>{{ sheet.location }}</label>
      </div>
    </section>
    <section>
      <span>Dimension Information</span>
      <div class="row">
        <label>Length: </label>
        <label>{{ sheet.length }} mm</label>
      </div>
      <div class="row">
        <label>Width: </label>
        <label>{{ sheet.width }} mm</label>
      </div>
      <div class="row">
        <label>Thickness: </label>
        <label>{{ sheet.thickness }} mm</label>
      </div>
    </section>
    <section>
      <span>Stock Information</span>
      <div class="row">
        <label>Current Stock: </label>
        <label>{{ sheet.currentStock }}</label>
      </div>
      <div class="row">
        <label>Max Stock: </label>
        <label>{{ sheet.maxStock }}</label>
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/Shared/PageTitle";
import * as axios from "axios";

export default {
  name: 'DetailSheet',
  components: {PageTitle},
  data() {
    return {
      sheet: undefined,
    }
  },
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
