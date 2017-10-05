/**
 * Created by guangqiang on 2017/8/22.
 */

/**
 * action对象的type属性集合
 */
const actionType = {

  // 配置 promiseMiddleware 异步action的几种状态
  FETCH_LOADING_SUFFIX : '_LOADING',
  FETCH_SUCCESS_SUFFIX : '_SUCCESS',
  FETCH_ERROR_SUFFIX : '_ERROR',
  FETCH_SHOW_HUD: 'FETCH_SHOW_HUD',

  // router
  REACT_NATIVE_ROUTER_FLUX_EVENT: 'REACT_NATIVE_ROUTER_FLUX_EVENT',
  REACT_NATIVE_ROUTER_FLUX_EVENT_CLEAR: 'REACT_NATIVE_ROUTER_FLUX_EVENT_CLEAR',
  REACT_NATIVE_ROUTER_FLUX_BACK: 'Navigation/BACK',
  REACT_NATIVE_ROUTER_FLUX_BLUR: 'REACT_NATIVE_ROUTER_FLUX_BLUR',
  REACT_NATIVE_ROUTER_FLUX_FOCUS: 'REACT_NATIVE_ROUTER_FLUX_FOCUS',
  REACT_NATIVE_ROUTER_FLUX_REPLACE: 'REACT_NATIVE_ROUTER_FLUX_REPLACE',
  REACT_NATIVE_ROUTER_FLUX_SET_PARAMS: 'Navigation/SET_PARAMS',

  // action 对象的type
  GET_ACCOUNT_GENERAL : 'GET_ACCOUNT_GENERAL',
  OPEN_CHAT : 'OPEN_CHAT',
  CHAT_INCREASES : 'CHAT_INCREASES',
  CHAT_REDUCE : 'CHAT_REDUCE',

  PICTURE_LIST: 'PICTURE_LIST',
  PICTURE_DETAIL: 'PICTURE_DETAIL',
  PICTURE_PAST_LIST: 'PICTURE_PAST_LIST',
  PICTURE_GRID_LIST: 'PICTURE_GRID_LIST',

  MOVIE_LIST: 'MOVIE_LIST',
  MOVIE_DETAIL: 'MOVIE_DETAIL',
  MOVIE_STORY: 'MOVIE_STORY',
  MOVIE_SHOWTIME_LIST: 'MOVIE_SHOWTIME_LIST',
  MOVIE_COMEING_NEW_LIST: 'MOVIE_COMEING_NEW_LIST',

  MUSIC_ID_LIST: 'MUSIC_ID_LIST',
  MUSIC_DETAIL: 'MUSIC_DETAIL',
  MUSIC_LIST: 'MUSIC_LIST',
  MUSIC_XIAMI_MUSIC: 'MUSIC_XIAMI_MUSIC',
  MUSIC_RESET_MUSIC_INFO: 'MUSIC_RESET_MUSIC_INFO',

  READING_BANNER_LIST: 'READING_BANNER_LIST',
  READING_BANNER_ARTICLE : 'READING_BANNER_ARTICLE',
  READING_HOME_LIST: 'READING_HOME_LIST',
  READING_ESSAY_DETAIL: 'READING_ESSAY_DETAIL',
  READING_SERIAL_DETAIL: 'READING_SERIAL_DETAIL',
  READING_QUESTION_DETAIL: 'READING_QUESTION_DETAIL',
  READING_COMMENT_LIST: 'READING_COMMENT_LIST',
  READING_ARTICLE_CATE_LIST: 'READING_ARTICLE_CATE_LIST'
}

export default actionType