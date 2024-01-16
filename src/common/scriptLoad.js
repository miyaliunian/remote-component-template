const removeElNode = (el)=>{
    if (el.parentNode) el.parentNode.removeChild(el)
    el.onload = null
    el.onerror = null
    el = null
}
export const scriptLoad = (option)=>{
      const {js,css} = option
      const target = document.getElementsByTagName('script')[0] || document.head
      const script = document.createElement('script');
      const link = document.createElement('link');
      script.src = js;
      link.href = css;
      link.rel= 'stylesheet';
      document.head.appendChild(link);
      target.parentNode.insertBefore(script, target)
    return new Promise((resolve, reject) =>{
      script.onload = () => {
        resolve()
        removeElNode(script)
      }
      script.onerror = ()=>{
        reject(new Error('script load failed'))
        removeElNode(script)
      }
    })
}

