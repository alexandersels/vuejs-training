<template>
  <div class="container" v-if="order">
    <PageTitle title="Order Detail"></PageTitle>
    <section>
      <span>General Information</span>
      <div class="row">
        <label>Order Time: </label>
        <label>{{ order.date }}</label>
      </div>
      <div class="row">
        <label>Sequence Number: </label>
        <label>{{ order.sequenceNumber }}</label>
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/Shared/PageTitle";
import * as axios from "axios";

export default {
  name: 'DetailOrder',
  components: {PageTitle},
  data() {
    return {
      order: undefined,
    }
  },
  methods: {},
  mounted() {
    const orderId = this.$route.params.id;
    axios
        .get(`https://localhost:5001/api/orders/${orderId}`)
        .then(response => this.order = response.data)
        .catch(() => {
          this.order = {
            date: new Date(),
            sequenceNumber: '123456789'
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
