<template>
  <div class="container">
    <PageTitle title="Login"></PageTitle>
    <form class="form">
      <div class="row">
        <input v-model=formData.personalNumber name="personalNumber" class="form__field" required
               placeholder="Personal Number">
      </div>
      <div class="row">
        <input v-model=formData.password type=password name="password" class="form__field" required
               placeholder="Password">
      </div>
    </form>
    <div class="row">
      <PrimaryButton text="Login" :clicked=onLoginClicked></PrimaryButton>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/Shared/PrimaryButton";
import PageTitle from "@/components/Shared/PageTitle";
import * as axios from "axios";
import {state} from '@/components/Shared/state/variables'

export default {
  name: "Login",
  components: {PrimaryButton, PageTitle},
  data() {
    return {
      formData: {
        personalNumber: undefined,
        password: undefined,
      }
    }
  },
  methods: {
    onLoginClicked() {
      const formData = JSON.parse(JSON.stringify(this.formData));
      axios
          .post('https://localhost:5001/api/users/login', {
            ...formData
          })
          .then(response => {
            state.token = response.data.token;
            this.$router.push('/');
          })
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
