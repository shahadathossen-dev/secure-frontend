<template>
  <main>
    <breadcrumb></breadcrumb>

    <!-- About -->
    <section
      class="about pt-120 pb-90"
      data-bg-img="/assets/img/media/use-securewebvpn-bg.png"
    >
      <div class="container">
        <div class="row align-items-center pb-120">
          <div class="col-lg-6">
            <!-- Section Title -->
            <div class="section-title style--two">
              <h5>About Package</h5>
              <h2>Yours simple solutions online privacy.</h2>
              <p>
                Data thieves look for unprotected devices & those that do not
                use to this encryption are easy targets. These types of attacks
                are common, and it’s difficult to avoid them without protection.
              </p>
            </div>
            <!-- End Section Title -->

            <ul class="list-dot list-unstyled">
              <li>
                <h5>Government Users</h5>
                <p>
                  It is easy for advertisers to influence your behavior you
                  expose all browsing habits. show you higher more affluent
                  city.
                </p>
              </li>
              <li>
                <h5>Hackers</h5>
                <p>
                  Onlines businesses mights show you higher this they see you
                  are in a more affluent city. sell your data to advertisers.
                </p>
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <!-- Solution Image -->
            <div class="about-img">
              <img src="assets/img/media/about-img.jpg" data-rjs="2" alt="" />
            </div>
            <!-- End Solution Image -->
          </div>
          <!-- Features -->
          <features></features>
          <!-- End Features -->
        </div>
      </div>
    </section>
    <!-- End About -->
  </main>
</template>

<script>
import Features from '~/components/sections/Features.vue'
export default {
  components: { Features },}
</script>
