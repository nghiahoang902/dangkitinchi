<template>
    <div class="row">
      <a-descriptions :title="dynamicTitle" bordered class="header-content">
        <!-- <a-descriptions-item v-for="item in intros" :key="item.key" :label="item.label" :span="3">
          {{ heads[item.dataIndex] }}
        </a-descriptions-item> -->
      </a-descriptions>
  
      <!-- <div v-if="programs.length === 0">Không có dữ liệu.</div> -->
    </div>
  
    <div class="row">
        <a-table class="table-content" :columns="columns" :data-source="programs" bordered :scroll="{ x: 1500 } ">
          <template #bodyCell="{ column, index, record }">
            <template v-if="column.key === 'index'">
              <span>{{ index + startingIndex }}</span>
            </template>
            <template v-if="column.key === 'description'">
              <span>
                <router-link :to="{ name:'module-registration-register', params: { id:record.id } }">
                    <a style="color:blue;">{{ record.description }}</a>
                </router-link>
            </span>
            </template>
            <template v-if="column.key === 'total_unit'">
              <span style="color:green;">
                  {{ record.total_unit }} VNĐ
              </span>
            </template>
            <template v-if="column.key === 'operation'">
                    <a-button type="primary" style="padding-right: 10px;">
                       <router-link :to="{ name:'module-registration-register', params: { id:record.id } }"> Chọn </router-link> 
                    </a-button>
            </template>
          </template>
        </a-table>
        <div v-if="programs.length === 0">Không có dữ liệu.</div>
      </div>
  </template>
  
  <script>
  import { useMenu } from "../../../stores/use-menu.js";
  import { ref, onMounted,computed } from "vue";
  import axios from "axios";
  import API from "../../../router/apis";
  
  export default {
    setup() {
        // const visible = ref(false);
        // const hide = () => {
        // visible.value = false;
        // };
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
      title: 'Số tiết học',dataIndex: 'lesson_total', key: 'lesson_total'
    },
  
    { title: 'Hệ số TC', dataIndex: 'heso_unit', key: 'heso_unit' },
    { title: 'Phần trăm điểm thi', dataIndex: 'score_ratio', key: 'score_ratio' },
    { title: 'Học phí', dataIndex: 'total_unit', key: 'total_unit' },
    { title: 'Thao tác', key: 'operation', fixed: 'right', width: 100 },
      ];
  
      const programs = ref([]);
      const dynamicTitle = "ĐĂNG KÝ TÍN CHỈ";
      const startingIndex = ref(1);
  
      // Khởi tạo menu
      useMenu().onSelectedKeys(["module-registration"]);
  
      onMounted(async () => {
        // Lấy dữ liệu từ API
        const token = localStorage.getItem('accessToken');
        if (token) {
          axios.defaults.headers.common['Authorization'] = token;
        }
  
        try {
        const response = await axios.get(API.ps_section_class);
          programs.value = response.data.data;

          console.log(programs.value);
        } catch (error) {
          console.error(error);
        }
      });
  
      return {
        columns,
        programs,
        dynamicTitle,
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
  