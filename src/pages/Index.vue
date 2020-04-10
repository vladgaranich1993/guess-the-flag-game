<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="setAnswer" class="flex flex-center">
      
      <div class="q-pa-md">
        <div class="col-4">
        <q-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2000px-Flag_of_Albania.svg.png"
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
      ]
    }
  },
  methods: {
    setAnswer() {
      console.log(this.answer)
    }
  }
}
</script>

<style lang="scss">
  .answer-form {
    width: 40vh
  }
</style>
