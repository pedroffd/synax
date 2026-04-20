# 🚀 Helper: Dokploy + GitHub Container Registry (GHCR) Deployment

Este guia é destinado a Agentes de IA para configurar rapidamente o deploy de uma aplicação Next.js Multi-tenant usando Dokploy (VPS) e GHCR (CI/CD).

## 1. Configuração do GitHub Actions (`.github/workflows/staging.yml`)

Para garantir que o Dokploy sempre encontre a imagem correta, o workflow de build **precisa** gerar as tags `:latest` e `:staging`.

### Ponto Crítico: Tags de Imagem
```yaml
- name: Build and push
  uses: docker/build-push-action@v5
  with:
    context: .
    push: true
    tags: |
      ghcr.io/${{ github.repository_owner }}/lummia-web:latest
      ghcr.io/${{ github.repository_owner }}/lummia-web:staging
      ghcr.io/${{ github.repository_owner }}/lummia-web:${{ github.sha }}
```

---

## 2. Configuração do Registro no GitHub (PAT)

O Dokploy precisa de um **Personal Access Token (PAT)** para ler imagens privadas do GHCR.

1.  **Gerar Token**: No GitHub, vá em *Settings > Developer Settings > Personal Access Tokens (Classic)*.
2.  **Permissões**: Selecione apenas `read:packages`.
3.  **Configurar no Dokploy**:
    *   Vá em **Settings > Registries**.
    *   Adicione um registro `ghcr.io` com seu usuário e o Token gerado.

---

## 3. Configuração da Aplicação no Dokploy

Para deploys via imagem pré-construída (CI/CD externo), use o provedor **Docker**.

1.  **Provider**: Selecione "Docker".
2.  **Docker Image**: `ghcr.io/usuario/repo-web:staging` (ou `latest`).
3.  **Registry URL**: `ghcr.io` (Importante: Forçar o domínio para evitar que ele tente o Docker Hub).
4.  **Autenticação**: Preencha o Username e o Password (Token) na aba General para garantir o login manual do Docker daemon.

---

## 4. Middleware e Roteamento Multi-tenant (Next.js)

O segredo para subdomínios automáticos (ex: `staging.lummia.app`) sem conflitos com clínicas.

### O Arquivo `middleware.ts`
Deve existir na raiz do `src/`:
```typescript
import { NextRequest } from 'next/server';
import { proxy } from './proxy';

export async function middleware(req: NextRequest) {
  return proxy(req);
}
```

### Lógica do `proxy.ts` (Resolução de Domínios)
Certifique-se de que o domínio de staging esteja na lista de `rootDomains`.

```typescript
const rootDomains = ["lummia.app", "staging.lummia.app", "localhost"];

export async function proxy(req: NextRequest) {
  const hostHeader = req.headers.get("host") || "";
  const hostname = hostHeader.split(":")[0].toLowerCase();
  
  const isRootDomain = rootDomains.some(d => hostname === d);

  if (isRootDomain) {
    return i18nRouter(req, i18nConfig); // Renderiza o site principal (Landing/App)
  }

  // Lógica de subdomínio para clínicas (ex: clinica1.lummia.app)
  const subdomain = hostname.split(".")[0];
  return NextResponse.rewrite(new URL(`/sites/${subdomain}${pathname}`, req.url));
}
```

---

## 5. Automação de Diagnóstico (SSH Scripts)

Se o site der **502 Bad Gateway**, use scripts `expect` para verificar o status sem login interativo.

**Check de containers via AI:**
```bash
#!/usr/bin/expect -f
spawn ssh root@IP_VPS "docker service ls"
expect "password:"
send "SENHA_AQUI\r"
interact
```

---

## ✅ Checklist de Sucesso para o Agente:
1. [ ] A imagem no GHCR tem a tag `:staging`?
2. [ ] O campo `Registry URL` no Dokploy está preenchido com `ghcr.io`?
3. [ ] O `middleware.ts` está presente e chamando o `proxy.ts`?
4. [ ] O domínio de staging foi adicionado ao array `rootDomains`?

Este modelo garante um deploy funcional em minutos.
