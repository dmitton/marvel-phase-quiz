<template>
<div class="wrapper">
  <div class="movies">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <div class="info">
        <h1>{{movie.name}}</h1>
        <p>{{movie.year}}</p>
      </div>
      <div class="button-phases">
        <AppDropdown>
          <template slot="toggler">
            <button>Phase?</button>
          </template>
          <AppDropdownContent>
            <button class="auto" @click="addtoPhase1(movie)">Phase 1</button><br>
            <button class="auto" @click="addtoPhase2(movie)">Phase 2</button><br>
            <button class="auto" @click="addtoPhase3(movie)">Phase 3</button><br>
            <button class="auto" @click="addtoPhase4(movie)">Phase 4</button><br>
          </AppDropdownContent>
        </AppDropdown>
      </div><br>
    </div>
  </div>
</div>
</template>

<script>
import AppDropdown from '../components/AppDropdown.vue'
import AppDropdownContent from '../components/AppDropdownContent.vue'

export default {
  name: 'MovieList',
  props: {
    movies: Array
  },
  components: {
    AppDropdown,
    AppDropdownContent,
  },
  methods: {
    addtoPhase1(movie){
      this.$root.$data.phase1.push(movie)
    },
    addtoPhase2(movie){
      this.$root.$data.phase2.push(movie)
    },
    addtoPhase3(movie){
      this.$root.$data.phase3.push(movie)
    },
    addtoPhase4(movie){
      this.$root.$data.phase4.push(movie)
    }
  }

}
</script>

<style>

.info h1{
  font-size: 30px;
}
</style>
