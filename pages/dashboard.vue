<template>
  <main>
    <div
      class="page-title-wrap"
      data-bg-img="assets/img/media/page-title-bg.png"
    >
      <!-- Grid Animation -->
      <grid-animation></grid-animation>
      <!-- End Grid Animation -->

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-6">
            <div class="card">
              <div class="card-header">
                <div class="card-subtitle">
                  <p>{{ $t('general.dashboard') }}</p>
                </div>
              </div>
              <div class="card-body">
                <p class="text-success">{{ $t('general.welcome') }}</p>
              </div>
              <div class="card-footer">
                <button @click="$auth.logout()">
                  {{ $t('buttons.logout') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  middleware: ['auth', 'verified'],
}
</script>
