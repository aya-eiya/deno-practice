import { Handlers } from '$fresh/server.ts'

export function redirectTopHash(to: string): Handlers {
  return {
    GET() {
      const resp = new Response('', {
        status: 308,
        headers: {
          Location: `/#${to}`,
        },
      })
      return Promise.resolve(resp)
    },
  }
}
