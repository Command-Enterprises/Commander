import express from 'express';
import { createServer } from 'node:http';
import { createBareServer } from '@tomphttp/bare-server-node';
import path, { dirname } from 'node:path';
import createRammerhead from 'rammerhead/src/server/index.js';
import { fileURLToPath } from 'node:url';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import serveStatic from 'serve-static';

const app = express();
const server = createServer();
const bare = createBareServer('/bare/');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rammerhead = createRammerhead();

const rammerheadScopes = [
    '/rammerhead.js',
    '/hammerhead.js',
    '/transport-worker.js',
    '/task.js',
    '/iframe-task.js',
    '/worker-hammerhead.js',
    '/messaging',
    '/sessionexists',
    '/deletesession',
    '/newsession',
    '/editsession',
    '/needpassword',
    '/syncLocalStorage',
    '/api/shuffleDict',
    '/mainport'
];

const rammerheadSession = /^\/[a-z0-9]{32}/;

function shouldRouteRammerhead(req) {
    const url = new URL(req.url, 'http://0.0.0.0');
    return (
        rammerheadScopes.includes(url.pathname) ||
        rammerheadSession.test(url.pathname)
    );
}

function routeRammerheadRequest(req, res) {
    rammerhead.emit('request', req, res);
}

function routeRammerheadUpgrade(req, socket, head) {
    rammerhead.emit('upgrade', req, socket, head);
}

const serverFactory = (handler, opts) => {
    return server
        .on('request', (req, res) => {
            if (bare.shouldRoute(req)) {
                bare.routeRequest(req, res);
            } else if (shouldRouteRammerhead(req)) {
                routeRammerheadRequest(req, res);
            } else {
                app(req, res);
            }
        })
        .on('upgrade', (req, socket, head) => {
            if (bare.shouldRoute(req)) {
                bare.routeUpgrade(req, socket, head);
            } else if (shouldRouteRammerhead(req)) {
                routeRammerheadUpgrade(req, socket, head);
            } else {
                app(req, socket, head);
            }
        });
};

app.use(serverFactory());
app.use(express.urlencoded({ extended: true }));
app.use('/uv/', serveStatic(uvPath));
app.use(serveStatic(path.join(__dirname, 'public')));

app.listen(9272, '0.0.0.0', () => {
    console.log('Listening on http://0.0.0.0:9272!');
});