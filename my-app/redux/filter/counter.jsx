export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}
const isEvent = (candidate: any) =>
  !!(candidate && candidate.stopPropagation && candidate.preventDefault)

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
}

import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ value, onChange, options }) => (
  <span>
    <h1>{value}</h1>
    <select onChange={e => onChange(e.target.value)} value={value}>
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </span>
)
export type Props = {
  name: string,
  children?: Node,
  component: Function | string,
  forwardRef?: boolean,
  _reduxForm: Context,
  rerenderOnEveryChange?: boolean,
  validate?: { (value: any, allValues: Object, props: Object): any },
  warn?: { (value: any, allValues: Object, props: Object): any },

  // same as Props in createFieldArrayProps.js:
  arrayInsert: { (index: number, value: any): void },
  arrayMove: { (from: number, to: number): void },
  arrayPop: { (): any },
  arrayPush: { (value: any): void },
  arrayRemove: { (index: number): void },
  arrayRemoveAll: { (): void },
  arrayShift: { (): any },
  arraySplice: { (index: number, removeNum: number | null, value: any): void },
  arraySwap: { (from: number, to: number): void },
  arrayUnshift: { (value: any): void },
  asyncError: any,
  dirty: boolean,
  length: number,
  pristine: boolean,
  submitError: any,
  state: Object,
  submitFailed: boolean,
  submitting: boolean,
  syncError: any,
  syncWarning: any,
  value: any[],
  props?: Object
}

export type DefaultProps = {
  rerenderOnEveryChange: boolean
}

type Api = {
  dirty: boolean,
  getRenderedComponent: { (): Component<any, any> },
  pristine: boolean,
  value: ?(any[])
}
Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
const getSelectedValues = options => {
  const result = []
  if (options) {
    for (let index = 0; index < options.length; index++) {
      const option = options[index]
      if (option.selected) {
        result.push(option.value)
      }
    }
  }
  return result
}

const getValue = (event: Event, isReactNative: ?boolean) => {
  if (isEvent(event)) {
    if (
      !isReactNative &&
      event.nativeEvent &&
      event.nativeEvent.text !== undefined
    ) {
      return event.nativeEvent.text
    }
    if (isReactNative && event.nativeEvent !== undefined) {
      return event.nativeEvent.text
    }
    const detypedEvent: any = event
    const {
      target: { type, value, checked, files },
      dataTransfer
    } = detypedEvent
    if (type === 'checkbox') {
      return !!checked
    }
    if (type === 'file') {
      return files || (dataTransfer && dataTransfer.files)
    }
    if (type === 'select-multiple') {

    }
    return value
  }
  return event
}
const onChangeValue = (
  event: Event,
  {
    name,
    parse,
    normalize
  }: { name: string, parse?: Function, normalize?: Function }
)
  let value = getValue(event, isReactNative)

  if (parse) {
    value = parse(value, name)
  }


  if (normalize) {
    value = normalize(name, value)
  }

  return value
}

const silenceEvents = (fn: Function) => (event: any, ...args: Array<any>) =>
  silenceEvent(event) ? fn(...args) : fn(event, ...args)
const silenceEvent = (event: any) => {
  const is = isEvent(event)
  if (is) {
    event.preventDefault()
  }
  return is
}
export default Pickers