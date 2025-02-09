<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #1976d2;
}
</style>