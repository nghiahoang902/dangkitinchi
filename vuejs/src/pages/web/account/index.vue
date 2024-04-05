<template>
  Đây là Trang tài khoản sinh viên
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
export default {
  setup() {
      useMenu().onSelectedKeys(["account"]);
  },
}
</script>