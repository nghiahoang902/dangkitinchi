<template>
  
  <div class="row">
    <a-space direction="vertical" style="width: 100%">
      <Alert v-if="visible" message="Success Tips" description="Đăng ký thành công." type="success" show-icon closable :after-close="handleClose" />
      <Alert v-if="!visible" message="Error" description="Lỗi khi đăng ký." type="error" show-icon closable :after-close="handleClose" />
    </a-space>
    <a-table class="table-content" :columns="columns" :data-source="datas" bordered :scroll="{ x: 1500 }">
      <template #bodyCell="{ column, index, record }">
        <template v-if="column.key === 'index'">
          <span>{{ index + 1 }}</span>
        </template>
        <template v-if="column.key === 'operation'">
          <a-button type="primary" style="padding-right: 10px;" @click="registerSubject(record)">
            Đăng ký
          </a-button>
        </template>
      </template>
    </a-table>
    <div v-if="datas.length === 0">Không có dữ liệu.</div>
   
  </div>
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import axios from "axios";
import API from "../../../router/apis";
export default {
  setup() {
    useMenu().onSelectedKeys(["module-registration"]);
    const columns = [
      {
        title: 'STT', key: 'index', width: 70, fixed: 'left'
      },
      { title: 'Mã lớp', width: 120, dataIndex: 'class_code', key: 'class_code' },
      { title: 'Tên lớp', width: 200, dataIndex: 'name', key: 'name' },
      { title: 'Lịch học', width: 100, dataIndex: 'lichhoc', key: 'lichhoc' },
      { title: 'Địa điểm', width: 100, dataIndex: 'diadiem', key: 'diadiem' },
      { title: 'Giáo viên', width: 200, dataIndex: 'hoten', key: 'hoten' },
      { title: 'Học phí', width: 200, dataIndex: 'monhoctq', key: 'monhoctq' },
      { title: 'Thao tác', key: 'operation', fixed: 'right', width: 120 },
    ];
    const datas = ref([]);
    const route = useRoute();
    const router = useRouter();
    const startingIndex = 1;

    const visible = ref(true);
      const handleClose = () => {
        visible.value = false;
      };


    const registerSubject = async (record) => {
      //console.log(record);
      const requestData = {
        id: record.id,
        ps_class_id: record.ps_class_id,
        class_parent_id: "",
        ps_school_year_id: record.school_year_id,
        ps_semester_id: record.ps_semester_id,
        ps_training_subject_id: record.id_monhoc,
      };

      try {
        const response = await axios.post(API.register_class, requestData);
        message.success("Đăng ký thành công: " + response.data.message);
        console.log("Đăng ký thành công", response.data.message);
      } catch (error) {
        console.error("Lỗi khi đăng ký", error);
        message.error("Lỗi khi đăng ký: " + error.response.data.error);
      }
    };


    onMounted(async () => {
      // Lấy dữ liệu từ API
      const token = localStorage.getItem('accessToken');
      if (token) {
        axios.defaults.headers.common['Authorization'] = token;
      }

      try {
        const response = await axios.get(API.getListSubject(route.params.id));

        datas.value = response.data.data;


      } catch (error) {
        console.error(error);
      }
    });
      return {
      columns,
      datas,
      startingIndex,
      registerSubject,
      handleClose,
    };
  },

}
</script>