# chatbot/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests, os
from dotenv import load_dotenv

load_dotenv()
API_URL = os.getenv("API")
class ChatView(APIView):
    def post(self, request):
        message = request.data.get("message")
        if not message:
            return Response({"error": "Mensagem vazia."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Requisição para ApiFreeLLM
            resp = requests.post(
                API_URL,
                headers={"Content-Type": "application/json"},
                json={"message": message}
            )

            # Log para debug
            print("STATUS ApiFreeLLM:", resp.status_code)
            print("BODY ApiFreeLLM:", resp.text)

            # Verificar se sucesso
            data = resp.json()

            if data.get("status") == "success" and "response" in data:
                reply = data["response"]
            else:
                # Pode ser rate limit ou outro erro
                error_msg = data.get("error", "Erro desconhecido da API")
                return Response({"error": error_msg}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            return Response({"reply": reply})

        except Exception as e:
            return Response({"error": f"Erro ao conectar à IA: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
