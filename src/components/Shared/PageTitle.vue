<template>
  <div>
    <p>
      {{ title }}
      <span></span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: ['title']
}
</script>
<style scoped>
div {
  display: flex;
  position: relative;
  margin-bottom: 5rem;
  height: auto;
}

p {
  display: block;
  color: black;
  position: absolute;
  align-self: center;
  text-align: center;
  width: 100%;
  font-size: 3.6rem;
  line-height: 1.6;
  font-weight: 600;
}

p span {
  border-bottom: 3px solid #007bff;
  width: 8rem;
  margin: 0 auto;
  display: block;
}
</style>
