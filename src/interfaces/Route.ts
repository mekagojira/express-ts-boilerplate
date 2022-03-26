import Action from 'interfaces/Action';

type Route = {
  url: string;
  auth: boolean;
  action: Action;
  method: string;
};

export default Route;
