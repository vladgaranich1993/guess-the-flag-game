<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="setAnswer" class="flex flex-center">
      
      <div class="q-pa-md">
        <q-banner inline-actions class="text-white bg-orange q-mb-xs score-bar">
          Your score: <b>{{score}}</b>
        </q-banner>
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

        <div class="q-mt-md flex justify-between">
          <q-btn label="Check" type="submit" color="secondary"/>
          <q-btn @click="initialGame" label="New try" color="positive"/>
          <q-btn @click="reset" label="Reset" color="negative"/>
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
      score: 0,
      currentFlags: [],
      countries: [
        { 
          id: 1, 
          label: 'Australia', 
          value: 'Australia', 
          continent: 'Australia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53448798/australia-flag-icon-free-download.jpg' 
        },
        { 
          id: 2, 
          label: 'Austria', 
          value: 'Austria', 
          continent: 'Europe',
          url: 'https://cdn.countryflags.com/thumbs/austria/flag-400.png' 
        },
        { 
          id: 3, 
          label: 'Azerbaijan', 
          value: 'Azerbaijan', 
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53480562/azerbaijan-flag-icon-free-download.jpg' 
        },
        { 
          id: 4, 
          label: 'Albania', 
          value: 'Albania', 
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2000px-Flag_of_Albania.svg.png' 
        },
        { 
          id: 5, 
          label: 'Algeria', 
          value: 'Algeria', 
          continent: 'Africa',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53432190/algeria-flag-icon-free-download.jpg'
        },
        { 
          id: 6, 
          label: 'Angola', 
          value: 'Angola', 
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/900px-Flag_of_Angola.svg.png'
        },
        { 
          id: 7, 
          label: 'Andorra', 
          value: 'Andorra', 
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1280px-Flag_of_Andorra.svg.png'
        },
        { 
          id: 8, 
          label: 'Antigua and Barbuda', 
          value: 'Antigua and Barbuda', 
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/2000px-Flag_of_Antigua_and_Barbuda.svg.png'
        },
        {
          id: 9, 
          label: 'Argentina', 
          value: 'Argentina', 
          continent: 'America',
          url: 'https://cdn.countryflags.com/thumbs/argentina/flag-400.png'
        },
        {
          id: 10, 
          label: 'Armenia', 
          value: 'Armenia', 
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/2000px-Flag_of_Armenia.svg.png'
        },
        {
          id: 11, 
          label: 'Afganistan', 
          value: 'Afganistan', 
          continent: 'Asia',
          url: 'https://cdn.countryflags.com/thumbs/afghanistan/flag-400.png'
        },
        {
          id: 12, 
          label: 'Bahamas', 
          value: 'Bahamas', 
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/2000px-Flag_of_the_Bahamas.svg.png'
        },
        {
          id: 13, 
          label: 'Bangladesh', 
          value: 'Bangladesh', 
          continent: 'Asia',
          url: 'https://cdn.countryflags.com/thumbs/bangladesh/flag-400.png'
        },
        {
          id: 14, 
          label: 'Barbados', 
          value: 'Barbados', 
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/1280px-Flag_of_Barbados.svg.png'
        },
        {
          id: 15, 
          label: 'Bahrein', 
          value: 'Bahrein', 
          continent: 'Asia',
          url: 'https://cdn.countryflags.com/thumbs/bahrain/flag-400.png'
        },
        {
          id: 16, 
          label: 'Belarus', 
          value: 'Belarus', 
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/2000px-Flag_of_Belarus.svg.png'
        },
        {
          id: 17,
          label: 'Belize',
          value: 'Belize',
          continent: 'America',
          url: 'https://thumbs.dreamstime.com/b/%D1%84%D0%BB%D0%B0%D0%B3-belize-6891521.jpg'
        },
        {
          id: 18,
          label: 'Belgium',
          value: 'Belgium',
          continent: 'Europe',
          url: 'https://kubilive.com/wp-content/uploads/2019/04/Belgium.png'
        },
        {
          id: 19,
          label: 'Benin',
          value: 'Benin',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/benin/flag-400.png'
        },
        {
          id: 20,
          label: 'Bulgaria',
          value: 'Bulgaria',
          continent: 'Europe',
          url: 'https://cdn.countryflags.com/thumbs/bulgaria/flag-400.png'
        },
        {
          id: 21,
          label: 'Bolivia',
          value: 'Bolivia',
          continent: 'America',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53546814/bolivia-flag-icon-free-download.jpg'
        },
        {
          id: 22,
          label: 'Bosnia and Herzegovina',
          value: 'Bosnia and Herzegovina',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/2000px-Flag_of_Bosnia_and_Herzegovina.svg.png'
        },
        {
          id: 23,
          label: 'Botswana',
          value: 'Botswana',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/2000px-Flag_of_Botswana.svg.png'
        },
        {
          id: 24,
          label: 'Brazil',
          value: 'Brazil',
          continent: 'America',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53556974/brazil-flag-icon-free-download.jpg'
        },
        {
          id: 25,
          label: 'Brunei',
          value: 'Brunei',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/2000px-Flag_of_Brunei.svg.png'
        },
        {
          id: 26,
          label: 'Burkina Faso',
          value: 'Burkina Faso',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/2000px-Flag_of_Burkina_Faso.svg.png'
        },
        {
          id: 27,
          label: 'Burundi',
          value: 'Burundi',
          continent: 'Africa',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53595286/burundi-flag-icon-free-download.jpg'
        },
        {
          id: 28,
          label: 'Bhutan',
          value: 'Bhutan',
          continent: 'Asia',
          url: 'https://cdn.countryflags.com/thumbs/bhutan/flag-400.png'
        },
        {
          id: 29,
          label: 'Vanuatu',
          value: 'Vanuatu',
          continent: 'Oceania',
          url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Vanuatu_flag_300.png'
        },
        {
          id: 30,
          label: 'United Kingdom',
          value: 'United Kingdom',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png'
        },
        {
          id: 31,
          label: 'Hungary',
          value: 'Hungary',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54022578/hungary-flag-icon-free-download.jpg'
        },
        {
          id: 32,
          label: 'Venezuela',
          value: 'Venezuela',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1280px-Flag_of_Venezuela.svg.png'
        },
        {
          id: 33,
          label: 'East Timor',
          value: 'East Timor',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png'
        },
        {
          id: 34,
          label: 'Vietnam',
          value: 'Vietnam',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54968390/vietnam-flag-icon-free-download.jpg'
        },
        {
          id: 35,
          label: 'Gabon',
          value: 'Gabon',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/gabon/flag-400.png'
        },
        {
          id: 36,
          label: 'Haiti',
          value: 'Haiti',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1280px-Flag_of_Haiti.svg.png'
        },
        {
          id: 37,
          label: 'Guyana',
          value: 'Guyana',
          continent: 'America',
          url: 'https://cdn.countryflags.com/thumbs/guyana/flag-400.png'
        },
        {
          id: 38,
          label: 'The Gambia',
          value: 'The Gambia',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/2000px-Flag_of_The_Gambia.svg.png'
        },
        {
          id: 39,
          label: 'Ghana',
          value: 'Ghana',
          continent: 'Africa',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54009472/ghana-flag-icon-free-download.jpg'
        },
        {
          id: 40,
          label: 'Guatemala',
          value: 'Guatemala',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1280px-Flag_of_Guatemala.svg.png'
        },
        {
          id: 41,
          label: 'Guinea',
          value: 'Guinea',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/1280px-Flag_of_Guinea.svg.png'
        },
        {
          id: 42,
          label: 'Guinea-Bissau',
          value: 'Guinea-Bissau',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1280px-Flag_of_Guinea-Bissau.svg.png'
        },
        {
          id: 43,
          label: 'Germany',
          value: 'Germany',
          continent: 'Europe',
          url: 'https://keskraamatukogu.ee/wp-content/uploads/2019/10/german-flag.jpg'
        },
        {
          id: 44,
          label: 'Honduras',
          value: 'Honduras',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1280px-Flag_of_Honduras.svg.png'
        },
        {
          id: 45,
          label: 'Grenada',
          value: 'Grenada',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/2000px-Flag_of_Grenada.svg.png'
        },
        {
          id: 46,
          label: 'Greece',
          value: 'Greece',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54013896/greece-flag-icon-free-download.jpg'
        },
        {
          id: 47,
          label: 'Georgia',
          value: 'Georgia',
          continent: 'Europe',
          url: 'https://cdn.countryflags.com/thumbs/georgia/flag-400.png'
        },
        {
          id: 48,
          label: 'Denmark',
          value: 'Denmark',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53828000/denmark-flag-icon-free-download.jpg'
        },
        {
          id: 49,
          label: 'Djibouti',
          value: 'Djibouti',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/2000px-Flag_of_Djibouti.svg.png'
        },
        {
          id: 50,
          label: 'Dominica',
          value: 'Dominica',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/1280px-Flag_of_Dominica.svg.png'
        },
        {
          id: 51,
          label: 'Dominican Republic',
          value: 'Dominican Republic',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png'
        },
        {
          id: 52,
          label: 'Egypt',
          value: 'Egypt',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/220px-Flag_of_Egypt.svg.png'
        },
        {
          id: 53,
          label: 'Zambia',
          value: 'Zambia',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Zambia_%28Pantone%29.svg/2100px-Flag_of_Zambia_%28Pantone%29.svg.png'
        },
        {
          id: 54,
          label: 'Zimbabwe',
          value: 'Zimbabwe',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/zimbabwe/flag-400.png'
        },
        {
          id: 55,
          label: 'Israel',
          value: 'Israel',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/660px-Flag_of_Israel.svg.png'
        },
        {
          id: 56,
          label: 'India',
          value: 'India',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png'
        }
      ]
    }
  },
  methods: {
    setAnswer() {
      if(this.answer == this.selectedFlag.label) {
        this.score++
      } else {
        this.score = 0
      }
      this.initialGame()
    },
    initialGame() {
      let idx = _.shuffle(_.range(0, this.countries.length - 1)).slice(0,5)
      this.currentFlags = idx.map(i => {
        return this.countries[i]
      });
      this.selectedFlag = this.currentFlags[_.random(this.currentFlags.length - 1)]
    },
    reset() {
      this.score = 0;
      this.initialGame();
    }
  },
  created() {
    this.initialGame()
  }
}
</script>

<style lang="scss">
  .answer-form {
    width: 43vh
  }
  .score-bar {
    border-radius: 4px;
  }
</style>
