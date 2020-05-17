<style>
.measure-icon {
  width: 30px;
  height: 30px;
  margin: -10px 5px 0 5px;
  cursor: pointer;
}

.selected {
  fill: #000000;
}

.masonry {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}

.masonry div {
  cursor: pointer;
}

.masonry-brick {
  flex: auto;
  width: 20vw;
  margin: 4px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.masonry-brick img:not(.original) {
    background-color: white;
    height: 100%;
    width: 100%;
}

.image-masonry {
  object-fit: cover;
}

.large {
  width: 90vw;
  height: 90vh;
}
.medium {
  width: 40vw;
  height: 25vh;
}

.small {
  width: 90vw;
  height: 60vh;
}
.image-detail {
  max-width: 98vw;
  max-height: 100vh;
  z-index: 1000 !important;
}

.image-detail-picture {
  max-width: 95vw;
}

.image-modal {
  max-height: 95vh;
  max-width: 100%;
}

.v--modal-box.v--modal {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100vw !important;
  height: 100vh !important;
  width: 100vw !important;
  margin: auto !important;
  top: 0 !important;
  left: 0 !important;
  background: rgba(0, 0, 0, 0.8) !important;
}

.image-detail-button {
  fill: #FFFFFF;
  width: 40px;
  height: 40px;
}

#right-button {
  position: fixed;
  right: 0;
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  cursor: pointer;
}

#left-button {
  position: fixed;
  left: 0;
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  cursor: pointer;
}

#close-button {
  position: fixed;
  right: 0;
  top: 0;
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  cursor: pointer;
}

@media (min-width: 610px) {
  .measure-icon {
    display: none;
  }

  .masonry-brick {
    height: 350px;
  }

  .medium,
  .small,
  .large {
    height: 350px;
    width: 350px;
  }

  .masonry-brick:nth-child(3n + 1) {
    width: 200px;
  }
  .masonry-brick:nth-child(3n + 1):nth-child(4n + 2) {
    width: 300px;
  }
  .masonry-brick:nth-child(3n + 1):nth-child(4n + 3) {
    width: 400px;
  }
  .masonry-brick:nth-child(3n + 1):nth-child(4n + 4) {
    width: 500px;
  }

  #right-button {
    position: fixed;
    right: 10px;
  }

  #left-button {
    position: fixed;
    left: 10px;
  }

  #close-button {
    position: fixed;
    right: 10px;
    top: 10px;
  }
}
</style>
<template>
  <div class="container">
    <svg class="measure-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path @click="changeMeasure" id="small" :class="{selected : measure == 'small'}" d="M4 18h17v-6H4v6zM4 5v6h17V5H4z" fill="#6d6d6d"/></svg>
    <svg class="measure-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path @click="changeMeasure" id="medium" :class="{selected : measure == 'medium'}" d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" fill="#6d6d6d"/></svg>
    <svg class="measure-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path @click="changeMeasure" id="large" :class="{selected : measure == 'large'}" d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z" fill="#6d6d6d"/></svg>
    <div class="masonry">
      <div
        v-for="(i, index) in imageList"
        :key="index"
        class="masonry-brick"
        :class="{'small' : (index+1)%view == 0 && measure === 'small',
        'medium' : (index+1)%view == 0 && measure === 'medium',
        'large' : (index+1)%view == 0 && measure === 'large'}"
      >
        <img class="image-masonry" :loading="loading" :src="i.src">
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ImageGallery',
  props: {
    imageList: Array,
    loading: String
  },
  data () {
    return {
      view: 3,
      measure: 'small',
      imageShowed: this.imageList[0].default,
      imageDetailIndex: 0
    }
  },
  components: {
  },
  methods: {
    changeMeasure (elem) {
      switch (elem.srcElement.id) {
        case 'small':
          this.view = 1
          this.measure = 'small'
          break
        case 'medium':
          this.view = 5
          this.measure = 'medium'
          break
        case 'large':
          this.view = 3
          this.measure = 'large'
          break
        default:
          break
      }
    },
  }
}
</script>
