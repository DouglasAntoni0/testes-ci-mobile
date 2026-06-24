# Testes CI Mobile - iOS com Sauce Labs

![WebdriverIO](https://img.shields.io/badge/WebdriverIO-mobile%20CI-EA5906?style=for-the-badge&logo=webdriverio&logoColor=white)
![Appium](https://img.shields.io/badge/Appium-iOS-472BDE?style=for-the-badge&logo=appium&logoColor=white)
![Sauce Labs](https://img.shields.io/badge/Sauce%20Labs-cloud-E2231A?style=for-the-badge)
![QA](https://img.shields.io/badge/QA-mobile%20quality-0A66C2?style=for-the-badge)

Projeto voltado à execução de testes mobile iOS em ambiente cloud, usando WebdriverIO, Appium, XCUITest e Sauce Labs. A branch `ci` registra uma configuração direcionada a execução remota e diagnóstico de testabilidade.

## O que este projeto demonstra

| Competência | Evidência |
| --- | --- |
| Mobile CI | Configuração de execução remota em Sauce Labs |
| iOS automation | Uso de XCUITest em simulador iPhone 13 / iOS 15.4 |
| Gestão de credenciais | `SAUCE_USERNAME` e `SAUCE_ACCESS_KEY` via ambiente |
| Diagnóstico técnico | Separação entre problema de configuração e limitação da aplicação alvo |
| Comunicação de risco | Documentação clara sobre dependência de seletores estáveis |

## Estado técnico

A automação está preparada para executar contra o app `LojaEBAC-sim.zip` no Sauce Labs. O principal risco identificado é a baixa testabilidade da aplicação alvo: ausência de identificadores estáveis, fluxo diferente do esperado e dificuldade de localizar elementos de forma confiável.

Em um contexto profissional, esse diagnóstico orienta uma recomendação objetiva ao time de produto/desenvolvimento: expor `accessibilityId`, padronizar fluxo inicial e garantir elementos rastreáveis para automação.

## Como executar

```bash
git clone https://github.com/DouglasAntoni0/testes-ci-mobile.git
cd testes-ci-mobile
git checkout ci
npm install
```

Configure as variáveis:

```bash
SAUCE_USERNAME=seu_usuario
SAUCE_ACCESS_KEY=sua_chave
```

Execute:

```bash
npm run wdio
```

## Resultado técnico

Este repositório puxa a discussão para um ponto de maturidade: automação mobile não é só escrever scripts. É avaliar ambiente, testabilidade, seletores, fluxo, execução cloud e qualidade da aplicação como produto testável.
