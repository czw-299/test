<template>
  <div>
    <el-containe style="height: 700px; border: 1px solid #eee">
      <el-header style="font-size:40px; background-color: rgb(238, 241, 246)">智能系统</el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="230px" style="border: 1px solid #eee">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title">信息系统管理</template>
               <el-menu-item index="1-1">
                  <router-link to="/dept">部门管理</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link to="/emp">员工管理</router-link>
                </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <!-- 主展示区域 -->
        <el-main>
          <!-- 表单 -->
          <el-form :inline="true" :model="searchForm" class="demo-form-inline">
            <el-form-item label="姓名">
              <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
            </el-form-item>

            <el-form-item label="性別">
              <el-select v-model="searchForm.gender" placeholder="性別">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="入职日期">
              <el-date-picker
                v-model="searchForm.entrytime"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>

          <!-- 表格 -->
          <el-table :data="tableData" border>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="image" label="图像" width="180"></el-table-column>
            <el-table-column prop="gender" label="性别" width="140"></el-table-column>
            <el-table-column prop="job" label="职位" width="140"></el-table-column>
            <el-table-column prop="entrytime" label="入职日期" width="230"></el-table-column>
            <el-table-column prop="updatatime" label="最后操作时间" width="230"></el-table-column>
            <el-table-column label="操作">
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="danger" size="mini">删除</el-button>
            </el-table-column>
          </el-table>

          <!-- 分页 -->
          <el-pagination
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </el-main>
      </el-container>
    </el-containe>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      tableData: [],
      searchForm: {
        name: "",
        gender: "",
        entrytime: []
      }
    };
  },
  methods: {
    onSubmit: function() {
      alert("查詢數據");
    }
  },
  mounted:{
    //发送异步请求、axios
  },
  dialogTableVisible: false,
  dialogFormVisible: false
};
</script>

<style>
</style>