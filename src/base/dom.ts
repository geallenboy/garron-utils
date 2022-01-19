/**
 * 滚动到页面顶部
 */
export const scrollToTop = () => {
  const height: number = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, height - height / 8);
  }
};

/**
 * 滚动到页面底部
 */
export const scrollToBottom = () => {
  window.scrollTo(0, document.documentElement.clientHeight);
};
