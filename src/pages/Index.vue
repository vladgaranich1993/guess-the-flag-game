<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="setAnswer" class="flex flex-center">
      
      <div class="q-pa-md">
        <div class="col-4">
        <q-img
          :src="flags[0].url"
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
        }
      ]
    }
  },
  methods: {
    setAnswer() {
      if(this.answer == this.flags[0].label) {
        console.log('Correct!')
      } else {
        console.log('Incorrect')
      }
    }
  }
}
</script>

<style lang="scss">
  .answer-form {
    width: 40vh
  }
</style>
