(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0565":function(a,i,e){"use strict";var n=e("1aee"),o=e.n(n);o.a},"1aee":function(a,i,e){},"8b24":function(a,i,e){"use strict";e.r(i);var n=function(){var a=this,i=a.$createElement,e=a._self._c||i;return e("q-page",{staticClass:"flex flex-center"},[e("q-form",{staticClass:"flex flex-center",on:{submit:function(i){return i.preventDefault(),a.setAnswer(i)}}},[e("div",{staticClass:"q-pa-md"},[e("q-banner",{staticClass:"text-white bg-orange q-mb-xs score-bar",attrs:{"inline-actions":""}},[e("div",[a._v("Your score: "),e("b",[a._v(a._s(a.score))])]),e("div",[a._v("Your hiscore: "),e("b",[a._v(a._s(a.hiScore))])])]),e("div",{staticClass:"col-4"},[e("q-img",{attrs:{src:a.selectedFlag.url,ratio:16/9}})],1),e("q-btn-toggle",{staticClass:"column answer-form",attrs:{"toggle-color":"positive",options:a.currentFlags},model:{value:a.answer,callback:function(i){a.answer=i},expression:"answer"}}),e("div",{staticClass:"q-mt-md flex justify-between"},[e("q-btn",{attrs:{label:"Check",type:"submit",color:"secondary"}}),e("q-btn",{attrs:{label:"Reset",color:"negative"},on:{click:a.reset}})],1)],1)])],1)},o=[],l={name:"PageIndex",data:function(){return{answer:"",selectedFlag:"",score:0,hiScore:0,currentFlags:[],countries:[{id:1,label:"Australia",value:"Australia",continent:"Australia",url:"https://cdn.webshopapp.com/shops/94414/files/53448798/australia-flag-icon-free-download.jpg"},{id:2,label:"Austria",value:"Austria",continent:"Europe",url:"https://cdn.countryflags.com/thumbs/austria/flag-400.png"},{id:3,label:"Azerbaijan",value:"Azerbaijan",continent:"Asia",url:"https://cdn.webshopapp.com/shops/94414/files/53480562/azerbaijan-flag-icon-free-download.jpg"},{id:4,label:"Albania",value:"Albania",continent:"Europe",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2000px-Flag_of_Albania.svg.png"},{id:5,label:"Algeria",value:"Algeria",continent:"Africa",url:"https://cdn.webshopapp.com/shops/94414/files/53432190/algeria-flag-icon-free-download.jpg"},{id:6,label:"Angola",value:"Angola",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/900px-Flag_of_Angola.svg.png"},{id:7,label:"Andorra",value:"Andorra",continent:"Europe",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1280px-Flag_of_Andorra.svg.png"},{id:8,label:"Antigua and Barbuda",value:"Antigua and Barbuda",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/2000px-Flag_of_Antigua_and_Barbuda.svg.png"},{id:9,label:"Argentina",value:"Argentina",continent:"America",url:"https://cdn.countryflags.com/thumbs/argentina/flag-400.png"},{id:10,label:"Armenia",value:"Armenia",continent:"Asia",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/2000px-Flag_of_Armenia.svg.png"},{id:11,label:"Afganistan",value:"Afganistan",continent:"Asia",url:"https://cdn.countryflags.com/thumbs/afghanistan/flag-400.png"},{id:12,label:"Bahamas",value:"Bahamas",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/2000px-Flag_of_the_Bahamas.svg.png"},{id:13,label:"Bangladesh",value:"Bangladesh",continent:"Asia",url:"https://cdn.countryflags.com/thumbs/bangladesh/flag-400.png"},{id:14,label:"Barbados",value:"Barbados",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/1280px-Flag_of_Barbados.svg.png"},{id:15,label:"Bahrein",value:"Bahrein",continent:"Asia",url:"https://cdn.countryflags.com/thumbs/bahrain/flag-400.png"},{id:16,label:"Belarus",value:"Belarus",continent:"Europe",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/2000px-Flag_of_Belarus.svg.png"},{id:17,label:"Belize",value:"Belize",continent:"America",url:"https://thumbs.dreamstime.com/b/%D1%84%D0%BB%D0%B0%D0%B3-belize-6891521.jpg"},{id:18,label:"Belgium",value:"Belgium",continent:"Europe",url:"https://kubilive.com/wp-content/uploads/2019/04/Belgium.png"},{id:19,label:"Benin",value:"Benin",continent:"Africa",url:"https://cdn.countryflags.com/thumbs/benin/flag-400.png"},{id:20,label:"Bulgaria",value:"Bulgaria",continent:"Europe",url:"https://cdn.countryflags.com/thumbs/bulgaria/flag-400.png"},{id:21,label:"Bolivia",value:"Bolivia",continent:"America",url:"https://cdn.webshopapp.com/shops/94414/files/53546814/bolivia-flag-icon-free-download.jpg"},{id:22,label:"Bosnia and Herzegovina",value:"Bosnia and Herzegovina",continent:"Europe",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/2000px-Flag_of_Bosnia_and_Herzegovina.svg.png"},{id:23,label:"Botswana",value:"Botswana",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/2000px-Flag_of_Botswana.svg.png"},{id:24,label:"Brazil",value:"Brazil",continent:"America",url:"https://cdn.webshopapp.com/shops/94414/files/53556974/brazil-flag-icon-free-download.jpg"},{id:25,label:"Brunei",value:"Brunei",continent:"Asia",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/2000px-Flag_of_Brunei.svg.png"},{id:26,label:"Burkina Faso",value:"Burkina Faso",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/2000px-Flag_of_Burkina_Faso.svg.png"},{id:27,label:"Burundi",value:"Burundi",continent:"Africa",url:"https://cdn.webshopapp.com/shops/94414/files/53595286/burundi-flag-icon-free-download.jpg"},{id:28,label:"Bhutan",value:"Bhutan",continent:"Asia",url:"https://cdn.countryflags.com/thumbs/bhutan/flag-400.png"},{id:29,label:"Vanuatu",value:"Vanuatu",continent:"Oceania",url:"https://upload.wikimedia.org/wikipedia/commons/0/06/Vanuatu_flag_300.png"},{id:30,label:"United Kingdom",value:"United Kingdom",continent:"Europe",url:"https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png"},{id:31,label:"Hungary",value:"Hungary",continent:"Europe",url:"https://cdn.webshopapp.com/shops/94414/files/54022578/hungary-flag-icon-free-download.jpg"},{id:32,label:"Venezuela",value:"Venezuela",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1280px-Flag_of_Venezuela.svg.png"},{id:33,label:"East Timor",value:"East Timor",continent:"Asia",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png"},{id:34,label:"Vietnam",value:"Vietnam",continent:"Asia",url:"https://cdn.webshopapp.com/shops/94414/files/54968390/vietnam-flag-icon-free-download.jpg"},{id:35,label:"Gabon",value:"Gabon",continent:"Africa",url:"https://cdn.countryflags.com/thumbs/gabon/flag-400.png"},{id:36,label:"Haiti",value:"Haiti",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1280px-Flag_of_Haiti.svg.png"},{id:37,label:"Guyana",value:"Guyana",continent:"America",url:"https://cdn.countryflags.com/thumbs/guyana/flag-400.png"},{id:38,label:"The Gambia",value:"The Gambia",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/2000px-Flag_of_The_Gambia.svg.png"},{id:39,label:"Ghana",value:"Ghana",continent:"Africa",url:"https://cdn.webshopapp.com/shops/94414/files/54009472/ghana-flag-icon-free-download.jpg"},{id:40,label:"Guatemala",value:"Guatemala",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1280px-Flag_of_Guatemala.svg.png"},{id:41,label:"Guinea",value:"Guinea",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/1280px-Flag_of_Guinea.svg.png"},{id:42,label:"Guinea-Bissau",value:"Guinea-Bissau",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1280px-Flag_of_Guinea-Bissau.svg.png"},{id:43,label:"Germany",value:"Germany",continent:"Europe",url:"https://keskraamatukogu.ee/wp-content/uploads/2019/10/german-flag.jpg"},{id:44,label:"Honduras",value:"Honduras",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1280px-Flag_of_Honduras.svg.png"},{id:45,label:"Grenada",value:"Grenada",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/2000px-Flag_of_Grenada.svg.png"},{id:46,label:"Greece",value:"Greece",continent:"Europe",url:"https://cdn.webshopapp.com/shops/94414/files/54013896/greece-flag-icon-free-download.jpg"},{id:47,label:"Georgia",value:"Georgia",continent:"Europe",url:"https://cdn.countryflags.com/thumbs/georgia/flag-400.png"},{id:48,label:"Denmark",value:"Denmark",continent:"Europe",url:"https://cdn.webshopapp.com/shops/94414/files/53828000/denmark-flag-icon-free-download.jpg"},{id:49,label:"Djibouti",value:"Djibouti",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/2000px-Flag_of_Djibouti.svg.png"},{id:50,label:"Dominica",value:"Dominica",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/1280px-Flag_of_Dominica.svg.png"},{id:51,label:"Dominican Republic",value:"Dominican Republic",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png"},{id:52,label:"Egypt",value:"Egypt",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/220px-Flag_of_Egypt.svg.png"},{id:53,label:"Zambia",value:"Zambia",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Zambia_%28Pantone%29.svg/2100px-Flag_of_Zambia_%28Pantone%29.svg.png"},{id:54,label:"Zimbabwe",value:"Zimbabwe",continent:"Africa",url:"https://cdn.countryflags.com/thumbs/zimbabwe/flag-400.png"},{id:55,label:"Israel",value:"Israel",continent:"Asia",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/660px-Flag_of_Israel.svg.png"},{id:56,label:"India",value:"India",continent:"Asia",url:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"},{id:57,label:"Indonesia",value:"Indonesia",continent:"Asia",url:"https://cdn.webshopapp.com/shops/94414/files/54029380/indonesia-flag-icon-free-download.jpg"},{id:58,label:"Jordan",value:"Jordan",continent:"Asia",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1280px-Flag_of_Jordan.svg.png"},{id:59,label:"Iraq",value:"Iraq",continent:"Asia",url:"https://cdn.webshopapp.com/shops/94414/files/54030706/iraq-flag-icon-free-download.jpg"},{id:60,label:"Iran",value:"Iran",continent:"Asia",url:"https://cdn.webshopapp.com/shops/94414/files/54029446/iran-flag-icon-free-download.jpg"},{id:61,label:"Republic of Ireland",value:"Republic of Ireland",continent:"Europe",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/2000px-Flag_of_Ireland.svg.png"},{id:62,label:"Iceland",value:"Iceland",continent:"Europe",url:"https://cdn.countryflags.com/thumbs/iceland/flag-400.png"},{id:63,label:"Spain",value:"Spain",continent:"Europe",url:"https://cdn.webshopapp.com/shops/94414/files/54944160/spain-flag-icon-free-download.jpg"},{id:64,label:"Italy",value:"Italy",continent:"Europe",url:"https://cdn.countryflags.com/thumbs/italy/flag-400.png"},{id:65,label:"Yemen",value:"Yemen",continent:"Asia",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1280px-Flag_of_Yemen.svg.png"},{id:66,label:"Cape Verde",value:"Cape Verde",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/2000px-Flag_of_Cape_Verde.svg.png"},{id:67,label:"Kazakhstan",value:"Kazakhstan",continent:"Asia",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdHnKSBEUOzIFsFujQNPAHAj7Re4hCSeOeZhhzy4zqLZds1jN2&usqp=CAU"},{id:68,label:"Cambodia",value:"Cambodia",continent:"Asia",url:"https://cdn.webshopapp.com/shops/94414/files/53596646/cambodia-flag-icon-free-download.jpg"},{id:69,label:"Cameroon",value:"Cameroon",continent:"Africa",url:"https://cdn10.bigcommerce.com/s-ey7tq/products/3136/images/18877/cameroon-flag__55015.1575478846.1280.1280.jpg?c=2"},{id:70,label:"Canada",value:"Canada",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/2000px-Flag_of_Canada.svg.png"},{id:71,label:"Qatar",value:"Qatar",continent:"Asia",url:"https://cdn.countryflags.com/thumbs/qatar/flag-400.png"},{id:72,label:"Kenya",value:"Kenya",continent:"Africa",url:"https://cdn.webshopapp.com/shops/94414/files/54353572/kenya-flag-icon-free-download.jpg"},{id:73,label:"Cyprus",value:"Cyprus",continent:"Europe",url:"https://cdn.webshopapp.com/shops/94414/files/53821848/cyprus-flag-icon-free-download.jpg"},{id:74,label:"Kyrgyzstan",value:"Kyrgyzstan",continent:"Asia",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/2000px-Flag_of_Kyrgyzstan.svg.png"},{id:75,label:"Kiribati",value:"Kiribati",continent:"Oceania",url:"https://cdn.countryflags.com/thumbs/kiribati/flag-400.png"},{id:76,label:"China",value:"China",continent:"Asia",url:"https://cdn.webshopapp.com/shops/94414/files/53642776/china-flag-icon-free-download.jpg"},{id:77,label:"Colombia",value:"Colombia",continent:"America",url:"https://cdn.webshopapp.com/shops/94414/files/53783904/colombia-flag-icon-free-download.jpg"},{id:78,label:"Comoros",value:"Comoros",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/2000px-Flag_of_the_Comoros.svg.png"},{id:79,label:"Republic of the Congo",value:"Republic of the Congo",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/1280px-Flag_of_the_Republic_of_the_Congo.svg.png"},{id:80,label:"Democratic Republic of the Congo",value:"Democratic Republic of the Congo",continent:"Africa",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/800px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png"},{id:81,label:"North Korea",value:"North Korea",continent:"Asia",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1600px-Flag_of_North_Korea.svg.png"},{id:82,label:"South Korea",value:"South Korea",continent:"Asia",url:"https://cdn.webshopapp.com/shops/94414/files/54354268/south-korea-flag-icon-free-download.jpg"},{id:83,label:"Costa Rica",value:"Costa Rica",continent:"America",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/1280px-Flag_of_Costa_Rica_%28state%29.svg.png"},{id:84,label:"Ivory Coast",value:"Ivory Coast",continent:"Africa",url:"https://cdn.webshopapp.com/shops/94414/files/54034622/cote-d-ivoire-flag-icon-free-download.jpg"},{id:85,label:"Cuba",value:"Cuba",continent:"America",url:"https://cdn.countryflags.com/thumbs/cuba/flag-400.png"},{id:86,label:"",value:"",continent:"",url:""}]}},methods:{setAnswer:function(){this.answer==this.selectedFlag.label?(this.score++,this.getHiscore()):(this.score=0,this.getHiscore()),this.initialGame()},initialGame:function(){var a=this,i=_.shuffle(_.range(0,this.countries.length-1)).slice(0,5);this.currentFlags=i.map((function(i){return a.countries[i]})),this.selectedFlag=this.currentFlags[_.random(this.currentFlags.length-1)]},reset:function(){this.score=0,this.initialGame()},getHiscore:function(){this.score>this.hiScore&&(this.hiScore=this.score)}},created:function(){this.initialGame(),this.getHiscore()},mounted:function(){localStorage.hiScore&&(this.hiScore=localStorage.hiScore)},watch:{hiScore:function(a){localStorage.hiScore=a}}},t=l,s=(e("0565"),e("2877")),r=e("eebe"),u=e.n(r),c=e("9989"),p=e("0378"),g=e("54e1"),d=e("068f"),m=e("6a67"),h=e("9c40"),b=Object(s["a"])(t,n,o,!1,null,null,null);i["default"]=b.exports;u()(b,"components",{QPage:c["a"],QForm:p["a"],QBanner:g["a"],QImg:d["a"],QBtnToggle:m["a"],QBtn:h["a"]})}}]);