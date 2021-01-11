<template>
  <div class="container">
    <PageTitle title="Create a new Order"></PageTitle>
    <form class="form">
      <div class="row">
        <input v-model.number=formData.sequenceNumber name="sequenceNumber" type="number" class="form__field" required
               placeholder="Sequence Number">
      </div>
      <div class="row" v-for="orderUnit in formData.orderUnits" v-bind:key="orderUnit.id">
        <select v-model="orderUnit.unitId" class="form__field" required>
          <option v-for="unit in units" v-bind:key="unit.id" v-bind:value="unit.id">
            {{ unit.value }}
          </option>
        </select>
        <input v-model.number="orderUnit.amount" class="form__field margin-left-10" required
               placeholder="Amount of units"
               type="number">
        <button class="remove margin-left-10" @click="removeUnitClicked(orderUnit)">Remove</button>
      </div>
      <div class="row align-right">
        <button @click="onAddUnitClicked()">Add a unit</button>
      </div>
    </form>
    <div class="row">
      <PrimaryButton text="Register" :clicked=onRegisterClicked></PrimaryButton>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/Shared/PageTitle";
import PrimaryButton from "@/components/Shared/PrimaryButton";
import * as axios from "axios";

export default {
  name: "Create-Order",
  components: {PrimaryButton, PageTitle},
  data() {
    return {
      units: [],
      formData: {
        sequenceNumber: undefined,
        date: new Date(),
        orderUnits: [],
      }
    }
  },
  methods: {
    onRegisterClicked() {
      const createOrderDto = JSON.parse(JSON.stringify(this.formData));
      console.log(createOrderDto)
      axios
          .post('https://localhost:5002/api/orders/', {
            ...createOrderDto
          })
          .then(() => this.$router.push('/'))
          .catch(error => console.log(error));
    },
    onAddUnitClicked() {
      this.formData.orderUnits.push({
        amount: undefined,
        unitId: undefined,
      })
    },
    removeUnitClicked(orderUnit) {
      this.formData.orderUnits = this.formData.orderUnits.filter(entry => entry !== orderUnit);
    }
  }, mounted() {
    axios
        .get('https://localhost:5002/api/units')
        .then(response => {
          this.units = response.data.map(unit => {
            return {
              id: unit.id,
              value: unit.name,
            }
          })
        })
        .catch(() => {
          this.units = [
            {
              id: '1',
              value: 'Unit One',
            },
            {
              id: '2',
              value: 'Unit Two',
            }
          ];
        })
  }
}
</script>

<style scoped>
.container {
  margin-top: 10rem;
}

.form .row {
  margin-top: 2rem;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.align-right {
  justify-content: flex-end;
}

.form__field {
  background: #fff;
  color: #4c4d4d;
  font-size: 1.6rem;

  display: block;
  width: 100%;

  padding: 1rem;

  border: 1px solid #ced4da;
  border-radius: .25rem;

  overflow: visible;
  outline: none;
  resize: vertical;

  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.form__field:focus,
.form__field:active {
  border-color: #007bff !important;
  box-shadow: 0 0 5px #007bff;
}

button {
  cursor: pointer;
  display: inline-block;
  padding: 1rem 5rem;
  margin: 1rem 0;

  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;

  border: 3px solid #007bff;
  background-color: #007bff;
  color: #fff;
  outline: none;
  text-decoration: none;

  transition: all 0.5s ease;
}

.remove {
  font-size: 1.6rem;
  background-color: red;
  border: none;
}

.margin-left-10 {
  margin-left: 1rem;
}
</style>
