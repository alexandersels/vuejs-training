<template>
  <div class="container">
    <PageTitle title="Create a new Order"></PageTitle>
    <form class="form">
      <div class="row">
        <input v-model=formData.sequenceNumber name="sequenceNumber" type="number" class="form__field" required
               placeholder="Sequence Number">
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
      formData: {
        sequenceNumber: undefined,
        date: new Date(),
      }
    }
  },
  methods: {
    onRegisterClicked() {
      const createOrderDto = JSON.parse(JSON.stringify(this.formData));
      console.log(createOrderDto)
      axios
          .post('https://localhost:5001/api/orders/', {
            ...createOrderDto
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
