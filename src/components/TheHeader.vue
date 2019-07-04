<template>
  <header>
    <div id="logo">
      <a href="https://www.twbeer.com/tw">
        <img
          src="@/assets/img/logo.png"
          alt=""
        >
      </a>
    </div>

    <div class="head-link">
      <div class="fl-menu">
        <a href="javascript:;">
          <div
            id="menu-btn"
            class="menu-bar-wrap"
          >
            <div
              v-for="index in 3"
              :key="index"
              :class="{ [`menu-bar${index}`]: true }"
            />
          </div>
        </a>
      </div>

      <div class="fl-r">
        <a
          href="https://www.facebook.com/beer.taiwan"
          target="_blank"
        >
          <div id="fb">
            <img
              src="@/assets/img/facebook.svg"
              alt=""
            >
          </div>
        </a>
      </div>
    </div>
  </header>
</template>
