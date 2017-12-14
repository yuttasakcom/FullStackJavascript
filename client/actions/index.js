export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => dispatch => {
  const res = { data: [{ name: 'yo' }] }
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}
