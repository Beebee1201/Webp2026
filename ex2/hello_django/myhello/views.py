from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import json
from django.core.serializers.json import DjangoJSONEncoder
import logging
from .models import Post

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

@api_view(['GET'])
def add_post(request):
    title = request.GET.get('title', '')
    content = request.GET.get('content', '')
    photo = request.GET.get('photo', '')
    location = request.GET.get('location', '')

    new_post = Post()
    new_post.title = title
    new_post.content = content
    new_post.photo = photo
    new_post.location = location
    new_post.save()

    logger.debug(" ************ myhello_api: " + title)

    if title:
        return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    
@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values()
    return JsonResponse(list(posts), safe=False)
    # return Response({"data": 
    #                     json.dumps(
    #                         list(posts), 
    #                         sort_keys = True, 
    #                         indent = 1, 
    #                         cls = DjangoJSONEncoder)}, 
    #                 status=status.HTTP_200_OK)


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
