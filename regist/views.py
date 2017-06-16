from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
# Create your views here.
def index(requst):
	return render(requst,'index.html')

def login_action(requst):

	# return render(requst,'index.html')
	username=requst.POST.get('username','')
	password=requst.POST.get('password','')
	if username=='admin' and password=='123':
		return JsonResponse({'status':200,'message':'success'})
		# return render(requst,'login_action.html')
	else:
		return JsonResponse({'status':121,'message':'failed'})