#!/usr/bin/env zx

await $`minikube start --ports=127.0.0.1:30100:30100`;
await $`kubectl apply -f dev/deployment.yaml`;
await $`echo http://127.0.0.1:30100`;
