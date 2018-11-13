<template>
  <div class="dialog" v-show="visible">
    <div class="modal"></div>
    <div class="content">
      <h3 class="dialog-title">{{ title }}</h3>
      <div class="content-input border-bottom" :class="{'isAlert': type === 'alert'}" v-if="type === 'confirm'">
        <input type="text" placeholder="请输入房间名称" v-model="inputMes" v-if="type === 'confirm'">
        <span v-if="type === 'alert'">{{ message }}</span>
      </div>
      <div class="modal-content" v-if="type === 'modal'">
        <ul class="modal-list">
          <li class="modal-item" v-for="(item, index) in soundArr" :key="index">
            <div class="modal-title">{{ item.title }}</div>
            <div class="modal-select">
              <img :src=" item.select ? select1 : select2" alt="" class="select" @click="changeSelect(index)">
              <!--<input type="checkbox" v-model="item.select" class="modal-checkbox" >-->
            </div>
          </li>
        </ul>
      </div>
      <div class="content-btn" v-if="type === 'confirm'">
        <div class="close">
          <button class="close-btn" @click="close">取消</button>
        </div>
        <div class="confirm">
          <button class="confirm-btn" @click="confirm">确认</button>
        </div>

      </div>
      <div class="alert" @click="confirm" v-if="type === 'alert'">确定</div>
    </div>
  </div>
</template>

<script>
import $ from '@/utils';
import select1 from '../../assets/images/home/select1.png';
import select2 from '../../assets/images/home/select2.png';
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'alert'
    },
    message: {
      type: String,
      default: '这是alert弹窗'
    },
    confirmCallback: {
      type: Function,
      default: null
    },
    soundCallback: {
      type: Function,
      default: null
    },
    soundArr: {
      type: Array,
    }
  },
  data() {
    return {
      visible: false,
      inputMes: '',
      select1: select1,
      select2: select2
    }
  },
  methods: {
    showModal() {
      this.visible = false;
    },
    close() {
      $.allowBack();
      this.visible = false;
    },
    confirm() {
      $.allowBack();
      this.confirmCallback && this.confirmCallback(this.inputMes);
    },
    changeSelect(index) {
      this.soundArr.forEach((item, i) => {
        if (i === index) {
          this.soundArr[i].select = true;
        } else {
          this.soundArr[i].select = false;
        }
      });
      this.soundCallback && this.soundCallback(index);
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
.dialog {
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 22222;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .dialog-title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 70%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 10px;
    z-index: 33333;
    padding: 35px 30px 30px;
    font-size: 16px;
    animation: bounceInDown 0.5s ease-in-out;
    .content-input {
      padding-top: 15px;
      margin-bottom: 60px;
      font-size: 14px;
      letter-spacing: 1px;
      &.isAlert {
        text-align: center;
      }
      input {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border: none;
        border: 0;
        background-color: none;
        font-size: 16px;
        border-bottom: 1px solid #ccc;
        &::-webkit-input-placeholder {
          color: #ddd;
          font-size: 16px;
        }
      }
    }
    .content-btn {
      display: flex;
      .confirm,
      .close {
        flex: 1;
      }
      .confirm {
        text-align: right;
      }
      .close-btn,
      .confirm-btn {
        width: 115px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #ddd;
        border-radius: 5px;
        color: #fff;
        border: none;
        font-size: 16px;
      }
      .confirm-btn {
        background: #19B0FF;
      }
    }
    .alert {
      width: 100%;
      background: #19B0FF;
      color: #fff;
      text-align: center;
      height: 40px;
      line-height: 40px;
      border-radius: 5px;
    }
  }
}

.modal-content {
  .modal-list {
    padding: 0 20px;
    max-height: 200px;
    overflow: auto;
    .modal-item {
      height: 50px;
      line-height: 50px;
      display: flex;
      align-items: center;
      .modal-title, .modal-select {
        flex: 1;
      }
      .modal-select {
        text-align: right;
        position: relative;
        .select {
          vertical-align: middle;
        }
      }
    }
  }
  .modal-checkbox {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -3px;
    width: 28px;
    height: 28px;
    opacity: 0;
  }
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-50%, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(-50%, 25px, 0);
  }

  75% {
    transform: translate3d(-50%, -10px, 0);
  }

  90% {
    transform: translate3d(-50%, 5px, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
