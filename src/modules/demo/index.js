import createRoutes from './create-routes'

export default (context, options = {}) => {
  options = { scope: 'demo', prefix: 'demo', ...options }

  return {
    routes: createRoutes(context, options),
    options
  }
}
