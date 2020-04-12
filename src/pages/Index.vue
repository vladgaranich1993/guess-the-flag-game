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
          :options="currentFlags"
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
      currentFlags: [],
      countries: [
        { id: 1, label: 'Australia', value: 'Australia', continent: 'Australia'},
        { id: 2, label: 'Austria', value: 'Austria', continent: 'Europe'},
        { id: 3, label: 'Azerbaijan', value: 'Azerbaijan', continent: 'Asia'},
        { id: 4, label: 'Albania', value: 'Albania', continent: 'Europe'},
        { id: 5, label: 'Algeria', value: 'Algeria', continent: 'Africa'},
        { id: 6, label: 'Angola', value: 'Angola', continent: 'Africa'},
        { id: 7, label: 'Andorra', value: 'Andorra', continent: 'Europe'},
        { id: 8, label: 'Antigua and Barbuda', value: 'Antigua and Barbuda', continent: 'America'}
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
        },
        {
          id: 5, 
          url: 'https://cdn.webshopapp.com/shops/94414/files/53432190/algeria-flag-icon-free-download.jpg', 
          label: 'Algeria', 
          continent: 'Africa'
        },
        {
          id: 6,
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/900px-Flag_of_Angola.svg.png',
          label: 'Angola',
          continent: 'Africa'
        },
        {
          id: 7,
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1280px-Flag_of_Andorra.svg.png',
          label: 'Andorra',
          continent: 'Europe'
        },
        {
          id: 8,
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/2000px-Flag_of_Antigua_and_Barbuda.svg.png',
          label: 'Antigua and Barbuda',
          continent: 'America'
        }
      ],
    }
  },
  methods: {
    setAnswer() {
      if(this.answer == this.selectedFlag.label) {
        alert('Correct!');
      } else {
        alert('Incorrect')
      }
    }
  },
  created() {
    const idx = Math.floor(Math.random() * this.countries.length);
    this.selectedFlag = this.flags[idx];

    this.countries.map(i => {
      this.currentFlags.push(i)
    })
      
    console.log(this.currentFlags)
  }
}
</script>

<style lang="scss">
  .answer-form {
    width: 40vh
  }
</style>
