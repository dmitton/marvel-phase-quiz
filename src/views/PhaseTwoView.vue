<template>
  <div>
  <div class="predicted">
    <h1><u>Your Answer</u></h1>
    <PhaseOneList :movies="movies" />
  </div>
  <div class = "actual">
    <h1><u>Correct Answers</u></h1>
    <PhaseOneList :movies="correct"/>
  </div>
  </div>
</template>

<script>
import PhaseOneList from "../components/PhaseOneList.vue"
export default {
  name: 'HomeView',
  components: {
    PhaseOneList
  },
  data() {
    return {
    }
  },
  computed: {
    movies(){
      return this.$root.$data.phase2;
    },
    correct(){
      return this.$root.$data.movies.filter(movie => (movie.year > 2012 && movie.year < 2016));
    }
  },
}
</script>

<style>

.actual{
  padding-right:50px;
  float:right;
}

.predicted{
  padding-left:50px;
  float: left;
}

</style>
