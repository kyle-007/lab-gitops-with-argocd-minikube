#!/usr/bin/env zx

await $`kubectl get secret argocd-initial-admin-secret -n argocd -o yaml`
await $`echo R2FtYXFHQVV4YUdXblE4Rg== | base64 --decode`