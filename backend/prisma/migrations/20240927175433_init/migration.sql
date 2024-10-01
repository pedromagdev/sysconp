-- CreateTable
CREATE TABLE `usuarios` (
    `cd_usario` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_adapatacao` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuarios_uuid_key`(`uuid`),
    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`cd_usario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissoes` (
    `cd_permissao` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NULL,
    `dcodigo_permissao` VARCHAR(191) NOT NULL,
    `tipo_permissao` ENUM('chefia.rh', 'analista', 'conselho_juridico', 'administrador', 'chefia.dcc', 'analista.dcc', 'normal') NOT NULL,
    `cd_usuario` INTEGER NOT NULL,

    UNIQUE INDEX `permissoes_dcodigo_permissao_key`(`dcodigo_permissao`),
    UNIQUE INDEX `permissoes_cd_usuario_key`(`cd_usuario`),
    PRIMARY KEY (`cd_permissao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes` (
    `cd_client` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `optional_telefone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `clientes_cd_client_key`(`cd_client`),
    UNIQUE INDEX `clientes_uuid_key`(`uuid`),
    UNIQUE INDEX `clientes_telefone_key`(`telefone`),
    UNIQUE INDEX `clientes_email_key`(`email`),
    PRIMARY KEY (`cd_client`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `cd_enderco` INTEGER NOT NULL AUTO_INCREMENT,
    `pais` VARCHAR(191) NOT NULL DEFAULT 'Angola',
    `rua` VARCHAR(191) NULL,
    `bairro` VARCHAR(191) NULL,
    `municipio` VARCHAR(191) NULL,
    `numero_de_casa` VARCHAR(191) NULL,
    `cd_cliente` INTEGER NOT NULL,
    `provincia` VARCHAR(191) NOT NULL DEFAULT 'Luanda',

    UNIQUE INDEX `endereco_cd_enderco_key`(`cd_enderco`),
    UNIQUE INDEX `endereco_cd_cliente_key`(`cd_cliente`),
    PRIMARY KEY (`cd_enderco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `anexos` (
    `cd_anexo` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `cd_usuario` INTEGER NOT NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `anexos_nome_key`(`nome`),
    UNIQUE INDEX `anexos_telefone_key`(`telefone`),
    UNIQUE INDEX `anexos_tipo_key`(`tipo`),
    UNIQUE INDEX `anexos_cd_usuario_key`(`cd_usuario`),
    PRIMARY KEY (`cd_anexo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vendas` (
    `cd_venda` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `cd_cliente` INTEGER NOT NULL,
    `cd_imovel` INTEGER NOT NULL,

    UNIQUE INDEX `vendas_uuid_key`(`uuid`),
    UNIQUE INDEX `vendas_cd_imovel_key`(`cd_imovel`),
    PRIMARY KEY (`cd_venda`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `parcelas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valor` DECIMAL(65, 30) NOT NULL,
    `estatus` VARCHAR(191) NOT NULL,
    `cd_venda` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projectos` (
    `cd_projecto` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_adapatacao` DATETIME(3) NOT NULL,

    PRIMARY KEY (`cd_projecto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zonas` (
    `cd_zona` INTEGER NOT NULL AUTO_INCREMENT,
    `rua` VARCHAR(191) NULL,
    `bairro` VARCHAR(191) NULL,
    `municipio` VARCHAR(191) NULL,
    `cd_projecto` INTEGER NOT NULL,

    PRIMARY KEY (`cd_zona`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doc_modelos` (
    `cd_doc_modelo` INTEGER NOT NULL AUTO_INCREMENT,
    `texto` VARCHAR(191) NOT NULL,
    `corpo` VARCHAR(191) NOT NULL,
    `rodape` VARCHAR(191) NOT NULL,
    `imovel_id` INTEGER NOT NULL,

    UNIQUE INDEX `doc_modelos_imovel_id_key`(`imovel_id`),
    PRIMARY KEY (`cd_doc_modelo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imoveis` (
    `cd_imovel` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `valor` DECIMAL(65, 30) NOT NULL,
    `valor_de_entrada` DECIMAL(65, 30) NOT NULL,
    `parcela` DECIMAL(65, 30) NOT NULL,
    `description` VARCHAR(191) NULL,
    `availability` BOOLEAN NOT NULL DEFAULT false,
    `zone_id` INTEGER NOT NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_adaptacao` DATETIME(3) NOT NULL,

    UNIQUE INDEX `imoveis_uuid_key`(`uuid`),
    PRIMARY KEY (`cd_imovel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agendamentos` (
    `cd_agendamentos` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `numero_opcional` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `bilhete_identidade` VARCHAR(191) NULL,
    `cd_usuario` INTEGER NOT NULL,
    `estato` BOOLEAN NOT NULL DEFAULT false,
    `data_visita` VARCHAR(191) NOT NULL,
    `hora_visita` VARCHAR(191) NOT NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_adaptacao` DATETIME(3) NOT NULL,

    UNIQUE INDEX `agendamentos_uuid_key`(`uuid`),
    PRIMARY KEY (`cd_agendamentos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `permissoes` ADD CONSTRAINT `permissoes_cd_usuario_fkey` FOREIGN KEY (`cd_usuario`) REFERENCES `usuarios`(`cd_usario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `endereco` ADD CONSTRAINT `endereco_cd_cliente_fkey` FOREIGN KEY (`cd_cliente`) REFERENCES `clientes`(`cd_client`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `anexos` ADD CONSTRAINT `anexos_cd_usuario_fkey` FOREIGN KEY (`cd_usuario`) REFERENCES `clientes`(`cd_client`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendas` ADD CONSTRAINT `vendas_cd_cliente_fkey` FOREIGN KEY (`cd_cliente`) REFERENCES `clientes`(`cd_client`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendas` ADD CONSTRAINT `vendas_cd_imovel_fkey` FOREIGN KEY (`cd_imovel`) REFERENCES `imoveis`(`cd_imovel`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `parcelas` ADD CONSTRAINT `parcelas_cd_venda_fkey` FOREIGN KEY (`cd_venda`) REFERENCES `vendas`(`cd_venda`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `zonas` ADD CONSTRAINT `zonas_cd_projecto_fkey` FOREIGN KEY (`cd_projecto`) REFERENCES `projectos`(`cd_projecto`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doc_modelos` ADD CONSTRAINT `doc_modelos_imovel_id_fkey` FOREIGN KEY (`imovel_id`) REFERENCES `imoveis`(`cd_imovel`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imoveis` ADD CONSTRAINT `imoveis_zone_id_fkey` FOREIGN KEY (`zone_id`) REFERENCES `zonas`(`cd_zona`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendamentos` ADD CONSTRAINT `agendamentos_cd_usuario_fkey` FOREIGN KEY (`cd_usuario`) REFERENCES `usuarios`(`cd_usario`) ON DELETE CASCADE ON UPDATE CASCADE;
