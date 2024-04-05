<template>
  <a-layout-footer class="footer">
        Copyright ©2024 Created by NEWWAYTECH
    </a-layout-footer>
</template>

<script>
import { Layout } from 'ant-design-vue';

export default {
  components: {
    'a-layout-footer': Layout.Footer,
  },
};
</script>

<style scoped>
.footer {
  display: grid;
  align-self: end;
  text-align: center;
}
</style>
