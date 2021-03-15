<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <quiz />
    <ul style="display:flex; justify-content: center;">
      <li v-for="(answer, index) in answers" :key="answer.id" style="listStyle: none; display:flex; margin-right: 10px;">
        <question-card
        :answer="answer.text"
        :index="index"
        ></question-card>
      </li>
    </ul>
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue'
import QuestionCard from './components/QuestionCard.vue'

export default {
  name: 'App',
  components: {
    Quiz,
    QuestionCard
  },
  data() {
    return {
      answers: [
        {
          text:'sample answer1'
        },
        {
          text:'sample answer2'
        },
        {
          text:'sample answer3'
        }
      ]
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
