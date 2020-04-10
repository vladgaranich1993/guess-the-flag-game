<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="setAnswer" class="flex flex-center"> 
      <div class="q-pa-md">
        <q-btn-toggle 
        style="width: 40vh"
          class="column"
          v-model="shape"
          toggle-color="primary"
          :options="[
            {label: 'Australia', value: 'Australia'},
            {label: 'Madagaskar', value: 'Madagaskar'},
            {label: 'China', value: 'China'},
            {label: 'Poland', value: 'Poland'}
          ]"
        />

        <!-- <div>
          Your selection is: <strong>{{ shape }}</strong>
        </div> -->

        <div class="q-mt-md">
          <q-btn label="Submit" type="submit" color="primary"/>
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
      shape: ''
    }
  },
  methods: {
    setAnswer() {
      console.log(this.shape)
    }
  }
}
</script>
