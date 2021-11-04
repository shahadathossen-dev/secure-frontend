<template>
  <header class="header fixed-top">
    <!-- Header Main -->
    <div class="header-main love-sticky">
      <div class="container">
        <div class="row align-items-center position-relative">
          <div class="col-lg-2 col-sm-3 col-5">
            <!-- Start Logo -->
            <div class="logo">
              <a href="index.html">
                <img src="/assets/img/logo.png" class="main-logo" alt="" />
                <img
                  src="/assets/img/sticky-logo.png"
                  class="sticky-logo"
                  alt=""
                />
              </a>
            </div>
            <!-- End of Logo -->
          </div>

          <div
            class="
              col-lg-10 col-sm-9 col-7
              d-flex
              align-items-center
              justify-content-end
              position-static
            "
          >
            <client-only>
              <div
                class="
                  nav-wrapper
                  w-100
                  d-flex
                  justify-content-end justify-content-lg-center
                "
              >
                <!-- Nav -->
                <ul class="nav">
                  <li>
                    <nuxt-link :to="localePath('/')">
                      <!-- <a class="current-menu-parent" href="index.html"> -->
                      {{ $t('menu.home') }}
                      <span class="menu-mark"></span>
                      <!-- </a> -->
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/pricing')" class="card-link">
                      {{ $t('menu.pricing') }}
                      <span class="menu-mark"></span>
                    </nuxt-link>
                  </li>
                  <!-- <li>
                    <a href="#"
                      >Pages
                      <span class="menu-mark"></span>
                    </a>
                    <ul class="sub-menu">
                      <li><a href="price.html">Pricing</a></li>
                      <li><a href="service.html">Services</a></li>
                      <li>
                        <a href="service-details.html">Service Details</a>
                      </li>
                      <li>
                        <a href="feature-details.html">Feature Details</a>
                      </li>
                      <li><a href="coming-soon.html">Coming Soon</a></li>
                      <li><a href="404.html">404</a></li>
                    </ul>
                  </li> -->
                  <li>
                    <nuxt-link :to="localePath('/about')" class="card-link">
                      {{ $t('menu.about') }}
                      <span class="menu-mark"></span>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/contact')" class="card-link">
                      {{ $t('menu.contact') }}
                      <span class="menu-mark"></span>
                    </nuxt-link>
                  </li>
                </ul>
                <!-- End Nav -->
              </div>
            </client-only>

            <div class="d-flex align-items-center mr-2 mr-sm-3">
              <!-- Language -->
              <div class="flag-dropdown">
                <button
                  class="dropdown-btn d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <img src="/assets/img/icons/flag.png" alt="" class="flag" />
                  <img
                    src="/assets/img/icons/down-arrow.svg"
                    alt=""
                    class="svg arrow"
                  />
                </button>

                <ul class="dropdown-menu">
                  <li v-for="lang of $i18n.locales" :key="`lang-${lang.name}`">
                    <nuxt-link
                      class="dropdown-lang"
                      :to="switchLocalePath(lang.code)"
                    >
                      <img :src="lang.flag" alt="" />
                      &nbsp;{{ lang.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <!-- End Language -->
              <!-- Language -->
              <div class="flag-dropdown">
                <button
                  class="dropdown-btn d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <img
                    src="/assets/img/icons/user.svg"
                    alt=""
                    style="width: 25px"
                    class="flag"
                  />
                  <img
                    src="/assets/img/icons/down-arrow.svg"
                    alt=""
                    class="svg arrow"
                  />
                </button>

                <ul class="dropdown-menu">
                  <template v-if="$auth.loggedIn">
                    <p class="mb-0 px-2">{{ $auth.user.name }}</p>
                    <li>
                      <nuxt-link :to="localePath('/profile')">
                        {{ $t('buttons.profile') }}
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/dashboard')">
                        {{ $t('buttons.dashboard') }}
                      </nuxt-link>
                    </li>
                    <li>
                      <a href="javascript:void(0)" @click.prevent="$auth.logout()">
                        {{ $t('buttons.logout') }}
                      </a>
                    </li>
                  </template>
                  <template v-else>
                    <li>
                      <nuxt-link :to="localePath('/login')">
                        {{ $t('buttons.login') }}
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/register')">
                        {{ $t('buttons.register') }}
                      </nuxt-link>
                    </li>
                  </template>
                </ul>
              </div>
              <!-- End Language -->
            </div>

            <!-- Menu Trigger -->
            <div class="offcanvas-trigger">
              <img
                src="/assets/img/icons/ofcanvas-trigar.svg"
                alt=""
                class="svg"
              />
            </div>
            <!-- End Menu Trigger -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Header Main -->
  </header>
</template>

<script>
export default {
  mounted() {
    console.log(this.$auth.loggedIn)
  },
}
</script>
