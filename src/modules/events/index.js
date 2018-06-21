import keyMirror from 'keymirror'
import Vue from 'vue'

export const EventBus = new Vue()
export const Events = keyMirror({
  SHOW_SUCCESS_MESSAGE: null,
  SHOW_ERROR_MESSAGE: null,
  SHOW_LOADING: null,
  HIDE_LOADING: null
})
