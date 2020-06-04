window.browser.notifications.create.callsFake((...args) => {
  let [id, {title, message}] = args;
  if(title){
    let myNotification = new Notification(title, {
      body: message
    })
    
    myNotification.onclick = () => {
      window.browser.notifications.onClicked._listeners.forEach(listener=>{
        if(_.isFunction(listener)){
          listener(id)
        }
      })
    }
  }
  
  return Promise.resolve(`${Date.now()}`)
})
window.browser.notifications.getAll.callsFake(() => Promise.resolve({}))