import helloWorld from 'actions/ping/helloWorld/helloWorld';
import Route from 'interfaces/Route';

const routes: Array<Route> = [
  {
    url: '/',
    auth: false,
    action: helloWorld,
    method: 'get',
  },
];

export default routes;
