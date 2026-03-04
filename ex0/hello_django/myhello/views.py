from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def myIndex(request):
    my_name = request.GET.get("name" , "CGU")

    if(my_name == "chodan"):
        return render(request, 'chodan.html')
    elif(my_name == "cj"):
        return render(request, 'cj_iu.html')
    elif(my_name == "彭小火"):
        return render(request, 'smallfire.html')
    return HttpResponse("Hello " + my_name)

def chodan(request):
    return render(request, 'index.html')