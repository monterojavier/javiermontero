const routeVariants = {
  initial: {
    opacity: 0,
    scale: 0.9
  },
  animate: { opacity: 1, scale: 1 },
  final: {
    transition: {
      type: 'spring',
      velocity: 5.7
    }
  }
}

const childVariants = {
  initial: {
    opacity: 0,
    y: '50px'
  },
  final: {
    opacity: 1,
    y: '0px',
    transition: {
      duration: 0.75,
      delay: 0.74
    }
  }
}

export { routeVariants, childVariants }
