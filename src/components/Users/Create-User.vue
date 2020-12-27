<template>
  <div class="container">
    <PageTitle title="Register a new user"></PageTitle>
    <form class="form">
      <div class="row">
        <input v-model=formData.firstName name="firstname" class="form__field" required placeholder="Firstname">
      </div>
      <div class="row">
        <input v-model=formData.lastName name="lastname" class="form__field" required placeholder="Lastname">
      </div>
      <div class="row">
        <input v-model=formData.email type="email" name="email" class="form__field" required placeholder="Email">
      </div>
      <div class="row">
        <input v-model=formData.line name="line" class="form__field" required placeholder="Line">
      </div>
      <div class="row">
        <input v-model=formData.personalNumber name="personal number" class="form__field" required
               placeholder="Personal Number">
      </div>
      <div class="row">
        <select v-model=formData.role name="role" class="form__field" required>
          <option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="row">
        <input v-model=formData.password name="password" type="password" class="form__field" required
               placeholder="Password">
      </div>
      <div class="row">
        <input v-model=formData.confirmPassword name="password" type="password" class="form__field" required
               placeholder="Confirm Password">
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
  name: "Create-User",
  components: {PrimaryButton, PageTitle},
  data() {
    return {
      options: [
        {text: 'SCT', value: 'sct'},
        {text: 'NSM', value: 'nsm'},
        {text: 'Line', value: 'line'},
        {text: 'Admin', value: 'admin'},
      ],
      formData: {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined,
        line: undefined,
        role: undefined,
        personalNumber: undefined,
      }
    }
  },
  methods: {
    onRegisterClicked() {
      const user = JSON.parse(JSON.stringify(this.formData));
      console.log(user);
      axios
          .post('https://localhost:5001/api/users/register', {
            ...user
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
