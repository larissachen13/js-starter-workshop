// change require to es6 import style
import $ from 'jquery';
import './style.scss'

let Timer = {
  num: 0,
  update: function() {
    this.num++;
    $('#main').html(`You've been on this page for ${this.num} seconds`);
  },
  start: function () {
    setInterval(this.update.bind(this), 1);
  },
}

Timer.start();
