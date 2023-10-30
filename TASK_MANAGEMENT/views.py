from django.shortcuts import render


def Home(request):
    
    return render(request,'home.html')


def Singup(request):
    return render(request, 'sing_up.html')