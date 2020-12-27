<template>
  <div class="container" v-if="user">
    <PageTitle title="Edit"></PageTitle>
    <form class="form">
      <div class="row">
        <input v-model=user.firstName name="firstname" class="form__field" required placeholder="Firstname">
      </div>
      <div class="row">
        <input v-model=user.lastName name="lastname" class="form__field" required placeholder="Lastname">
      </div>
      <div class="row">
        <input v-model=user.email type="email" name="email" class="form__field" required placeholder="Email">
      </div>
      <div class="row">
        <input v-model=user.line name="line" class="form__field" required placeholder="Line">
      </div>
      <div class="row">
        <select v-model=user.role name="role" class="form__field" required>
          <option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </form>
    <div class="row">
      <PrimaryButton class="button" text="Cancel" :clicked=onCancelClicked></PrimaryButton>
      <PrimaryButton class="button" text="Save" :clicked=onSaveClicked></PrimaryButton>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/Shared/PrimaryButton";
import PageTitle from "@/components/Shared/PageTitle";
import * as axios from "axios";

export default {
  name: "Edit-User",
  components: {PrimaryButton, PageTitle},
  data() {
    return {
      options: [
        {text: 'SCT', value: 'sct'},
        {text: 'NSM', value: 'nsm'},
        {text: 'Line', value: 'line'},
        {text: 'Admin', value: 'admin'},
      ],
      user: undefined,
    }
  },
  methods: {
    onSaveClicked() {
      const user = JSON.parse(JSON.stringify(this.user));
      axios
          .put('https://localhost:5001/api/users', {
            ...user
          })
          .then(() => this.$router.push('/'))
          .catch(error => console.log(error));
    },
    onCancelClicked() {
      this.$router.push('/users');
    }
  },
  mounted() {
    const userId = this.$route.params.id;
    axios
        .get(`https://localhost:5001/api/users/${userId}`)
        .then(response => this.user = response.data)
        .catch(() => {
          this.user = {
            id: 'id',
            personalNumber: '123456',
            role: 'admin',
            firstName: 'Firstname',
            lastName: 'Lastname',
            line: 'Line',
            email: 'firstname.lastname@mail.com'
          }
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

.button {
  margin-top: 2rem;
}

.button:last-child {
  margin-left: 1.5rem;
}

</style>
