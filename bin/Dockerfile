# Dockerfile for building HA-BPMN-Manager assets
FROM node:20-alpine

WORKDIR /workspace/app

# Copy dependency manifests
COPY app/package*.json ./

# Install dependencies
RUN npm ci || npm install

# Copy source files
COPY app/src ./src
COPY app/webpack.config.js ./
COPY app/.bpmnlintrc ./

# Build production assets
CMD ["npm", "run", "build"]
