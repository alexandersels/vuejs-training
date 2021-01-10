<template>
  <div class="container">
    <PageTitle title="Create a new Sheet"></PageTitle>
    <form class="form">
      <div class="row">
        <input v-model=formData.name name="name" class="form__field" required placeholder="Name">
      </div>
      <div class="row">
        <input v-model=formData.partNumber name="partNumber" class="form__field" required
               placeholder="Part Number">
      </div>
      <div class="row">
        <input v-model=formData.length type="number" name="length" class="form__field" required
               placeholder="Length">
      </div>
      <div class="row">
        <input v-model=formData.width type="number" name="width" class="form__field" required
               placeholder="Width">
      </div>
      <div class="row">
        <input v-model=formData.thickness type="number" name="thickness" class="form__field" required
               placeholder="Thickness">
      </div>
      <div class="row">
        <input v-model=formData.image name="image" class="form__field" required
               placeholder="Image">
      </div>
      <div class="row">
        <input v-model=formData.maxStock type="number" name="maxStock" class="form__field" required
               placeholder="Max Stock">
      </div>
      <div class="row">
        <input v-model=formData.currentStock type="number" name="currentStock" class="form__field" required
               placeholder="Current Stock">
      </div>
      <div class="row">
        <input v-model=formData.location name="location" class="form__field" required
               placeholder="Location">
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
  name: "Create-Sheets",
  components: {PrimaryButton, PageTitle},
  data() {
    return {
      formData: {
        name: undefined,
        partNumber: undefined,
        length: undefined,
        width: undefined,
        thickness: undefined,
        image: undefined,
        maxStock: undefined,
        currentStock: undefined,
        location: undefined,
      }
    }
  },
  methods: {
    onRegisterClicked() {
      const createSheetDto = JSON.parse(JSON.stringify(this.formData));
      console.log(createSheetDto);
      axios
          .post('https://localhost:5002/api/sheets/', {
            ...createSheetDto,
            length: +createSheetDto.length,
            width: +createSheetDto.width,
            thickness: +createSheetDto.thickness,
            currentStock: +createSheetDto.currentStock,
            maxStock: +createSheetDto.maxStock,
          })
          .then(() => this.$router.push('/'))
          .catch(error => console.log(error));
    }
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
