<template>
  <main>
    <breadcrumb></breadcrumb>

    <!-- Contact -->
    <section
      class="contact pt-120 pb-120"
      data-bg-img="assets/img/media/contact-bg.png"
    >
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6">
            <!-- Contact Form Wrapper -->
            <div class="contact-form-wrap">
              <!-- Section Title -->
              <div class="section-title style--two">
                <h2>Let's talk</h2>
                <p>
                  Your real IP address disappear so that your online activity
                  can’t be tracke Our strict zero log policy keeps your identity
                  under wrap. order preserve your privacy, we’ll never record
                  your activity.
                </p>
              </div>
              <!-- End Section Title -->

              <!-- Contact Form -->
              <form action="sendmail.php" class="contact-form">
                <div class="row">
                  <div class="col-12">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="First Name"
                    />
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email Address"
                    />
                    <textarea
                      class="form-control"
                      name="message"
                      placeholder="Messages"
                    ></textarea>

                    <button type="submit" class="btn">
                      <img
                        src="assets/img/icons/btn-svg.svg"
                        alt=""
                        class="svg"
                      />
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
              <!-- End Contact Form -->

              <div class="form-response"></div>
            </div>
            <!-- End Contact Form Wrapper -->
          </div>
          <div class="col-lg-6">
            <!-- Contact Info -->
            <div class="contact-info">
              <!-- IMG -->
              <div class="img">
                <img
                  src="assets/img/media/contact-img.png"
                  data-rjs="2"
                  alt=""
                />
              </div>
              <!-- End IMG -->

              <!-- Contact Info List -->
              <ul class="contact-info-list">
                <li>
                  2130 Fulton St, San Francisco, CA 94117 <br />
                  United States
                </li>
                <li>
                  <a href="callto:(202)6965469">+1 (203) 302 - 9545</a>
                </li>
                <li>
                  <a href="mailto:info.dvpn@dvpn.com">Contactus@govpn.com</a>
                </li>
              </ul>
              <!-- End Contact Info List -->

              <!-- Social Links -->
              <div class="social-links contact-social-links">
                <a
                  class="
                    d-inline-flex
                    align-items-center
                    justify-content-center
                  "
                  target="_blank"
                  href="https://www.facebook.com"
                >
                  <i class="fa fa-facebook"></i>
                </a>
                <a
                  class="
                    d-inline-flex
                    align-items-center
                    justify-content-center
                  "
                  target="_blank"
                  href="https://twitter.com/"
                >
                  <i class="fa fa-twitter"></i>
                </a>
                <a
                  class="
                    d-inline-flex
                    align-items-center
                    justify-content-center
                  "
                  target="_blank"
                  href="https://www.instagram.com/"
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </div>
              <!-- End Social Links -->
            </div>
            <!-- End Contact Info -->
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact -->
  </main>
</template>

<script>
export default {}
</script>
