<template>
  <div class="row">
    <a-descriptions :title="dynamicTitle" bordered class="header-content">
      <a-descriptions-item v-for="item in intros" :key="item.key" :label="item.label" :span="3">
        {{ heads[item.dataIndex] }}
      </a-descriptions-item>
    </a-descriptions>

    <div v-if="programs.length === 0">Không có dữ liệu.</div>
  </div>

  <div class="row">
      <a-table class="table-content" :columns="columns" :data-source="programs" bordered :scroll="{ x: 1500 } ">
        <template #bodyCell="{ column, index ,record }">
          <template v-if="column.key === 'index'">
            <span>{{ index + 1 }}</span>
          </template>
          
          <!-- <template v-if="column.key === 'operation'">
            <a>Thao tác</a>
          </template> -->
        </template>
      </a-table>
      <div v-if="programs.length === 0">Không có dữ liệu.</div>
    </div>
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
import { ref, onMounted,computed } from "vue";
import API from "../../../router/apis";
import axios from "axios";

export default {
  setup() {

    // const displayedHeads = computed(() => {
    //   return heads.value.map(head => {
    //     // Thêm chuỗi vào giá trị dataIndex cần chỉnh sửa
    //     head.namdt_display = head.namdt + "Năm";
    //     return head;
    //   });
    // });
    const intros = [
      { label: 'Chuyên Ngành', key: 'chuyen_nganh', dataIndex: 'chuyen_nganh' },
      { label: 'Hệ đào tạo', key: 'hedt', dataIndex: 'hedt' },
      { label: 'Thời gian giảng dạy ', key: 'namdt_display', dataIndex: 'namdt_display' },
      { label: 'Khóa đào tạo', key: 'khoa', dataIndex: 'khoa' },
    ];

    const columns = [
  {title : 'STT' , key:'index',width: 70, dataIndex: 'index', fixed: 'left' 
        
  },
  { title: 'Mã môn học', width: 120, dataIndex: 'subject_code', key: 'subject_code'},
  { title: 'Tên Môn', width: 200, dataIndex: 'description', key: 'description'},
  { title: 'Số tín chỉ', width: 100, dataIndex: 'teaching_unit', key: 'teaching_unit'},
  {
    title: 'Số tiết học',
    children: [
    { title: 'Tổng', dataIndex: 'ps_number_lesson', key: 'ps_number_lesson' },
    { title: 'Số tiết lý thuyết', dataIndex: 'theory_lesson', key: 'theory_lesson' },
    { title: 'Số tiết thực hành', dataIndex: 'practice_lesson', key: 'practice_lesson' },
    { title: 'Số tiết kiểm tra', dataIndex: 'ps_test', key: 'ps_test' },
    ],
  },

  { title: 'Hệ số TC', dataIndex: 'heso_unit', key: 'heso_unit' },
  { title: 'Phần trăm điểm thi', dataIndex: 'score_ratio', key: 'score_ratio' },
  { title: 'Môn học tiên quyết', dataIndex: 'monhoctq', key: 'monhoctq', fixed: 'right', width: 100 },
  // { title: 'Thao tác', key: 'operation', fixed: 'right', width: 100 },
    ];

    const programs = ref([]);
    const heads = ref({});
    const dynamicTitle = "KHUNG CHƯƠNG TRÌNH";
    const startingIndex = ref(1);

    // Khởi tạo menu
    useMenu().onSelectedKeys(["edu-program"]);

    onMounted(async () => {
      // Lấy dữ liệu từ API
      const token = localStorage.getItem('accessToken');
      if (token) {
        axios.defaults.headers.common['Authorization'] = token;
      }

      try {
        const response = await axios.get(API.edu_program);
        programs.value = response.data.chuong_trinh;
        heads.value = response.data;
        heads.value.namdt_display = heads.value.namdt + " Năm";
      } catch (error) {
        console.error(error);
      }
    });

    return {
      columns,
      programs,
      dynamicTitle,
      intros,
      heads,
      startingIndex,
    };
  },
};
</script>

<style>
.header-content {
  background-color: white;
  border-top: 3px solid #c9c9c9;
  border-top-color: #1d8e3e;
  border-radius: 3px;
}

.table-content {
  background-color: white;
}
</style>
