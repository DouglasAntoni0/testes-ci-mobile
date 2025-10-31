# Projeto de Teste iOS - EBAC Shop (Módulo 40)

Este repositório contém a tentativa de automação do fluxo de compra para o aplicativo iOS da EBAC Shop, utilizando WebdriverIO, Appium e Sauce Labs, conforme solicitado na tarefa.

---

## :warning: Estado do Projeto: INCOMPLETO (Falha no Teste)

O projeto está 100% configurado para ser executado na nuvem do Sauce Labs:
* O Node.js (v20) está funcional.
* As dependências (WebdriverIO v8) estão instaladas.
* A ligação ao Sauce Labs está 100% funcional 
* O upload do aplicativo (`LojaEBAC-sim.zip`) para o Sauce Labs foi bem-sucedido.
* O arranque do Simulador (`iPhone 13 Simulator`, iOS 15.4) no Sauce Labs está a funcionar.

O teste **falha** porque não consegue encontrar os elementos na tela de login.

### Motivo da Falha: Impossibilidade de Localizar Seletores


1.  **Seletores Instáveis:** O aplicativo parece não ter `Accessibility IDs` (seletores) estáveis ou previsíveis.
2.  **Fluxo Incorreto:** As imagens da tarefa sugerem que o app abre na tela de Login. No entanto, os vídeos do Sauce Labs mostram que o app abre na tela "Home".
3.  **Falha na Navegação:** A tentativa de corrigir isto (adicionando um clique no botão `~Profile` para navegar até ao Login) também falhou, como prova o log abaixo.
4.  **Conclusão:** Sem uma ferramenta de inspeção local (como o Appium Inspector) ou seletores estáveis fornecidos pelos developers (como `data-testid`), é **impossível** adivinhar os seletores corretos para este aplicativo específico.

---

### Prova de Execução (Log da Falha)

Este log (do último teste que executámos) prova que a configuração está correta, mas o seletor `~Profile` não foi encontrado