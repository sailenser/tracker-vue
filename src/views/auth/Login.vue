<template>
  <div class="tracker-page tracker-page--login">
    <div class="tracker-page__content">
      <div class="tracker-logo tracker-page__logo">
        <p class="tracker-logo__txt">Мои привычки</p>
      </div>
      <div class="tracker-form">
        <h2 class="tracker-form__head">Добро пожаловать</h2>
        <p class="tracker-form__text">Для входа введите ваш email и пароль</p>
        <form>
          <div>
            <input type="text" name="email" placeholder="email" />
          </div>
          <div>
            <input type="text" name="password" placeholder="password" />
          </div>
          <button type="button">Продолжить</button>
        </form>
      </div>
    </div>
    <div class="tracker-page__bg">
      <br />
      <br />
      <br />
      <br />
      <RouterLink :to="{ name: 'home' }" class="tracker-page__link">Назад</RouterLink>
    </div>
  </div>
</template>
<style scoped lang="scss" src="@/assets/styles/pages/login.scss"></style>
<script setup lang="ts"></script>
