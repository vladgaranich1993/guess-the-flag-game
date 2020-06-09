<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="setAnswer" class="flex flex-center">
      
      <div class="q-pa-md">
        <q-banner inline-actions class="text-white bg-orange q-mb-xs score-bar">
          <div>Your Score: <b>{{score}}</b></div>
          <div>Your Record: <b>{{highScore}}</b></div>
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
          <q-btn @click="reset" label="Reset" color="negative"/>
        </div>
      </div>

      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">Incorrect!</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            The right answer is <b>{{selectedFlag.label}}</b>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Play again" color="primary" @click="initialGame" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

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
      highScore: 0,
      alert: false,
      confirm: false,
      currentFlags: []
    }
  },
  computed: {
    allFlags() {
      return this.$store.getters.allFlags
    }
  },
  methods: {
    setAnswer() {
      if(this.answer == this.selectedFlag.label) {
        this.score++;
        this.initialGame();
      } else {
        this.score = 0;
        this.alert = true;
      }
      
      this.getHighScore();
    },
    initialGame() {
      let idx = _.shuffle(_.range(0, this.allFlags.length - 1)).slice(0,5);
      this.currentFlags = idx.map(i => {
        return this.allFlags[i];
      });
      this.selectedFlag = this.currentFlags[_.random(this.currentFlags.length - 1)];
    },
    reset() {
      this.score = 0;
      this.initialGame();
    },
    getHighScore() {
      if(this.score > this.highScore) {
        this.highScore = this.score;
      }
    }
  },
  created() {
    this.initialGame();
    this.getHighScore();
  },
  mounted() {
    if (localStorage.highScore) {
      this.highScore = localStorage.highScore;
    }
  },
  watch: {
    highScore(newHighScore) {
      localStorage.highScore = newHighScore;
    }
  }
}
</script>

<style lang="scss">
  .answer-form {
    width: 43vh;
  }
  .score-bar {
    border-radius: 4px;
  }
</style>
