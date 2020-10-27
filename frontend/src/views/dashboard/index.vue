<template>
  <v-container fluid class="px-0">
    <v-layout>
      <v-form ref="dataForm" v-model="formValid" lazy-validation>
        <v-text-field full-width v-model="dataForm.src" label="对比文件"></v-text-field>
        <v-text-field full-width v-model="dataForm.dst" label="待对比文件"></v-text-field>
        <v-btn color="success" @click="onClickDuiBi">对比</v-btn>
      </v-form>
    </v-layout>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title>结果</v-card-title>
        <v-card-text v-for="item in message" :key="item" :item="item">{{item}}</v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return{
      formValid: true,
      dataForm: {
        src: "",
        dst: ""
      },
      dialog: false,
      message: []
    }
  },
  methods: {
    onClickDuiBi: function (){
      var self = this
      window.backend.Api.Contrast(this.dataForm.src, this.dataForm.dst).then(result => {
        self.message = result
        self.dialog = true
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>