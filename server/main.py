from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from DATA import INTER,JPOP,KPOP,THAI
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get('/')
async def root():
	return {'message':'hello fast'}

@app.get('/api/getData')
async def dequeue():
	# print(INTER)
	return {'INTER':INTER,'KPOP':KPOP,'THAI':THAI,'JPOP':JPOP}

