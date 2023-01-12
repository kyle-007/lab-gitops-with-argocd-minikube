#!/usr/bin/env zx

await $`kubectl create namespace argocd`;
await $`kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml`;
// await $`kubectl port-forward -n argocd svc/argocd-server 8080:443`;
await $`kubectl apply -f dev/argocd-config.yaml`;
