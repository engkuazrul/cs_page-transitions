// Run animations
barba.init({
  transitions: [
    // Showcase transitions
    {
      name: "default",
      leave(data){
        let current = data.current.container;
      },
      enter(data){
        let next = data.next.container;
      }
    }
  ]
})