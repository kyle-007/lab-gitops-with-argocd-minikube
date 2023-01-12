#!/usr/bin/env zx

await $`kubectl create namespace argocd`;
await $`kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml`;
await $`kubectl port-forward -n argocd svc/arogodd-server 8080:443`;

