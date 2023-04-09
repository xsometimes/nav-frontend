<script lang="ts">
import { ref, computed } from 'vue';
import { isIOS, useResizeObserver } from '@vueuse/core';
import { Search as SearchIcon } from '@element-plus/icons-vue';
import { isMobile } from '@/utils/navigator';

export default {
  name: 'Search',
  setup(props, ctx) {
    const input3 = ref('');
    const select = ref('');
    const size = computed(() => {
      return isMobile() ? 'small' : ''
    })

    return {
      input3,
      size,
      select,
      SearchIcon
    }
  }
}


</script>

<template>
  <el-input
    v-model="input3"
    class="input-with-select"
    :size="size"
    clearable
  >
    <template #prepend>
      <el-select v-model="select" placeholder="Select" :size="size" popper-class="n-dropdown__popper">
        <el-option label="掘金" value="掘金">
          <el-space :size="3">
            <img class="icon" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg" />
            <span class="title">掘金</span>
          </el-space>
        </el-option>
      </el-select>
    </template>
    <template #append>
      <el-button :icon="SearchIcon" />
    </template>
  </el-input>
</template>

<style lang="scss" scoped>
.el-input-group {
  width: 68%;
}

.el-select {
  width: 72px;
}

.el-input-group__append {
  .el-button, .el-button:hover {
    background-color: #FAEEC7;
  }
}

@include b(dropdown__popper){
  .el-select-dropdown__item {
    padding: 0 8px;
    .icon {
      width: 28px;
    }
    .title {
      padding-left: 3px;
    }
  }
}

@media screen and (orientation:portrait) {
    //竖屏
}

@media screen and (orientation:landscape) {
    //横屏
}
// $box-height: 40px;
// @include b(search) {
//   width: 85%;
//   height: $box-height;
//   box-shadow: 2px 2px 24px rgba(0,0,0,.045);

//   @include e(inner) {
//     flex: 1;
//     padding: 6.5px 11px;
//     border: none;
//     outline: none;
//     background-color: #fff;
//   }

//   @include b(btn) {
//     width: 84px;
//     height: inherit;
//     line-height: $box-height;
//     background-color: #ffd100;
//   }
// }
</style>
