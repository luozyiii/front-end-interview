<template>
  <div>
    <p>输入框：{{ name }}</p>
    <input type="text" v-model.trim="name">
    <input type="text" v-model.lazy="name">
    <input type="text" v-model.number="name">

    <p>多行文本：{{ desc }}</p>
    <textarea v-model="desc"></textarea>
    <!-- 注意：<textarea>{{ desc }}</textarea> 是不允许的！！！ -->

    <p>复选框：{{ checked }}</p>
    <input type="checkbox" v-model="checked">

    <p>多个复选框：{{ checkedNames }}</p>
    <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
    <label for="jack">jack</label>
    <input type="checkbox" id="john" value="john" v-model="checkedNames">
    <label for="john">john</label>

    <p>单选：{{ gender }}</p>
    <input type="radio" id="male" value="male" v-model="gender">
    <label for="male">男</label>
    <input type="radio" id="female" value="female" v-model="gender">
    <label for="female">女</label>

    <p>下拉列表选择（单选） {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <p>下拉列表选择（多选） {{ selectedList }}</p>
    <select v-model="selectedList" multiple>
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'leslie',
      age: 18,
      desc: '自我介绍',
      checked: true,
      checkedNames: [],
      gender: 'male',
      selected: '',
      selectedList: []
    }
  }
}
</script>

<style>

</style>