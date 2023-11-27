export { default } from "next-auth/middleware"

// esto protege las rutas donde no se ha logeado el usuario
export const config = { matcher: ['/dashboard'] }