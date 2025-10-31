
describe('Fluxo de Compra EBAC Shop - iOS', () => {
    it('deve fazer o login, adicionar um produto ao carrinho e finalizar a compra', async () => {
        
        
        await driver.pause(5000); // 5s para o app carregar
        
        const profileButton = await $('~Profile');
        await profileButton.click();

        // --- TELA DE LOGIN ---
        await driver.pause(2000); // Espera a tela de login
        

        const emailInput = await $('~email'); 
        await emailInput.setValue('cliente@ebac.art.br'); // O usuário da imagem

        const passInput = await $('~password');
        await passInput.setValue('123456'); // A senha
        
        // O botão de Login
        const loginButton = await $('~Login');
        await loginButton.click();

        // --- TELA INICIAL (LOGADO) ---
        await driver.pause(3000); 
        const browseButton = await $('~Browse');
        await browseButton.click();

        // --- TELA DE BUSCA ---
        await driver.pause(2000); 
        const product = await $('~Ingrid Running Jacket');
        await product.click();

        // --- TELA DO PRODUTO ---
        await driver.pause(2000); 
        const addToCartButton = await $('~Add To Cart');
        await addToCartButton.click();

        // --- TELA DO CARRINHO ---
        await driver.pause(2000); 
        const selectAddressButton = await $('~Select address');
        await selectAddressButton.click();

        await driver.pause(2000); 
        await (await $('~Enter your name')).setValue('Douglas');
        await (await $('~Enter your mobile number')).setValue('11999998888');
        await (await $('~Enter your address')).setValue('Rua dos Testes, 123');
        await (await $('~City')).setValue('São Paulo');
        await (await $('~State')).setValue('SP');
        await (await $('~ZipCode')).setValue('01000100');

        const saveButton = await $('~save');
        await saveButton.click();

        // --- TELA DO CARRINHO (DE VOLTA) ---
        await driver.pause(2000);

        const continueButton = await $('~Continue to payment');
        await continueButton.click();

        // --- TELA DE PAGAMENTO ---
        await driver.pause(2000); 
        const cashButton = await $('~Cash on Delivery'); // Da imagem
        await cashButton.click();

        const checkoutButton = await $('~Checkout'); // Da imagem
        await checkoutButton.click();

        // --- TELA DE SUCESSO ---
        await driver.pause(3000); 
        // A imagem usa este
        const successMessage = await $('~Transaction successful!');
        
        // A validação final
        await expect(successMessage).toBeDisplayed(); 
    });
});