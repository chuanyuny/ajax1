#-*- coding:utf-8 -*-
import json
from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from regist import send

# Create your views here.
def index(requst):
	return render(requst,'index.html')

def login_action(requst):
	# return requst

	username=requst.POST.get('username','')
	password=requst.POST.get('password','')
	if username=='admin' and password=='123':
		return JsonResponse({'status':200,'message':'success'})
	else:
		return JsonResponse({'status':121,'username':username,'password':password})

def send_request(requst):
	if requst.is_ajax():
		if requst.method == 'POST':
			url='http://'+requst.POST.get('url','')
			number=requst.POST.get('number','')
			province=requst.POST.get('province')
			time_weight=requst.POST.get('time_weight')


            # 
			print "#############"      
			print type(url),type(number), type(province), type(time_weight)
			# print "data:number", number
			# print "data:province",province
			# print "data:time_weight", time_weight


			print number, type(json.loads(province)), type(json.loads(time_weight))
			# print "data:number", json.loads(number)
			# print "data:province",json.loads(province)
			# print "data:time_weight", json.loads(time_weight)


			number = int(number)
			province = json.loads(province)
			time_weight = json.loads(time_weight)

			result=send.run(url,number,province,time_weight)
			print result
			
			if result:
				return JsonResponse({'status':200,'message':result})
			else:
				return JsonResponse({'status':201,'message':result})


