<template>
  Đây là Trang kết quả học tập
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
export default {
  setup() {
      useMenu().onSelectedKeys(["result"]);
  },
}
</script>