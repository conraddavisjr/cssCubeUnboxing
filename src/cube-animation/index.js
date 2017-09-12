import Component from 'play-web-core/es6/component'

class AnimationTest extends Component {

  constructor(el) {
    super(el)
    this.init()
  }

  _elements() {
    this.circle = this.el.querySelector('.circle')
  }

  _events() {
    this._animateCircle()
  }

  _animateCircle() {
    new TimelineMax({
      repeat: -1
    }).to(this.circle, 3, {
      rotationY: '360_ccw',
      ease: Linear.easeNone
    })
  }

}

const el = document.getElementById('animation-test')

export default new AnimationTest(el)