CREATE DATABASE gestaoCondominio;
USE gestaoCondominio;

CREATE TABLE Blocos (
    id_bloco INT AUTO_INCREMENT PRIMARY KEY,
    nome_bloco VARCHAR(50) NOT NULL
);
CREATE TABLE Apartamentos (
    id_apartamento INT AUTO_INCREMENT PRIMARY KEY,
    numero_apartamento VARCHAR(10) NOT NULL,
    id_bloco INT,
    FOREIGN KEY (id_bloco) REFERENCES Blocos(id_bloco)
);
CREATE TABLE Moradores (
    id_morador INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100),
    id_apartamento INT,
    FOREIGN KEY (id_apartamento) REFERENCES Apartamentos(id_apartamento)
);
CREATE TABLE Funcionarios (
    id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    telefone VARCHAR(20),
    email VARCHAR(100),
    data_contratacao DATE
);
CREATE TABLE Visitantes (
    id_visitante INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    documento_identidade VARCHAR(20),
    data_visita DATE,
    hora_entrada TIME,
    hora_saida TIME,
    id_apartamento INT,
    FOREIGN KEY (id_apartamento) REFERENCES Apartamentos(id_apartamento)
);
CREATE TABLE Ocorrencias (
    id_ocorrencia INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    descricao TEXT,
    data_ocorrencia DATE,
    id_morador INT,
    FOREIGN KEY (id_morador) REFERENCES Moradores(id_morador)
);
CREATE TABLE Reservas (
    id_reserva INT AUTO_INCREMENT PRIMARY KEY,
    area_comum VARCHAR(100),
    data_reserva DATE,
    hora_inicio TIME,
    hora_fim TIME,
    id_morador INT,
    FOREIGN KEY (id_morador) REFERENCES Moradores(id_morador)
);

CREATE TABLE avisos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
