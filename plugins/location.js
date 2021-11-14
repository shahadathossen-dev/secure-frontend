export default async ({ $axios, store }) => {
  const { data } = await $axios.get('location')
  store.dispatch('location/setState', data)
}
