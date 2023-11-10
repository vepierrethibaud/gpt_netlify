<template>
  <footer>
    <div class="container">
      <div>
        <router-link to="/">
          <img src="../assets/margin-top: $global_margin/GPT_Blanc.png" alt="Logo GreatProductionTeam">
        </router-link>
      </div>

      <div>
        <p>contact@greatprod.fr</p>
        <a href="https://www.linkedin.com/company/great-production-team/" target="_blank">
           <i class="fa-brands fa-linkedin-in"></i>
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