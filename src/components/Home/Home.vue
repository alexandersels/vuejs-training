<template>
  <div class="container">
    <PageTitle title="Home"></PageTitle>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa earum harum ipsum obcaecati rem sequi
      voluptas voluptatibus? Accusantium alias cum earum fugit hic illo, iusto neque quod sed sit! Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Accusantium architecto consequuntur delectus laboriosam laborum magni nobis,
      numquam sequi similique veritatis! Cum dolores et in itaque magni natus odio quaerat tempore? Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. A ab aspernatur consequuntur cum doloremque et eum fugiat impedit in
      laudantium libero nostrum porro possimus quia quibusdam soluta tempore voluptate, voluptatibus!</p>
  </div>
</template>

<script>
import PageTitle from "@/components/Shared/PageTitle";

export default {
  name: 'Home',
  components: {PageTitle}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 10rem;
}

p {
  color: rgb(76, 77, 77);
  font-size: 16px;
}
</style>
