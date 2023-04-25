export interface IRegisterReq {
  email: string
  mobile: string
  referralCode: string
}

export interface ILoginReq {
  email: string
  password: string
}

export interface ILoginRes {
  id: number
  userId: number
  email: string
  mobile: string
  role: string[]
  token: string
}
