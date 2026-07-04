<template>
  <div class="auth-page auth-page--home">
    <div class="auth-page__wrapper">
      <h1 class="auth-page-title auth-page__title">
        <span class="auth-page-title__txt"> Простой способ</span>
        <span class="auth-page-title__txt">держать привычки под контролем</span>
      </h1>
      <p class="auth-page__slogan">
        Следите за привычками, сохраняйте регулярность и постепенно меняйте жизнь к
        лучшему.
      </p>
      <div class="auth-page-nav">
        <RouterLink
          :to="{ name: 'login' }"
          class="auth-page-nav__link auth-page-nav__link--login"
        >
          Войти
        </RouterLink>
        <RouterLink
          :to="{ name: 'registration' }"
          class="auth-page-nav__link auth-page-nav__link--registration"
        >
          Зарегистрироваться
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/assets/styles/pages/home.scss"></style>
<script setup lang="ts"></script>
