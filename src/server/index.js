import { createServer } from 'miragejs';

export default (environment = 'dev') => {
  return createServer({
    environment,
    routes() {
      this.get('/api/xxx', () => ({}));
    },
  });
};
