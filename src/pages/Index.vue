<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="setAnswer" class="flex flex-center">
      
      <div class="q-pa-md">
        <div class="col-4">
        <q-img
          :src="selectedFlag.url"
          :ratio="16/9"
        />
      </div> 
        <q-btn-toggle 
          class="column answer-form"
          v-model="answer"
          toggle-color="positive"
          :options="countries"
        />

        <div class="q-mt-md">
          <q-btn label="Check" type="submit" color="secondary"/>
        </div>
      </div>

    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      answer: '',
      selectedFlag: '',
      countries: [
        { id: 1, label: 'Australia', value: 'Australia', continent: 'Australia'},
        { id: 2, label: 'Austria', value: 'Austria', continent: 'Europe'},
        { id: 3, label: 'Azerbaijan', value: 'Azerbaijan', continent: 'Asia'},
        { id: 4, label: 'Albania', value: 'Albania', continent: 'Europe'}
      ],
      flags: [
        { 
          id: 1, 
          url: 'https://cdn.webshopapp.com/shops/94414/files/53448798/australia-flag-icon-free-download.jpg', 
          label: 'Australia', 
          continent: 'Australia' 
        },
        { 
          id: 2, 
          url: 'https://cdn.countryflags.com/thumbs/austria/flag-400.png', 
          label: 'Austria', 
          continent: 'Austria' 
        },
        { 
          id: 3, 
          url: 'https://cdn.webshopapp.com/shops/94414/files/53480562/azerbaijan-flag-icon-free-download.jpg', 
          label: 'Azerbaijan', 
          continent: 'Asia' 
        },
        { 
          id: 4, 
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2000px-Flag_of_Albania.svg.png', 
          label: 'Albania', 
          continent: 'Europe' 
        }
      ],
    }
  },
  methods: {
    setAnswer() {
      if(this.answer == this.selectedFlag.label) {
        console.log('Correct!')
      } else {
        console.log('Incorrect')
      }
    }
  },
  created() {
    const idx = Math.floor(Math.random() * this.countries.length);
    this.selectedFlag = this.flags[idx];
  }
}
</script>

<style lang="scss">
  .answer-form {
    width: 40vh
  }
</style>
