import axios, { AxiosPromise } from 'axios'
import Cookies from 'js-cookie'

import { API_URL,   HUB_URL } from './routes'


export function axiosInstance<T, R>(
  path: string,
  type: 'GET' | 'POST' | 'PUT',
  body: T
): AxiosPromise<R> {
  const config = {
    url: API_URL + path,
    method: type,
    data: body,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return axios(config)
}
type LoggedInData = { id: string; url: string; text: string; avatar: string }
export const getIdsFromCookies = () => {
  const hub_user = Cookies.get('ROLE_USER_id')
  let data: LoggedInData[] = []
  if (hub_user) {
    data.push({
      id: hub_user,
      url: HUB_URL,
      text: 'hub_user ',
      avatar: ''
    })
  }
 

  return data
}