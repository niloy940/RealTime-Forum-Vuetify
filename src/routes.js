import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';
import HelloWorld from './components/HelloWorld';
import AskQuestion from './components/question/AskQuestion';
import Forum from './components/forum/Forum';

const routes = [
    {
        path: '/',
        component: HelloWorld,
        name: 'home'
        // meta: {
        //     requiresAuth: true,
        // }
    },

    {
        path: '/forum',
        component: Forum,
        name: 'forum'
    },

    {
        path: '/ask',
        component: AskQuestion,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/register',
        component: Register,
        meta: {
            requiresVisitor: true
        }
    },

    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            requiresVisitor: true
        }
    },

    {
        path: '/logout',
        component: Logout
    },
];

export default routes;
