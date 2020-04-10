<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="setAnswer" class="flex flex-center"> 
      <div class="q-pa-md">
        <q-btn-toggle 
          class="column answer-form"
          v-model="answer"
          toggle-color="positive"
          :options="[
            {label: 'Australia', value: 'Australia'},
            {label: 'Austria', value: 'Austria'},
            {label: 'Azerbaijan', value: 'Azerbaijan'},
            {label: 'Albania', value: 'Albania'}
          ]"
        />

        <div class="q-mt-md">
          <q-btn label="Submit" type="submit" color="secondary"/>
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
        { id: 1, name: 'Australia', continent: 'Australia'},
        { id: 2, name: 'Austria', continent: 'Europe'},
        { id: 3, name: 'Azerbaijan', continent: 'Asia'},
        { id: 4, name: 'Albania', continent: 'Europe'}
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
