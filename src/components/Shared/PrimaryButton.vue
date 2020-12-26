<template>
  <button @click="clicked"> {{ text }}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: ['text', 'clicked'],
}
</script>

<style scoped>


button {
  cursor: pointer;
  display: inline-block;
  padding: 1rem 5rem;
  margin: 1rem 0;

  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;

  border-radius: 50rem;
  border: 3px solid #007bff;
  color: #007bff;
  background-color: transparent;
  outline: none;
  text-decoration: none;

  transition: all 0.5s ease;
}

button:hover,
button:focus,
button:active {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

button:disabled {
  cursor: default;
  box-shadow: none !important;
  color: #ced4da !important;
  border-color: #ced4da !important;
  background-color: transparent !important;
}
</style>
