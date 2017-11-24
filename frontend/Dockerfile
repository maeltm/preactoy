FROM node:6

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add node_modules/.bin to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install packages
ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g react-scripts

# start app
CMD ["npm", "start"]
