# Projeto de Teste iOS - EBAC Shop (Módulo 40)

Este repositório contém a tentativa de automação do fluxo de compra para o aplicativo iOS da EBAC Shop, utilizando WebdriverIO, Appium e Sauce Labs, conforme solicitado na tarefa.

## :warning: Estado do Projeto: INCOMPLETO (Bloqueado pela Qualidade do App)

O projeto está 100% configurado para ser executado na nuvem do Sauce Labs. A automação falha não por um erro de configuração nosso, mas sim pela **impossibilidade técnica de interagir com o aplicativo fornecido.**

### Prova de Configuração Funcional:

* O Node.js (v20) está funcional.
* As dependências (WebdriverIO v8) estão instaladas e estáveis.
* A ligação ao Sauce Labs está 100% funcional (o erro 401 foi resolvido).
* O upload do aplicativo (`LojaEBAC-sim.zip`) para o Sauce Labs foi bem-sucedido.
* O arranque do Simulador (`iPhone 13 Simulator`, iOS 15.4) no Sauce Labs está funcionando.

O teste **falha** porque é impossível localizar os elementos na tela.

---

## Motivo da Falha: Qualidade e "Testability" Inaceitáveis do Aplicativo

Esta não é apenas uma frustração, é uma constatação técnica:

1.  **Seletores Fracos, Instáveis e Imprevisíveis:** O aplicativo não expõe *nenhum* seletor estável (como `Accessibility IDs`). Os elementos são fracos, imprevisíveis e não-determinísticos.
2. **Fluxo Incorreto:** As imagens da tarefa sugerem que o app abre na tela de Login. No entanto, os vídeos do Sauce Labs mostram que o app abre na tela "Home".
3.  **Vai Contra as Boas Práticas:** A falta de seletores de teste (`data-testid` ou `accessibilityID`) vai contra tudo o que um verdadeiro engenheiro de QA ou desenvolvedor aprende. Um aplicativo sem "testability" (qualidade para o teste) é considerado "quebrado" por definição e inaceitável.
Falha na Navegação: A tentativa de corrigir isto (adicionando um clique no botão ~Profile para navegar até ao Login) também falhou, como prova o log abaixo.
4.  **Qualidade Incompatível com o Ensino:** A escola não criou um aplicativo de testes que preste. Este nível de qualidade não é profissional e demonstra uma falta de adesão às boas práticas que seriam esperadas até mesmo de um desenvolvedor em início de carreira.
5.  **Falta Gritante de Otimização:** O fluxo do aplicativo (abrindo na "Home" em vez do "Login", ao contrário do que as imagens sugerem) é confuso.
6.  **Problema Crónico:** Esta não é a primeira vez. Ja sofremos tentando fazer a mesma coisa nesse site deles" (a versão web), que apresentava exatamente os mesmos problemas de seletores fracos e instáveis.

**Conclusão:** Sem uma ferramenta de inspeção local (Appium Inspector) ou, mais importante, **seletores estáveis** fornecidos pela equipa de desenvolvimento, é **impossível** automatizar este aplicativo.


### Prova de Execução (Log da Falha)

Este log (do último teste que executámos) prova que a configuração está correta, mas o seletor `~Profile` (a nossa última tentativa de adivinhar o fluxo) não foi encontrado.