<template>
<div class="wrapper">
  <div class="movies">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <div class="info">
        <h1>{{movie.name}}</h1>
        <p>{{movie.year}}</p>
      </div><br>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movies: Array
  },
}
</script>
