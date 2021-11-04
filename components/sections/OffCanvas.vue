<template>
  <div class="offcanvas_menu">
    <div class="offcanvas-overlay fixed-top w-100 h-100"></div>
    <div class="offcanvas-wrapper fixed-top h-100">
      <div class="offcanvas-close position-absolute">
        <i class="fa fa-times"></i>
      </div>
      <div></div>
      <div class="offcanvas-content">
        <!-- Widget Logo -->
        <div class="widget widget_logo">
          <a href="#"><img src="assets/img/sticky-logo.png" alt="" /></a>
        </div>
        <!-- End Widget Logo -->
        <p>
          <span class="text-2xl">
            {{ country.emoji }}
          </span>
          Bangladesh
        </p>
        <!-- Widget About -->
        <div class="widget widget_about">
          <h3 class="widget-title">About us</h3>
          <p>
            It takes more than a private internet browser to go incognito. We’ll
            make your real IP address.
          </p>
        </div>
        <!-- End Widget About -->

        <!-- Widget IP -->
        <div class="widget widget_ip">
          <h3 class="widget-title">Your IP Address:</h3>
          <ul>
            <li>103.237.76.105</li>
          </ul>
        </div>
        <!-- End Widget IP -->

        <!-- Widget About -->
        <div class="widget widget_about">
          <h3 class="widget-title">Your ISP:</h3>
          <p>KS Network Limited</p>
        </div>
        <!-- End Widget About -->

        <!-- Widget  Contact -->
        <div class="widget widget_contact">
          <h3 class="widget-title">Get In Touch</h3>
          <ul>
            <li>
              <span class="icon">
                <i class="fa fa-envelope"></i>
              </span>
              <a href="mailto:Your@gmail.com">Your@gmail.com</a>
            </li>
            <li>
              <span class="icon">
                <i class="fa fa-phone"></i>
              </span>
              <a href="callto:(202)2555421">(202) 255 5421</a>
            </li>
            <li>
              <span class="icon"> <i class="fa fa-map-signs"></i> </span>27
              Division St, New York NY 10002, USA
            </li>
          </ul>
        </div>
        <!-- End Widget Contact -->
      </div>

      <!-- Widget Social Icon -->
      <div class="widget widget_social_links border-top mt-5">
        <!-- <h3 class="widget-title">Follow Us On:</h3> -->
        <div class="social-links">
          <a
            class="d-inline-flex align-items-center justify-content-center"
            href="https://www.facebook.com"
          >
            <i class="fa fa-facebook"></i>
          </a>
          <a
            class="d-inline-flex align-items-center justify-content-center"
            href="https://twitter.com/"
          >
            <i class="fa fa-twitter"></i>
          </a>
          <a
            class="d-inline-flex align-items-center justify-content-center"
            href="https://www.linkedin.com"
          >
            <i class="fa fa-linkedin"></i>
          </a>
          <a
            class="d-inline-flex align-items-center justify-content-center"
            href="https://www.instagram.com/"
          >
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <!-- End Widget Social Icon -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: {
        alpha2: 'BD',
        alpha3: 'BGD',
        countryCallingCodes: ['+880'],
        currencies: ['BDT'],
        emoji: '🇧🇩',
        ioc: 'BAN',
        languages: ['ben'],
        name: 'Bangladesh',
        status: 'assigned',
      },
    }
  },
}
</script>
