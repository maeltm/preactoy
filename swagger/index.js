const _ = require('lodash');
const app = require('connect')();
const http = require('http');
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

function getFiles(dir) {
    return fs.readdirSync(dir)
        .reduce((files, file) => {
            return fs.statSync(path.join(dir, file)).isDirectory() ?
                files.concat(getFiles(path.join(dir, file))) :
                files.concat(path.join(dir, file));
        }, []);
}

const serverPort = 5000;
const options = {};

const spec = fs.readFileSync('./swagger.yaml', 'utf8');

const apiSpecs = _.map(getFiles('./api'), (file) => {
    return jsyaml.safeLoad(fs.readFileSync(file, 'utf8'));
});
const swaggerPaths = _.reduce(apiSpecs, (acc, api) => {
    return _.extend(acc, api);
}, {});

const swaggerDoc = jsyaml.safeLoad(spec);
swaggerDoc.paths = swaggerPaths;

swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator());
    app.use(middleware.swaggerRouter(options));
    app.use(middleware.swaggerUi());
    http.createServer(app).listen(serverPort);
});
