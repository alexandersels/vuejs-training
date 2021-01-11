<template>
  <div class="container">
    <PageTitle title="Create a new Unit"></PageTitle>
    <form class="form">
      <div class="row">
        <input v-model=formData.name name="name" class="form__field" required placeholder="Name">
      </div>
      <div class="row">
        <input v-model=formData.productNumber name="productNumber" class="form__field" required
               placeholder="Product Number">
      </div>
      <div class="row">
        <select v-model=formData.type name="line" class="form__field" required>
          <option v-for="type in types" v-bind:key="type.value" v-bind:value="type.value">
            {{ type.text }}
          </option>
        </select>
      </div>
      <div class="row">
        <select v-model=formData.line name="line" class="form__field" required>
          <option v-for="line in lines" v-bind:key="line.value" v-bind:value="line.value">
            {{ line.text }}
          </option>
        </select>
      </div>
      <div class="row">
        <input v-model=formData.image name="image" class="form__field" required placeholder="Link to image">
      </div>
    </form>
    <div class="row">
      <PrimaryButton text="Create" :clicked=onRegisterClicked></PrimaryButton>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/Shared/PageTitle";
import PrimaryButton from "@/components/Shared/PrimaryButton";
import * as axios from "axios";

export default {
  name: "Create-Units",
  components: {PrimaryButton, PageTitle},
  data() {
    return {
      lines: [
        {text: 'R1', value: 'R1'},
        {text: 'R2', value: 'R2'},
        {text: 'R3', value: 'R3'},
        {text: 'R4', value: 'R4'},
        {text: 'R5', value: 'R5'},
        {text: 'H1', value: 'H1'},
        {text: 'H2', value: 'H2'},
        {text: 'H3', value: 'H3'},
      ],
      types: [
        {text: 'VRV3', value: 'VRV3'},
        {text: 'Floor Heater', value: 'FloorHeater'},
        {text: 'Chiller', value: 'Chiller'},
        {text: 'Indoor Small', value: 'IndoorSmall'},
        {text: 'Indoor Medium', value: 'IndoorMedium'},
        {text: 'Heat Pump', value: 'HeatPump'},
      ],
      sheets: [],
      formData: {
        name: undefined,
        productNumber: undefined,
        type: undefined,
        line: undefined,
        image: undefined,
      }
    }
  },
  methods: {
    onRegisterClicked() {
      const createUnitDto = JSON.parse(JSON.stringify(this.formData));
      console.log(createUnitDto);
      axios
          .post('https://localhost:5002/api/units/', {
            ...createUnitDto
          })
          .then(() => this.$router.push('/units'))
          .catch(error => console.log(error));
    }
  },
  mounted() {
    axios
        .get('https://localhost:5002/api/sheets')
        .then(response => this.sheets = response.data)
        .catch(() => {
          this.sheets = [
            {
              id: '1',
              partNumber: '132',
              name: 'Part One',
              maxStock: 10,
              currentStock: 5,
              location: 'Hanger One',
            },
            {
              id: '2',
              partNumber: '4561',
              name: 'Part Two',
              maxStock: 20,
              currentStock: 4,
              location: 'Hanger Two',
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
</style>
