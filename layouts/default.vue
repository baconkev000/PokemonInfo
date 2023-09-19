<template>
  <div class="wrapper">
    <header>
      <NuxtLink to="/">
        <img class="logo" src="../assets/images/pokemon-logo.png">
      </NuxtLink>
      <NuxtLink to="/" class="home-link">
        HOME
      </NuxtLink>
    </header>
    <div class="main-content">
      <div class="inner-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper{
    width: 94%;
    margin-left: 3%;
  }
    header {
        height: 50px;
        display: flex;
        align-items: center;
        padding: 10px;
        display: flex;
        border-bottom: 2px solid rgb(213, 213, 213);
        width:100%;
        justify-content: space-between;
    }
    .home-link {
        color: black;
        text-decoration: none;
        font-size: 20px;
    }
    .main-content{
        display: flex;
        justify-content: center;
        width:100%;
    }
    .inner-content{
        width:100%;
        height: auto;
    }
    .logo{
      height: 100px;
    }
</style>
