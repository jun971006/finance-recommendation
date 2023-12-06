from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import logging

logger = logging.getLogger(__name__)

class MyApiView(APIView):
    def get(self, request, *args, **kwargs):
        logging.info("들어왔나?")
        return Response("ok", status=status.HTTP_200_OK)