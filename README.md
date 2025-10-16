# Chatbot com IA - Backend e Frontend

Autor: José Carlos Gonçalves  
Curso: Análise e Desenvolvimento de Sistemas  
Universidade: UNESA  
Email: cjpro.social@gmail.com  
Contato (Whatsapp): 81 9 9216 4481  

Este projeto é um **chatbot com inteligência artificial**, desenvolvido com **Django** no backend e **React.js** no frontend.  
O backend faz requisições para a **ApiFreeLLM** (ou outra API de IA) para gerar respostas às mensagens do usuário.  
O frontend exibe um chat interativo, responsivo e com design moderno.

---

## Estrutura do projeto

- `chatbot_backend/` → Backend Django, responsável por processar mensagens e se comunicar com a API de IA.
- `chatbot_frontend/` → Frontend React, interface do usuário.

---

## Tecnologias utilizadas

### Backend
- Python 3.14
- Django 6.x
- Django REST Framework
- Requests (para chamar a API de IA)
- Pip

### Frontend
- React.js 18.x
- Axios (requisições HTTP)
- CSS customizado para chat
- Node.js e npm

---

## Pré-requisitos
- Python 3.14 instalado
- Node.js e npm instalados
- Git
- Acesso à Internet para a API de IA

---

## Passo a passo para rodar localmente

### Backend

**Clonar o repositório**
git clone https://github.com/SEU-USUARIO/chatbot-ia.git
cd chatbot_backend

Criar ambiente virtual
python -m venv venv

Ativar ambiente virtual
.\venv\Scripts\activate   No Windows
source venv/bin/activate  No Linux / macOS

Instalar dependências
pip install django djangorestframework requests

Configurar API
Edite ou crie o arquivo .env na raiz do backend:
API = https://apifreellm.com/api/chat

Rodar servidor Django
python manage.py runserver

O backend estará disponível em: http://localhost:8000/api/chat/

### Frontend

Navegar até a pasta do frontend
cd ../chatbot_frontend

Instalar dependências
npm install

Configurar URL da API
Crie ou edite .env na raiz do frontend:
REACT_APP_API_URL=http://localhost:8000/api

Rodar aplicação
npm start

O frontend estará disponível em: http://localhost:3000

Funcionalidades:
Chat interativo com respostas da IA.
Mensagens do usuário e do bot visualmente distintas.
“Pensando...” enquanto a IA processa a resposta.
Layout responsivo e moderno.

Observações finais:
Nenhum armazenamento de histórico de mensagens foi implementado, pois o modelo escolhido não mantém contexto.
Para trocar a API de IA, basta alterar a URL e a chave no .env do backend.
O projeto é modular: backend e frontend podem ser hospedados separadamente ou juntos.
Certifique-se de que a porta do backend (8000) não esteja bloqueada ou em uso.