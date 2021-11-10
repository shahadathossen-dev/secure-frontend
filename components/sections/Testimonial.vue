<template>
  <!-- Testimonial -->
  <section
    class="testimonial pt-120 pb-120"
    data-bg-img="/assets/img/media/testimonial-bg.png"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Section Title -->
          <div class="section-title text-center">
            <h2 class="white">Testimonial</h2>
          </div>
          <!-- End Section Title -->
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <!-- Testimonial Slider -->
          <div
            class="testimonial-slider owl-carousel"
            data-owl-nav="true"
            data-owl-autoplay="true"
          >
            <!-- Single Testimonial Slide -->
            <div class="single-testimonial-slide">
              <div class="img">
                <img
                  src="/assets/img/media/testimonial1.png"
                  data-rjs="2"
                  alt=""
                />
              </div>
              <div class="content">
                <p>
                  World where everyone is carrying around small computer one
                  <br />
                  Pocket it's no surprise that video has become one of the most
                  popular ways
                </p>

                <div class="meta-info">
                  <p>Chief Executive</p>
                  <h4>Sarah Arevik</h4>
                </div>
              </div>
            </div>
            <!-- End Single Testimonial Slide -->

            <!-- Single Testimonial Slide -->
            <div class="single-testimonial-slide">
              <div class="img">
                <img
                  src="/assets/img/media/testimonial2.png"
                  data-rjs="2"
                  alt=""
                />
              </div>
              <div class="content">
                <p>
                  World where everyone is carrying around small computer one
                  <br />
                  Pocket it's no surprise that video has become one of the most
                  popular ways
                </p>

                <div class="meta-info">
                  <p>UX Consultant</p>
                  <h4>Michale Clark</h4>
                </div>
              </div>
            </div>
            <!-- End Single Testimonial Slide -->

            <!-- Single Testimonial Slide -->
            <div class="single-testimonial-slide">
              <div class="img">
                <img
                  src="/assets/img/media/testimonial3.png"
                  data-rjs="2"
                  alt=""
                />
              </div>
              <div class="content">
                <p>
                  World where everyone is carrying around small computer one
                  <br />
                  Pocket it's no surprise that video has become one of the most
                  popular ways
                </p>

                <div class="meta-info">
                  <p>Chief Executive</p>
                  <h4>Jennifer Lida</h4>
                </div>
              </div>
            </div>
            <!-- End Single Testimonial Slide -->
          </div>
          <!-- End Testimonial Slider -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Testimonial -->
</template>

<script>
export default {
  mounted() {
    const $bgImg = $('[data-bg-img]');
    $bgImg.css('background-image', function () {
        return 'url("' + $(this).data('bg-img') + '")';
    }).removeAttr('data-bg-img').addClass('bg-img');

    const $owlCarousel = $('.owl-carousel')
    const self = this
    $owlCarousel.each(function () {
      const $th = $(this)

      $th.owlCarousel({
        items: self.checkData($th.data('owl-items'), 1),
        margin: self.checkData($th.data('owl-margin'), 0),
        loop: self.checkData($th.data('owl-loop'), true),
        smartSpeed: 450,
        autoplay: self.checkData($th.data('owl-autoplay'), true),
        autoplayTimeout: self.checkData($th.data('owl-speed'), 5000),
        center: self.checkData($th.data('owl-center'), false),
        animateIn: self.checkData($th.data('owl-animate-in'), false),
        animateOut: self.checkData($th.data('owl-animate-out'), false),
        nav: self.checkData($th.data('owl-nav'), false),
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        dots: self.checkData($th.data('owl-dots'), false),
        stagePadding: self.checkData($th.data('owl-stage-padding'), false),
        autoWidth: self.checkData($th.data('owl-auto-width'), false),
        responsive: self.checkData($th.data('owl-responsive'), {}),
      })
    })

    //Slider btn push icon
    $('.testimonial-slider.owl-carousel')
      .find('.owl-prev')
      .html('<img src="assets/img/icons/slide-left.svg" alt="" class="svg">')
    $('.testimonial-slider.owl-carousel')
      .find('.owl-next')
      .html('<img src="assets/img/icons/slide-right.svg" alt="" class="svg">')
  },
  methods: {
    checkData: function (data, value) {
        return typeof data === 'undefined' ? value : data;
    }
  }
}
</script>

