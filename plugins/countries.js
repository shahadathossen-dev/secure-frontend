import countries from "~/static/assets/data/countries";

export default ({ app }, inject) => {
  inject('countries', countries);
}
