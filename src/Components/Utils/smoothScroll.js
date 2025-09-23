export const smoothScroll = (targetId) => {
  const targetElement = document.querySelector(targetId)
  if (targetElement) {
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0
    const targetPosition = targetElement.offsetTop - headerHeight
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}