

export function CookieOptions() {
    if (process.env.NODE_ENV === 'development') {
      return {
        path: '/',
        sameSite: 'Lax',
        domain: 'localhost'
      }
    } else {
      return {
        path: '/',
        sameSite: 'Strict',
        secure: true,
        domain: 'localhost'
      }
    }
  }