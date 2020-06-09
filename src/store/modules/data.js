export default {
    actions: {},
    mutations: {
      setAnswer() {
        if(this.answer == this.selectedFlag.label) {
          this.setScore++;
          this.initialGame();
        } else {
          this.setScore = 0;
          this.alert = true;
        }
        this.getHighScore();
      }
    },
    getters: {
      allFlags(state) {
        return state.countries
      },
      setScore(state) {
        return state.score
      }
    },
    state: {
      score: 0,
      highScore: 0,
      answer: '',
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
        },
        {
          id: 57,
          label: 'Indonesia',
          value: 'Indonesia',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54029380/indonesia-flag-icon-free-download.jpg'
        },
        {
          id: 58,
          label: 'Jordan',
          value: 'Jordan',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1280px-Flag_of_Jordan.svg.png'
        },
        {
          id: 59,
          label: 'Iraq',
          value: 'Iraq',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54030706/iraq-flag-icon-free-download.jpg'
        },
        {
          id: 60,
          label: 'Iran',
          value: 'Iran',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54029446/iran-flag-icon-free-download.jpg'
        },
        {
          id: 61,
          label: 'Republic of Ireland',
          value: 'Republic of Ireland',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/2000px-Flag_of_Ireland.svg.png'
        },
        {
          id: 62,
          label: 'Iceland',
          value: 'Iceland',
          continent: 'Europe',
          url: 'https://cdn.countryflags.com/thumbs/iceland/flag-400.png'
        },
        {
          id: 63,
          label: 'Spain',
          value: 'Spain',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54944160/spain-flag-icon-free-download.jpg'
        },
        {
          id: 64,
          label: 'Italy',
          value: 'Italy',
          continent: 'Europe',
          url: 'https://cdn.countryflags.com/thumbs/italy/flag-400.png'
        },
        {
          id: 65,
          label: 'Yemen',
          value: 'Yemen',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1280px-Flag_of_Yemen.svg.png'
        },
        {
          id: 66,
          label: 'Cape Verde',
          value: 'Cape Verde',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/2000px-Flag_of_Cape_Verde.svg.png'
        },
        {
          id: 67,
          label: 'Kazakhstan',
          value: 'Kazakhstan',
          continent: 'Asia',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdHnKSBEUOzIFsFujQNPAHAj7Re4hCSeOeZhhzy4zqLZds1jN2&usqp=CAU'
        },
        {
          id: 68,
          label: 'Cambodia',
          value: 'Cambodia',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53596646/cambodia-flag-icon-free-download.jpg'
        },
        {
          id: 69,
          label: 'Cameroon',
          value: 'Cameroon',
          continent: 'Africa',
          url: 'https://cdn10.bigcommerce.com/s-ey7tq/products/3136/images/18877/cameroon-flag__55015.1575478846.1280.1280.jpg?c=2'
        },
        {
          id: 70,
          label: 'Canada',
          value: 'Canada',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/2000px-Flag_of_Canada.svg.png'
        },
        {
          id: 71,
          label: 'Qatar',
          value: 'Qatar',
          continent: 'Asia',
          url: 'https://cdn.countryflags.com/thumbs/qatar/flag-400.png'
        },
        {
          id: 72,
          label: 'Kenya',
          value: 'Kenya',
          continent: 'Africa',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54353572/kenya-flag-icon-free-download.jpg'
        },
        {
          id: 73,
          label: 'Cyprus',
          value: 'Cyprus',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53821848/cyprus-flag-icon-free-download.jpg'
        },
        {
          id: 74,
          label: 'Kyrgyzstan',
          value: 'Kyrgyzstan',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/2000px-Flag_of_Kyrgyzstan.svg.png'
        },
        {
          id: 75,
          label: 'Kiribati',
          value: 'Kiribati',
          continent: 'Oceania',
          url: 'https://cdn.countryflags.com/thumbs/kiribati/flag-400.png'
        },
        {
          id: 76,
          label: 'China',
          value: 'China',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53642776/china-flag-icon-free-download.jpg'
        },
        {
          id: 77,
          label: 'Colombia',
          value: 'Colombia',
          continent: 'America',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53783904/colombia-flag-icon-free-download.jpg'
        },
        {
          id: 78,
          label: 'Comoros',
          value: 'Comoros',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/2000px-Flag_of_the_Comoros.svg.png'
        },
        {
          id: 79,
          label: 'Republic of the Congo',
          value: 'Republic of the Congo',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/1280px-Flag_of_the_Republic_of_the_Congo.svg.png'
        },
        {
          id: 80,
          label: 'Democratic Republic of the Congo',
          value: 'Democratic Republic of the Congo',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/800px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png'
        },
        {
          id: 81,
          label: 'North Korea',
          value: 'North Korea',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1600px-Flag_of_North_Korea.svg.png'
        },
        {
          id: 82,
          label: 'South Korea',
          value: 'South Korea',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54354268/south-korea-flag-icon-free-download.jpg'
        },
        {
          id: 83,
          label: 'Costa Rica',
          value: 'Costa Rica',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/1280px-Flag_of_Costa_Rica_%28state%29.svg.png'
        },
        {
          id: 84,
          label: 'Ivory Coast',
          value: 'Ivory Coast',
          continent: 'Africa',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54034622/cote-d-ivoire-flag-icon-free-download.jpg'
        },
        {
          id: 85,
          label: 'Cuba',
          value: 'Cuba',
          continent: 'America',
          url: 'https://cdn.countryflags.com/thumbs/cuba/flag-400.png'
        },
        {
          id: 86,
          label: 'Kuwait',
          value: 'Kuwait',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54354784/kuwait-flag-icon-free-download.jpg'
        },
        {
          id: 87,
          label: 'Laos',
          value: 'Laos',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54362798/laos-flag-icon-free-download.jpg'
        },
        {
          id: 88,
          label: 'Latvia',
          value: 'Latvia',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54362990/latvia-flag-icon-free-download.jpg'
        },
        {
          id: 89,
          label: 'Lesotho',
          value: 'Lesotho',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/lesotho/flag-400.png'
        },
        {
          id: 90,
          label: 'Liberia',
          value: 'Liberia',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/liberia/flag-400.png'
        },
        {
          id: 91,
          label: 'Lebanon',
          value: 'Lebanon',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1280px-Flag_of_Lebanon.svg.png'
        },
        {
          id: 92,
          label: 'Libya',
          value: 'Libya',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/800px-Flag_of_Libya.svg.png'
        },
        {
          id: 93,
          label: 'Lithuania',
          value: 'Lithuania',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Lithuania.png/320px-Flag_of_Lithuania.png'
        },
        {
          id: 94,
          label: 'Liechtenstein',
          value: 'Liechtenstein',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/2000px-Flag_of_Liechtenstein.svg.png'
        },
        {
          id: 95,
          label: 'Luxembourg',
          value: 'Luxembourg',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1000px-Flag_of_Luxembourg.svg.png'
        },
        {
          id: 96,
          label: 'Mauritius',
          value: 'Mauritius',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/1280px-Flag_of_Mauritius.svg.png'
        },
        {
          id: 97,
          label: 'Mauritania',
          value: 'Mauritania',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/1280px-Flag_of_Mauritania.svg.png'
        },
        {
          id: 98,
          label: 'Madagascar',
          value: 'Madagascar',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/1280px-Flag_of_Madagascar.svg.png'
        },
        {
          id: 99,
          label: 'Malawi',
          value: 'Malawi',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/1280px-Flag_of_Malawi.svg.png'
        },
        {
          id: 100,
          label: 'Malaysia',
          value: 'Malaysia',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1280px-Flag_of_Malaysia.svg.png'
        },
        {
          id: 101,
          label: 'Mali',
          value: 'Mali',
          continent: 'Africa',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54376274/mali-flag-icon-free-download.jpg'
        },
        {
          id: 102,
          label: 'Maldives',
          value: 'Maldives',
          continent: 'Asia',
          url: 'https://cdn.countryflags.com/thumbs/maldives/flag-400.png'
        },
        {
          id: 103,
          label: 'Malta',
          value: 'Malta',
          continent: 'Europe',
          url: 'https://cdn.countryflags.com/thumbs/malta/flag-400.png'
        },
        {
          id: 104,
          label: 'Morocco',
          value: 'Morocco',
          continent: 'Africa',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54592314/morocco-flag-icon-free-download.jpg'
        },
        {
          id: 105,
          label: 'Marshall Islands',
          value: 'Marshall Islands',
          continent: 'Oceania',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/2000px-Flag_of_the_Marshall_Islands.svg.png'
        },
        {
          id: 106,
          label: 'Mexico',
          value: 'Mexico',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1024px-Flag_of_Mexico.svg.png'
        },
        {
          id: 107,
          label: 'Mozambique',
          value: 'Mozambique',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/mozambique/flag-400.png'
        },
        {
          id: 108,
          label: 'Moldova',
          value: 'Moldova',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1280px-Flag_of_Moldova.svg.png'
        },
        {
          id: 109,
          label: 'Monaco',
          value: 'Monaco',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Monaco_%28state%29_FICTIONAL.png'
        },
        {
          id: 110,
          label: 'Mongolia',
          value: 'Mongolia',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/2000px-Flag_of_Mongolia.svg.png'
        },
        {
          id: 111,
          label: 'Myanmar',
          value: 'Myanmar',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54592564/myanmar-flag-icon-free-download.jpg'
        },
        {
          id: 112,
          label: 'Namibia',
          value: 'Namibia',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/2000px-Flag_of_Namibia.svg.png'
        },
        {
          id: 113,
          label: 'Nauru',
          value: 'Nauru',
          continent: 'Oceania',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/2000px-Flag_of_Nauru.svg.png'
        },
        {
          id: 114,
          label: 'Nepal',
          value: 'Nepal',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Nepal_%28with_spacing%2C_aspect_ratio_4-3%29.svg/220px-Flag_of_Nepal_%28with_spacing%2C_aspect_ratio_4-3%29.svg.png'
        },
        {
          id: 115,
          label: 'Niger',
          value: 'Niger',
          continent: 'Africa',
          url: 'https://pngimage.net/wp-content/uploads/2018/06/niger-flag-png-8.png'
        },
        {
          id: 116,
          label: 'Nigeria',
          value: 'Nigeria',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1280px-Flag_of_Nigeria.svg.png'
        },
        {
          id: 117,
          label: 'Netherlands',
          value: 'Netherlands',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54693464/the-netherlands-flag-icon-free-download.jpg'
        },
        {
          id: 118,
          label: 'Nicaragua',
          value: 'Nicaragua',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/2000px-Flag_of_Nicaragua.svg.png'
        },
        {
          id: 119,
          label: 'New Zealand',
          value: 'New Zealand',
          continent: 'Oceania',
          url: 'https://cdn.countryflags.com/thumbs/new-zealand/flag-400.png'
        },
        {
          id: 120,
          label: 'Norway',
          value: 'Norway',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_Norway_%283-2%29.svg/640px-Flag_of_Norway_%283-2%29.svg.png'
        },
        {
          id: 121,
          label: 'United Arab Emirates',
          value: 'United Arab Emirates',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/2000px-Flag_of_the_United_Arab_Emirates.svg.png'
        },
        {
          id: 122,
          label: 'Oman',
          value: 'Oman',
          continent: 'Asia',
          url: 'https://cdn.countryflags.com/thumbs/oman/flag-400.png'
        },
        {
          id: 123,
          label: 'Pakistan',
          value: 'Pakistan',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Pakistan.png'
        },
        {
          id: 124,
          label: 'Palau',
          value: 'Palau',
          continent: 'Oceania',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/1280px-Flag_of_Palau.svg.png'
        },
        {
          id: 125,
          label: 'Panama',
          value: 'Panama',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/640px-Flag_of_Panama.svg.png'
        },
        {
          id: 126,
          label: 'Papua New Guinea',
          value: 'Papua New Guinea',
          continent: 'Oceania',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/2000px-Flag_of_Papua_New_Guinea.svg.png'
        },
        {
          id: 127,
          label: 'Paraguay',
          value: 'Paraguay',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/2000px-Flag_of_Paraguay.svg.png'
        },
        {
          id: 128,
          label: 'Peru',
          value: 'Peru',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Peru_%281825-1950%29.svg/1280px-Flag_of_Peru_%281825-1950%29.svg.png'
        },
        {
          id: 129,
          label: 'Poland',
          value: 'Poland',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54940026/poland-flag-icon-free-download.jpg'
        },
        {
          id: 130,
          label: 'Portugal',
          value: 'Portugal',
          continent: 'Europe',
          url: 'https://cdn.countryflags.com/thumbs/portugal/flag-400.png'
        },
        {
          id: 131,
          label: 'Russia',
          value: 'Russia',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54940454/russia-flag-icon-free-download.jpg'
        },
        {
          id: 132,
          label: 'Rwanda',
          value: 'Rwanda',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/2000px-Flag_of_Rwanda.svg.png'
        },
        {
          id: 133,
          label: 'Romania',
          value: 'Romania',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54940396/romania-flag-icon-free-download.jpg'
        },
        {
          id: 134,
          label: 'El Salvador',
          value: 'El Salvador',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1280px-Flag_of_El_Salvador.svg.png'
        },
        {
          id: 135,
          label: 'Samoa',
          value: 'Samoa',
          continent: 'Oceania',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/2880px-Flag_of_Samoa.svg.png'
        },
        {
          id: 136,
          label: 'San Marino',
          value: 'San Marino',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/1280px-Flag_of_San_Marino.svg.png'
        },
        {
          id: 137,
          label: 'São Tomé and Príncipe',
          value: 'São Tomé and Príncipe',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Sao_Tome_and_Principe.svg/2000px-Flag_of_Sao_Tome_and_Principe.svg.png'
        },
        {
          id: 138,
          label: 'Saudi Arabia',
          value: 'Saudi Arabia',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54941496/saudi-arabia-flag-icon-free-download.jpg'
        },
        {
          id: 139,
          label: 'North Macedonia',
          value: 'North Macedonia',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1280px-Flag_of_North_Macedonia.svg.png'
        },
        {
          id: 140,
          label: 'Seychelles',
          value: 'Seychelles',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/900px-Flag_of_Seychelles.svg.png'
        },
        {
          id: 141,
          label: 'Senegal',
          value: 'Senegal',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/senegal/flag-400.png'
        },
        {
          id: 142,
          label: 'Saint Vincent and the Grenadines',
          value: 'Saint Vincent and the Grenadines',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/1280px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png'
        },
        {
          id: 143,
          label: 'Saint Kitts and Nevis',
          value: 'Saint Kitts and Nevis',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/2000px-Flag_of_Saint_Kitts_and_Nevis.svg.png'
        },
        {
          id: 144,
          label: 'Saint Lucia',
          value: 'Saint Lucia',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/1280px-Flag_of_Saint_Lucia.svg.png'
        },
        {
          id: 145,
          label: 'Serbia',
          value: 'Serbia',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54942182/serbia-flag-icon-free-download.jpg'
        },
        {
          id: 146,
          label: 'Singapore',
          value: 'Singapore',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/4320px-Flag_of_Singapore.svg.png'
        },
        {
          id: 147,
          label: 'Syria',
          value: 'Syria',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/900px-Flag_of_Syria.svg.png'
        },
        {
          id: 148,
          label: 'Slovakia',
          value: 'Slovakia',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54943274/slovakia-flag-icon-free-download.jpg'
        },
        {
          id: 149,
          label: 'Slovenia',
          value: 'Slovenia',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54943414/slovenia-flag-icon-free-download.jpg'
        },
        {
          id: 150,
          label: 'United States',
          value: 'United States',
          continent: 'America',
          url: 'https://images-na.ssl-images-amazon.com/images/I/61lCYSSxGTL._AC_SY606_.jpg'
        },
        {
          id: 151,
          label: 'Solomon Islands',
          value: 'Solomon Islands',
          continent: 'Oceania',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/1280px-Flag_of_the_Solomon_Islands.svg.png'
        },
        {
          id: 152,
          label: 'Somalia',
          value: 'Somalia',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/somalia/flag-400.png'
        },
        {
          id: 153,
          label: 'Sudan',
          value: 'Sudan',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/1280px-Flag_of_Sudan.svg.png'
        },
        {
          id: 154,
          label: 'Suriname',
          value: 'Suriname',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1280px-Flag_of_Suriname.svg.png'
        },
        {
          id: 155,
          label: 'Sierra Leone',
          value: 'Sierra Leone',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/1280px-Flag_of_Sierra_Leone.svg.png'
        },
        {
          id: 156,
          label: 'Tajikistan',
          value: 'Tajikistan',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54946456/tajikistan-flag-icon-free-download.jpg'
        },
        {
          id: 157,
          label: 'Thailand',
          value: 'Thailand',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1280px-Flag_of_Thailand.svg.png'
        },
        {
          id: 158,
          label: 'Tanzania',
          value: 'Tanzania',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/tanzania/flag-400.png'
        },
        {
          id: 159,
          label: 'Togo',
          value: 'Togo',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/2000px-Flag_of_Togo.svg.png'
        },
        {
          id: 160,
          label: 'Tonga',
          value: 'Tonga',
          continent: 'Oceania',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/1280px-Flag_of_Tonga.svg.png'
        },
        {
          id: 161,
          label: 'Trinidad and Tobago',
          value: 'Trinidad and Tobago',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/2000px-Flag_of_Trinidad_and_Tobago.svg.png'
        },
        {
          id: 162,
          label: 'Tuvalu',
          value: 'Tuvalu',
          continent: 'Oceania',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/1280px-Flag_of_Tuvalu.svg.png'
        },
        {
          id: 163,
          label: 'Tunisia',
          value: 'Tunisia',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/tunisia/flag-400.png'
        },
        {
          id: 164,
          label: 'Turkmenistan',
          value: 'Turkmenistan',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Turkmenistan_flag_300.png'
        },
        {
          id: 165,
          label: 'Turkey',
          value: 'Turkey',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54949672/turkey-flag-icon-free-download.jpg'
        },
        {
          id: 166,
          label: 'Uganda',
          value: 'Uganda',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/uganda/flag-400.png'
        },
        {
          id: 167,
          label: 'Uzbekistan',
          value: 'Uzbekistan',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Uzbekistan.png'
        },
        {
          id: 168,
          label: 'Ukraine',
          value: 'Ukraine',
          continent: 'Europe',
          url: 'https://cdn.countryflags.com/thumbs/ukraine/flag-400.png'
        },
        {
          id: 169,
          label: 'Uruguay',
          value: 'Uruguay',
          continent: 'America',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png'
        },
        {
          id: 170,
          label: 'Federated States of Micronesia',
          value: 'Federated States of Micronesia',
          continent: 'Oceania',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/760px-Flag_of_the_Federated_States_of_Micronesia.svg.png'
        },
        {
          id: 171,
          label: 'Fiji',
          value: 'Fiji',
          continent: 'Oceania',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/1280px-Flag_of_Fiji.svg.png'
        },
        {
          id: 172,
          label: 'Philippines',
          value: 'Philippines',
          continent: 'Asia',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1280px-Flag_of_the_Philippines.svg.png'
        },
        {
          id: 173,
          label: 'Finland',
          value: 'Finland',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Finland.png'
        },
        {
          id: 174,
          label: 'France',
          value: 'France',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png'
        },
        {
          id: 175,
          label: 'Croatia',
          value: 'Croatia',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53815868/croatia-flag-image-free-download.jpg'
        },
        {
          id: 176,
          label: 'Central African Republic',
          value: 'Central African Republic',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_the_Central_African_Republic.png'
        },
        {
          id: 177,
          label: 'Chad',
          value: 'Chad',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/1280px-Flag_of_Chad.svg.png'
        },
        {
          id: 178,
          label: 'Montenegro',
          value: 'Montenegro',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54591718/montenegro-flag-icon-free-download.jpg'
        },
        {
          id: 179,
          label: 'Czech Republic',
          value: 'Czech Republic',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53825012/the-czech-republic-flag-icon-free-download.jpg'
        },
        {
          id: 180,
          label: 'Chile',
          value: 'Chile',
          continent: 'America',
          url: 'https://cdn.countryflags.com/thumbs/chile/flag-400.png'
        },
        {
          id: 181,
          label: 'Switzerland',
          value: 'Switzerland',
          continent: 'Europe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Civil_Ensign_of_Switzerland.svg/1500px-Civil_Ensign_of_Switzerland.svg.png'
        },
        {
          id: 182,
          label: 'Sweden',
          value: 'Sweden',
          continent: 'Europe',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54945896/sweden-flag-image-free-download.jpg'
        },
        {
          id: 183,
          label: 'Sri Lanka',
          value: 'Sri Lanka',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54944340/sri-lanka-flag-icon-free-download.jpg'
        },
        {
          id: 184,
          label: 'Ecuador',
          value: 'Ecuador',
          continent: 'America',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53851066/ecuador-flag-image-free-download.jpg'
        },
        {
          id: 185,
          label: 'Equatorial Guinea',
          value: 'Equatorial Guinea',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/1280px-Flag_of_Equatorial_Guinea.svg.png'
        },
        {
          id: 186,
          label: 'Eritrea',
          value: 'Eritrea',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/1024px-Flag_of_Eritrea.svg.png'
        },
        {
          id: 187,
          label: 'Eswatini',
          value: 'Eswatini',
          continent: 'Africa',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/800px-Flag_of_Eswatini.svg.png'
        },
        {
          id: 188,
          label: 'Estonia',
          value: 'Estonia',
          continent: 'Europe',
          url: 'https://cdn.countryflags.com/thumbs/estonia/flag-400.png'
        },
        {
          id: 189,
          label: 'Ethiopia',
          value: 'Ethiopia',
          continent: 'Africa',
          url: 'https://cdn.webshopapp.com/shops/94414/files/53992256/ethiopia-flag-image-free-download.jpg'
        },
        {
          id: 190,
          label: 'South Africa',
          value: 'South Africa',
          continent: 'Africa',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54943642/south-africa-flag-icon-free-download.jpg'
        },
        {
          id: 191,
          label: 'South Sudan',
          value: 'South Sudan',
          continent: 'Africa',
          url: 'https://cdn.countryflags.com/thumbs/south-sudan/flag-400.png'
        },
        {
          id: 192,
          label: 'Jamaica',
          value: 'Jamaica',
          continent: 'America',
          url: 'https://cdn.countryflags.com/thumbs/jamaica/flag-400.png'
        },
        {
          id: 193,
          label: 'Japan',
          value: 'Japan',
          continent: 'Asia',
          url: 'https://cdn.webshopapp.com/shops/94414/files/54037182/japan-flag-icon-free-download.jpg'
        }
      ]
    }
}