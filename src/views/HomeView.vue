<template>
  <div>
    <MovieList :movies="movies" />
    <div class="jumbotron" v-footer>
      <hr>
      <p class="lead">
      <a class="btn btn-primary btn-lg" href="https://github.com/dmitton/marvel-phase-quiz/tree/main/src" role="button">GitHub Repository</a>
      </p>
    </div>
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
