<template>
  <div class="container" v-if="unit">
    <PageTitle title="Unit Detail"></PageTitle>
    <section>
      <span>General Information</span>
      <div class="row">
        <label>Name: </label>
        <label>{{ unit.name }}</label>
      </div>
      <div class="row">
        <label>Product Number: </label>
        <label>{{ unit.productNumber }}</label>
      </div>
      <div class="row">
        <label>Image: </label>
        <label>{{ unit.image }}</label>
      </div>
    </section>
    <section>
      <span>Specific Information</span>
      <div class="row">
        <label>Type: </label>
        <label>{{ unit.type }}</label>
      </div>
      <div class="row">
        <label>Line: </label>
        <label>{{ unit.line }}</label>
      </div>
    </section>
    <section>
      <span>Sheet Information</span>
      <div class="row clickable" v-for="unitSheet in unit.sheets" @click="routeToSheet(unitSheet.id)"
           v-bind:key="unitSheet.id">
        <div class="row">
          <label>Part Number: </label>
          <label>{{ unitSheet.partNumber }}</label>
        </div>
        <div class="row">
          <label>Name: </label>
          <label>{{ unitSheet.name }}</label>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/Shared/PageTitle";
import * as axios from "axios";

export default {
  name: 'DetailUnit',
  components: {PageTitle},
  data() {
    return {
      unit: undefined,
    }
  },
  methods: {
    routeToSheet(id) {
      this.$router.push(`/sheets/${id}`);
    }
  },
  mounted() {
    const unitId = this.$route.params.id;
    axios
        .get(`https://localhost:5002/api/units/${unitId}`)
        .then(response => this.unit = response.data)
        .catch(() => {
          this.unit = {
            name: 'Name',
            productNumber: '123ABC1456',
            image: 'image',
            type: 'Unit Type',
            line: 'Line',
            sheets: [
              {
                id: '1',
                name: 'Test Sheet',
                partNumber: '123456'
              },
              {
                id: '2',
                name: 'Test Sheet Two',
                partNumber: '123456'
              }
            ]
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

.clickable {
  cursor: pointer !important;
}

.clickable label {
  cursor: pointer !important;
  display: block;
}
</style>
