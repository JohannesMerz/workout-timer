import { Route } from 'react-router-dom';

export const homeRoutes = <Route index lazy={() => import('./index')} />;
