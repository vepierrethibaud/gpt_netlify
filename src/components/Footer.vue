<template>
  <footer>
    <div class="container">
      <div>
        <router-link to="/">
          <img src="../assets/logos/GPT_Blanc.png" alt="Logo GreatProductionTeam">
        </router-link>
        <p>© Copyright GreatProductionTeam 2022</p>
      </div>

      <div>
        <p>contact@greatprod.fr</p>
        <a href="" target="_blank">
           <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="" target="_blank">
           <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="" target="_blank">
           <i class="fa-brands fa-instagram"></i>
        </a>  
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'GlobalFooter',
}
</script>

<style lang="scss">

@import "../styles/components/_footer.scss";
@import "../styles/helpers/_reset.scss";

</style>