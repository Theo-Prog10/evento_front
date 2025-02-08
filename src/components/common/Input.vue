<template>
    <input :type="type" :placeholder="placeholder" v-model="modelValue" />
  </template>
  
  <script setup>
  defineProps({
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  });
  
  const modelValue = defineModel();
  </script>
  
  <style scoped>
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;
  }
  </style>