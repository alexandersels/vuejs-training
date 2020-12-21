<template>
  <div class="header">
    <div class="header__wrapper">
      <a href="#" class="logo" title="Stock Management">
        <img>
      </a>
      <div class="header__content">
        <div class="header__links">
          <div class="header__link">
            <a href="/">Sheets</a>
          </div>
          <div class="header__link">
            <a href="/">Units</a>
          </div>
          <div class="header__link">
            <a href="/">Orders</a>
          </div>
          <div class="header__link">
            <a href="/">Users</a>
          </div>
          <div class="header__link">
            <a href="/">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
  display: block;
  width: 100%;

  position: relative;
  padding: 0;
  margin: 0;
}

.header__wrapper {
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header__links {
  display: flex;
  list-style: none;
}

.header__link {
  height: 100%;
}

.header__link a {
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  height: 8rem;
  padding: 0 1rem;

  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);

  transition: all 0.2s ease;
}

.header__link a:hover,
.header__link a:active {
  color: #007bff;
}

</style>
