<template>
  <div>
    <h1>商品分类案例</h1>

    <el-button type="primary" @click="addDialogVisible = true">添加新商品</el-button>

    <!-- 使用 element-ui 中的表格 -->
    <!-- :data="brandList" 是用来绑定数据源的 -->
    <el-table :data="brandList" border stripe>
      <!-- el-table-column 组件的作用，不管表格要渲染多少行数据，每一行数据都应由指定的这几列组成 -->
      <!-- 索引列 -->
      <el-table-column type="index"></el-table-column>
      <el-table-column label="编号" prop="cat_id"></el-table-column>
      <el-table-column label="分类名称" prop="cat_name"></el-table-column>
      <el-table-column label="日期">2021-4-13</el-table-column>
      <el-table-column label="操作">
        <!-- 如果 在表格的 column 渲染数据，必须要用 作用域插槽 才行 -->
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="remove(scope.row.cat_id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加新品牌的对话框 -->
    <el-dialog title="添加新品牌" :visible.sync="addDialogVisible" width="50%" @close="addDialogClose">
      <!-- Start：添加表单 -->
      <!-- model 是当前表单所绑定的数据对象 -->
      <!-- rules 是表单中的验证规则对象 -->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="80px">
        <!-- 在 el-form-item 中，label 用来指定标签的内容 -->
        <!-- 在 el-form-item 中，prop 用来指定当前表单项的验证规则（从 addFormRules 上获取）-->
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="addForm.cat_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addNewBrand">添 加</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 品牌列表数据，默认为空
      brandList: [],
      // 控制添加新品牌的对话框的显示和隐藏
      addDialogVisible: false,
      // 添加表单所绑定到的数据对象
      addForm: {
        cat_name: '' // 分类名称
      },
      // 添加表单的验证规则
      addFormRules: {
        // 验证分类名称是否合法的规则
        cat_name: [{ required: true, message: '请输入分类名称', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 定义获取品牌列表的方法
    async getBrandList() {
      // 调用 axios 发起请求，获取数据
      const { data: res } = await this.$http.get('/categories')
      if (res.meta.status !== 200) return alert('获取列表数据失败')
      // 获取数据成功
      this.brandList = res.message
      console.log(res.message)
    },
    // 对话框关闭的处理函数
    addDialogClose() {
      // 对表单进行充值
      this.$refs.addFormRef.resetFields()
    },
    // 点击按钮添加新品牌
    addNewBrand() {
      // 1.验证表单数据是否合法
      this.$refs.addFormRef.validate(valid => {
        // 验证失败
        if (!valid) return
        // 验证成功
        const newInfo = { cat_id: 520, cat_name: this.addForm.cat_name }
        this.brandList.push(newInfo)
        this.addDialogVisible = false
        return this.$message.success('添加成功！')
        // return this.$message.erorr("添加失败")
      })
    },
    async remove(id) {
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // ES6
          const i = this.brandList.findIndex(item => item.cat_id === id)
          this.brandList.splice(i, 1)

          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  },
  created() {
    // 在 created 中获取页面的首屏数据
    this.getBrandList()
  }
}
</script>

<style scoped>
.el-button {
  margin-bottom: 15px;
}
</style>
