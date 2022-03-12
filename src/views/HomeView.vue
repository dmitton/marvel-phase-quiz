<template>
  <div>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
import MovieList from "../components/MovieList.vue"
export default {
  name: 'HomeView',
  components: {
    MovieList
  },
  data() {
    return {
    }
  },
  computed: {
    movies(){
      return this.$root.$data.movies;
    }
  },
}
</script>
