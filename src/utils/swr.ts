// this hack is currently needed because of a bug in typescript.
// snippet taken from https://github.com/microsoft/TypeScript/issues/49189#issuecomment-1321485126
import _useSWR, { SWRHook } from "swr"

export const useSWR = _useSWR as unknown as SWRHook
