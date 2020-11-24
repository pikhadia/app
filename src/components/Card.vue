
<template>
  <div>
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Weather card</div>
          <div class="md-subhead">Locate Globally</div>
        </md-card-header-text>
          <div class="search-box">
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Search Places..."
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>
        <md-card-media md-medium>
          <img src="/assets/examples/card-weather.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card> 
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
   .card-header {
   text-align: center;
   padding: 5px 0px;
   background: #555;
   color: #f2f2f2;
 }
 @media screen and (max-width: 1000px) {
   .card {
     width: 75%;
   }
 }

 @media screen and (max-width: 620px) {
   .card {
     width: 80%;
   }
 }
</style>

<script>
export default {
  name: 'Media'
}
</script>