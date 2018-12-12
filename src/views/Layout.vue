<template>
  <div class="home">
    <el-container>
      <el-header>
        <header-com></header-com>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <menu-com></menu-com>
        </el-aside>
        <el-main>
          <content-com></content-com>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderCom from '@/views/System/HeaderCom'
import MenuCom from '@/views/System/MenuCom'
import ContentCom from '@/views/System/ContentCom'
export default {
  name: 'home',
  components: {
    HeaderCom, MenuCom, ContentCom
  }
}
</script>
