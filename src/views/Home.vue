<template>
  <div class="tracker-page tracker-page--home">
    <h1 class="tracker-page__title">Простой способ держать привычки под контролем</h1>
    <p class="tracker-page__slogan">
      Следите за привычками, сохраняйте регулярность и постепенно меняйте жизнь к лучшему.
    </p>
    <RouterLink :to="{ name: 'login' }" class="header-navigation-list__link">
      Войти
    </RouterLink>
    <br />
    <RouterLink :to="{ name: 'registration' }" class="header-navigation-list__link">
      Зарегистрироваться
    </RouterLink>
  </div>
</template>
