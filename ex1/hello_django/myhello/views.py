from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

import logging

logger = logging.getLogger("django")


@api_view(['GET'])
def my_api(request):
    my_name = request.GET.get('name',None)
    logger.debug("-------------------- myhello_api: " + my_name)
    if my_name:
        retValue = {'data':"Hello "+my_name}
        return Response(retValue,status=status.HTTP_200_OK)
    else:
        return Response({"res":"name is None"},status=status.HTTP_400_BAD_REQUEST)
    

# Create your views here.
def myIndex(request):
    my_name = request.GET.get("name" , "CGU")

    if(my_name == "chodan"):
        return render(request, 'chodan.html')
    elif(my_name == "cj"):
        return render(request, 'cj_iu.html')
    elif(my_name == "彭小火"):
        return render(request, 'smallfire.html')
    elif(my_name == "test"):
        return render(request, 'test.html')   
    return HttpResponse("Hello " + my_name)

def chodan(request):
    return render(request, 'index.html')