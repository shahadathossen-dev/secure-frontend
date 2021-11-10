<template>
  <main>
    <!-- 404 -->
    <section
      class="
        min-vh-100
        vw-100
        pt-120
        bg-404
        d-flex
        align-items-center
        justify-content-center
        text-center
      "
      data-bg-img="assets/img/media/404-bg.png"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- 404 Content -->
            <div v-if="error.statusCode === 404" class="content-404">
              <img src="/assets/img/media/404.png" data-rjs="2" alt="" />
              <h1>uh-oh page not found...</h1>
              <p>
                Oops! The page you are looking for does not exist. Please return
                <br />
                to the site’s homepage.
              </p>

              <nuxt-link :to="localePath('/')" class="btn-link">
                <img
                  src="/assets/img/icons/left-arrow.svg"
                  alt=""
                  class="svg mr-2"
                />
                Go Back Home
              </nuxt-link>
            </div>
            <!-- End 404 Content -->
            <!-- 403 Content -->
            <div v-else-if="error.statusCode === 403" class="content-403">
              <img src="/assets/img/media/403.png" data-rjs="2" alt="" />
              <h1>uh-oh page not found...</h1>
              <p>
                Oops! The page you are looking for does not exist. Please return
                <br />
                to the site’s homepage.
              </p>

              <nuxt-link :to="localePath('/')" class="btn-link">
                <img
                  src="/assets/img/icons/left-arrow.svg"
                  alt=""
                  class="svg mr-2"
                />
                Go Back Home
              </nuxt-link>
            </div>
            <!-- End 403 Content -->
            <!-- 401 Content -->
            <div v-else-if="error.statusCode === 401" class="content-401">
              <img src="/assets/img/media/401.png" data-rjs="2" alt="" />
              <h1>uh-oh page not found...</h1>
              <p>
                Oops! The page you are looking for does not exist. Please return
                <br />
                to the site’s homepage.
              </p>

              <nuxt-link :to="localePath('/')" class="btn-link">
                <img
                  src="/assets/img/icons/left-arrow.svg"
                  alt=""
                  class="svg mr-2"
                />
                Go Back Home
              </nuxt-link>
            </div>
            <!-- End 401 Content -->
             <!-- 500 Content -->
            <div v-else class="content-500">
              <img src="/assets/img/media/500.png" data-rjs="2" alt="" />
              <h1>uh-oh page not found...</h1>
              <p>
                Oops! The page you are looking for does not exist. Please return
                <br />
                to the site’s homepage.
              </p>

              <nuxt-link :to="localePath('/')" class="btn-link">
                <img
                  src="/assets/img/icons/left-arrow.svg"
                  alt=""
                  class="svg mr-2"
                />
                Go Back Home
              </nuxt-link>
            </div>
            <!-- End 500 Content -->
          </div>
        </div>
      </div>
    </section>
    <!-- End 404 -->
  </main>
</template>

<script>
export default {
  layout: 'null',
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
}
</script>
