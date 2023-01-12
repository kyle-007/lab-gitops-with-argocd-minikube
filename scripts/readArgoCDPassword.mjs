#!/usr/bin/env zx

await $`kubectl get secret argocd-initial-admin-secret -n argocd -o yaml`
await $`echo VkEzYXFxMGtqc3NCbEt1Yw== | base64 --decode`