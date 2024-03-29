'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', 'HomeController.index');

Route.get('/posts', 'PostController.index');

Route.get('/posts/:id', 'PostController.show');


/*
Route.get('/test', () => 'Hello World!');

Route.get('/test/:id', ({ params }) => {
    return `This is id ${params.id}`;
})
*/