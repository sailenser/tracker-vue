<template>
  <div class="default-page default-page--home">
    <div class="default-page__wrapper">
      <h1 class="default-page-title default-page__title">
        <span class="default-page-title__txt"> Простой способ</span>
        <span class="default-page-title__txt">держать привычки под контролем</span>
      </h1>
      <p class="default-page__slogan">
        Следите за привычками, сохраняйте регулярность и постепенно меняйте жизнь к
        лучшему.
      </p>
      <div class="default-page-nav">
        <RouterLink
          :to="{ name: 'login' }"
          class="default-page-nav__link default-page-nav__link--login"
        >
          Войти
        </RouterLink>
        <RouterLink
          :to="{ name: 'registration' }"
          class="default-page-nav__link default-page-nav__link--registration"
        >
          Зарегистрироваться
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/assets/styles/pages/home.scss"></style>
<script setup lang="ts"></script>
