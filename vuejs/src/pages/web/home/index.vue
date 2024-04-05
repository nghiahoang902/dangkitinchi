<template>
     Đây là trang chủ
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";

export default {
  setup() {
    useMenu().onSelectedKeys(["home"]);

    const reloadPageOnce = () => {
      const isReloaded = localStorage.getItem('isReloaded');

      if (!isReloaded) {
        localStorage.setItem('isReloaded', true);
        window.location.reload();
      }
    };

    return {
      reloadPageOnce
    };
  },
  mounted() {
    this.reloadPageOnce();
  }
}
</script>