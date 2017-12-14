export const FETCH_USERS = 'fetch_users'
export const fetch_users = () => dispatch => {
  const res = { data: [{ name: 'yo' }] }
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}
