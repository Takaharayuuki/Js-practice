<template>
  <div>
    <h1 class="questionnaire-title">Quiz</h1>
    <div class="questionnaire">
      <p>Q.問題文サンプル問題文サンプル問題文サンプル問題文サンプル問題文サンプル問題文サンプル</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz"

}
</script>

<style lang="scss">
.questionnaire {
  font-size: 20px;

  > p {
    margin-bottom: 30px;
  }
}

.questionnaire-title {
  margin-bottom: 40px;
}
</style>