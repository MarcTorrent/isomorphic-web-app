import { STATUS_DONE, STATUS_IN_PROGRESS, STATUS_PENDING } from './types';

export default [{
  id: 1,
  name: 'Start learning ReactJS',
  author: 'Marc',
  status: STATUS_DONE,
  description: 'As a modern JS library it\'s important to learn it as it would be very useful for improving coding efficiency'
},
{
  id: 2,
  name: 'Learn React Router',
  author: 'Marc',
  status: STATUS_DONE,
  description: 'Routing is the key to SPA so what we found in the React echosystem is that React Router is the most powerful library, also inspired by EmberJS Router.'
},
{
  id: 3,
  name: 'Don\'t forget about Redux!',
  author: 'Marc',
  status: STATUS_DONE,
  description: 'Big applications need another paradigm for handling data and being respectful of FRP. Redux is what best fits this need.'
},
{
  id: 4,
  name: 'Deep into Redux for advanced features',
  author: 'Marc',
  status: STATUS_DONE,
  description: 'HOC, Middlewares, opensource resources... Redux is the base and the online community helps growing it.'
},
{
  id: 5,
  name: 'Testing! Look for Airbnb Enzyme library',
  author: 'Marc',
  status: STATUS_IN_PROGRESS,
  description: 'Always apply TDD to all projects from the begining. Airbnb Enzyme library helps JS testing with React.'
},
{
  id: 6,
  name: 'Isomorphic! let there be SEO!',
  author: 'Marc',
  status: STATUS_IN_PROGRESS,
  description: 'SEO is the main goal of web apps. If no SEO there\'s no business. Server Side Rendering with universal code makes it possible and React is very helpful in that.'
},
{
  id: 7,
  name: 'Webpack... some day! ... not too far away!',
  author: 'Marc',
  status: STATUS_PENDING,
  description: 'Webpack is hard as it\'s related to architectural issues. Loaders, Plugins, Code Chunks...'
}];
