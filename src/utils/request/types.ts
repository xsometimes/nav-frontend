export type Fn = (data: FcResponse<any>) => unknown

export interface IAnyObj {
  [index: string]: unknown
}

export interface FcResponse<T> {
  errno: string
  errmsg: string
  data: T
}
