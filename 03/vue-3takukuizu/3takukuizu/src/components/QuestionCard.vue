<template>
  <a class="question-card">
    <div class="question-numBox">
      <span class="question-num">{{ index + 1 }}</span>
    </div>
    <div class="question-answerBox">
      <p class="question-answer">
        {{ answer }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: "QuestionCard",
  props:[
  'answer',
  'index'
]

}
</script>

<style lang="scss">
.question-card {
  cursor: pointer;
  display: inline-block;
  height: 300px;
  width: 300px;
  background-color: #4FC08D;
  &:hover {
    opacity: 0.7;
  }
}

.question-num {
  display: inline-block;
  border-radius:100%;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff;
  margin-top: 15px;
  margin-left: 15px;
}

.question-numBox {
  text-align: left;
}

.question-answerBox {
  margin-top: 90px;
  color: #fff;
  font-size: 20px;
}
</style>