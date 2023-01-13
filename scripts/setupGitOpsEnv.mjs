#!/usr/bin/env zx

import { readAndDecodeArgoCDAdminPassword } from "./readArgoCDPassword.mjs";

await $`minikube start --ports=127.0.0.1:30100:30100`;
await $`kubectl create namespace argocd`;
await $`kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml`;
await $`kubectl apply -f dev/argocd-config.yaml`;
await $`sleep 120`;

const argoCDAdminPassword = await readAndDecodeArgoCDAdminPassword();

await $`echo setup ready, please login to http://127.0.0.1:8080 with username: admin and password: ${argoCDAdminPassword}`;

await $`kubectl port-forward -n argocd svc/argocd-server 8080:443`;
