import countries from "~/countries";

export default ({ app }, inject) => {
  inject('countries', countries);
}
