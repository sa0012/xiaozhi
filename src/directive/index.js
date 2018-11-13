import utils from '@/utils';

// vue 长按事件自定义指令
export default Vue => {
  Vue.directive("longtouch", function (el, binding) {
    // var oDiv = el,
    //   // value = binding.value,
    //   x = 0,
    //   y = 0,
    //   z = 0,
    //   timer = null;
    // oDiv.addEventListener("touchstart", function (e) {
    //   if (e.touches.length > 1) {
    //     return false;
    //   }
    //   z = 0;
    //   timer = setTimeout(function () {
    //     z = 1;
    //   }, 500);
    //   x = e.touches[0].clientX;
    //   y = e.touches[0].clientY;
    //   e.preventDefault();
    // }, false);
    // document.addEventListener("touchmove", function (e) {
    //   if (x != e.touches[0].clientX || y != e.touches[0].clientY) {
    //     clearTimeout(timer);
    //     return false;
    //   }
    // }, false);
    // document.addEventListener("touchend", function (ev) {
    //   if (z != 1) {
    //     clearTimeout(timer);
    //     x = 0;
    //     y = 0;
    //     // if (z != 1 && value && typeof value === "function") {
    //     //   value()
    //     // }
    //     if (z != 1) {
    //       // console.log(value)
    //     }
    //     console.log(z)
    //     return false;
    //   } else {
    //     x = 0;
    //     y = 0;
    //     z = 0;
    //     console.log(222222)
    //   }
    // }, false);
  })
}