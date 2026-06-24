# Testes CI Mobile - iOS com Sauce Labs

![WebdriverIO](https://img.shields.io/badge/WebdriverIO-mobile%20CI-EA5906?style=for-the-badge&logo=webdriverio&logoColor=white)
![Appium](https://img.shields.io/badge/Appium-iOS-472BDE?style=for-the-badge&logo=appium&logoColor=white)
![Sauce Labs](https://img.shields.io/badge/Sauce%20Labs-cloud-E2231A?style=for-the-badge)
![QA](https://img.shields.io/badge/QA-mobile%20quality-0A66C2?style=for-the-badge)

Projeto voltado à execução de testes mobile iOS em ambiente cloud, usando WebdriverIO, Appium, XCUITest e Sauce Labs. A branch `ci` registra uma configuração direcionada a execução remota e diagnóstico de testabilidade.

Este repositório reforça uma visão importante: automação mobile em CI não depende apenas de escrever specs. Ela exige ambiente remoto, capabilities corretas, credenciais protegidas, aplicativo disponível e testabilidade adequada no app alvo.

## Objetivo do projeto

O objetivo é estruturar uma base para execução mobile iOS em ambiente remoto, aproximando a automação de um fluxo de CI.

A proposta envolve:

- configurar WebdriverIO;
- usar Appium com XCUITest;
- executar em Sauce Labs;
- referenciar app em storage remoto;
- validar viabilidade de fluxo mobile;
- registrar bloqueios de testabilidade.

## Stack utilizada

| Tecnologia | Papel |
| --- | --- |
| WebdriverIO | Runner dos testes |
| Appium | Automação mobile |
| XCUITest | Engine de automação iOS |
| Sauce Labs | Ambiente cloud |
| Mocha | Framework de teste |
| JavaScript | Linguagem dos scripts |

## O que este projeto demonstra

| Competência | Evidência | Valor técnico |
| --- | --- | --- |
| Mobile CI | Configuração de execução remota em Sauce Labs | Aproxima automação de pipeline |
| iOS automation | Uso de XCUITest em simulador | Valida capacidade de testar iOS |
| Gestão de credenciais | Variáveis `SAUCE_USERNAME` e `SAUCE_ACCESS_KEY` | Evita exposição de dados sensíveis |
| Diagnóstico técnico | Separação entre configuração e limitação do app | Melhora análise de causa |
| Comunicação de risco | Documentação sobre seletores estáveis | Direciona melhoria do produto |

## Estado técnico

A automação está preparada para executar contra um app iOS no Sauce Labs. O principal risco identificado é a baixa testabilidade da aplicação alvo: ausência de identificadores estáveis, fluxo diferente do esperado e dificuldade de localizar elementos de forma confiável.

Em um contexto profissional, esse diagnóstico orienta uma recomendação objetiva ao time de produto/desenvolvimento: expor `accessibilityId`, padronizar fluxo inicial e garantir elementos rastreáveis para automação.

## Como executar

Clone o repositório e acesse a branch correta:

```bash
git clone https://github.com/DouglasAntoni0/testes-ci-mobile.git
cd testes-ci-mobile
git checkout ci
```

Instale dependências:

```bash
npm install
```

Configure variáveis de ambiente:

```bash
SAUCE_USERNAME=seu_usuario
SAUCE_ACCESS_KEY=sua_chave
```

Execute:

```bash
npm run wdio
```

> Credenciais devem ser armazenadas como secrets/variáveis de ambiente. Não devem ser publicadas em README, logs ou commits.

## Estratégia de CI mobile

Um fluxo ideal de CI mobile para este projeto seguiria:

1. Checkout do repositório.
2. Instalação de dependências.
3. Configuração de secrets do Sauce Labs.
4. Disponibilização do app no storage remoto.
5. Execução do WebdriverIO.
6. Coleta de logs, screenshots e vídeos.
7. Publicação de evidências.

## Critérios de testabilidade recomendados

Para que a automação seja sustentável, o app alvo deveria fornecer:

- `accessibilityId` para elementos críticos;
- fluxo inicial consistente;
- mensagens previsíveis;
- loading states claros;
- elementos com nomes estáveis;
- documentação básica dos fluxos.

## Troubleshooting

| Problema | Possível causa | Ação sugerida |
| --- | --- | --- |
| Execução não inicia | Credenciais ausentes | Configurar variáveis de ambiente |
| App não abre | Arquivo não disponível no storage | Verificar upload do app |
| Elemento não encontrado | Falta de identificador estável | Inspecionar app e solicitar melhoria de testabilidade |
| Timeout | Ambiente cloud lento ou tela diferente | Revisar waits e fluxo inicial |

## Resultado técnico

Este repositório puxa a discussão para um ponto de maturidade: automação mobile não é só escrever scripts. É avaliar ambiente, testabilidade, seletores, fluxo, execução cloud e qualidade da aplicação como produto testável.

## Competências evidenciadas

- WebdriverIO em contexto mobile.
- Appium/XCUITest.
- Sauce Labs.
- Branch dedicada a CI.
- Gestão de credenciais por ambiente.
- Diagnóstico de testabilidade.
- Comunicação técnica de risco.

## Possíveis evoluções

- Criar workflow GitHub Actions usando secrets.
- Publicar logs e vídeos como artifacts.
- Adicionar screenshots em falhas.
- Mapear elementos com Appium Inspector.
- Substituir seletores frágeis por accessibility IDs.
- Definir smoke suite mobile.

## Conclusão

Este projeto mostra uma visão madura de QA mobile: execução em cloud, CI e testabilidade precisam caminhar juntos. A automação só é confiável quando o ambiente e o produto oferecem condições para validações estáveis.
