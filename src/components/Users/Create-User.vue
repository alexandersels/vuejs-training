<template>
  <div class="container">
    <PageTitle title="Register a new user"></PageTitle>
    <form class="form">
      <div class="row">
        <input v-model=formData.firstname name="firstname" class="form__field" required placeholder="Firstname">
      </div>
      <div class="row">
        <input v-model=formData.lastname name="lastname" class="form__field" required placeholder="Lastname">
      </div>
      <div class="row">
        <input v-model=formData.email name="email" class="form__field" required placeholder="Email">
      </div>
      <div class="row">
        <input v-model=formData.password name="password" type="password" class="form__field" required
               placeholder="Password">
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

export default {
  name: "Create-User",
  components: {PrimaryButton, PageTitle},
  data() {
    return {
      formData: {
        firstname: undefined,
        lastname: undefined,
        email: undefined,
        password: undefined,
      }
    }
  },
  methods: {
    onRegisterClicked() {
      const user = JSON.parse(JSON.stringify(this.formData));
      console.log(user);
      // axios post
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
