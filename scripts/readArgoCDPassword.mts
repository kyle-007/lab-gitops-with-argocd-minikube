import { $ } from "zx";

export const readAndDecodeArgoCDAdminPassword = async (): Promise<string> => {
  const readResult =
    await $`kubectl get secret argocd-initial-admin-secret -n argocd -o yaml`;

  const passwordBase64Encode = readResult.stdout.split("\n")[2].split(": ")[1];

  const decodedPasswordResult =
    await $`echo ${passwordBase64Encode} | base64 --decode`;

  return decodedPasswordResult.stdout;
};
