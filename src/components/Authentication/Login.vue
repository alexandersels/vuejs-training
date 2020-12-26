<template>
  <div class="container">
    <PageTitle title="Login"></PageTitle>
    <form class="form">
      <div class="row">
        <input v-model=formData.email name="email" class="form__field" required placeholder="Email">
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

export default {
  name: "Login",
  components: {PrimaryButton, PageTitle},
  data() {
    return {
      formData: {
        email: undefined,
        password: undefined,
      }
    }
  },
  methods: {
    onLoginClicked() {
      const user = JSON.parse(JSON.stringify(this.formData));
      console.log(user);
      // axios post
      // on success route to home
      this.$router.push('/');
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
