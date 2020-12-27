<template>
  <div class="header">
    <div class="header__wrapper">
      <a href="/" class="logo" title="Stock Management">
        <img>
      </a>
      <div class="header__content">
        <div class="header__links">
          <div class="header__link">
            <router-link to="/sheets">Sheets</router-link>
          </div>
          <div class="header__link">
            <router-link to="/units">Units</router-link>
          </div>
          <div class="header__link">
            <router-link to="/orders">Orders</router-link>
          </div>
          <div class="header__link">
            <router-link to="/users">Users</router-link>
          </div>
          <div class="header__link" v-if="!this.state.user">
            <router-link to="/login">Login</router-link>
          </div>
          <div class="header__link" v-if="this.state.user">
            <router-link to="/logout">Logout</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {state} from '@/components/Shared/state/variables'

export default {
  name: 'Header',
  data() {
    return {
      loggedInUser: state.user,
    }
  }
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
  height: 70px;
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
