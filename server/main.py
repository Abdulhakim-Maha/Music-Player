from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from DATA import INTER,JPOP,KPOP,THAI

app = FastAPI()

#config
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")

#router
@app.get('/')
async def root():
	return {'message':'hello from fast API'}

@app.get('/api/getData')
async def dequeue():
	# print(INTER)
	return {'INTER':INTER,'KPOP':KPOP,'THAI':THAI,'JPOP':JPOP}

