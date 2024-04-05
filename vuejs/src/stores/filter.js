// filters.js
import { createApp } from 'vue';

const app = createApp({});

app.config.globalProperties.$filters = {
  formatCurrency(value) {
    // implement your formatting logic here
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  },
};

app.component('dummy-component', {
  template: '<div></div>', // a dummy component to hold the filters
});

export default app;
