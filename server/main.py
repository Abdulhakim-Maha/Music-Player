from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from DATA import INTER,JPOP,KPOP,THAI
from Sort import SortByTitle

app = FastAPI()

#config
origins = [
    "http://localhost:3000",
    '*'
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
	return {'message':'Welcome to my Project'}

@app.get('/api/getData/{type}')
async def musicList(type:str):
	# print(INTER)
    inter,kpop,thai,jpop = INTER,KPOP,THAI,JPOP
    if type == 'Title':
        s = 'title'
        inter = SortByTitle(s,inter)
        kpop = SortByTitle(s,kpop)
        thai = SortByTitle(s,thai)
        jpop = SortByTitle(s,jpop)
    elif type == 'Artist':
        s = 'artist'
        inter = SortByTitle(s,inter)
        kpop = SortByTitle(s,kpop)
        thai = SortByTitle(s,thai)
        jpop = SortByTitle(s,jpop)
    elif type == 'Default':
        pass
    return {'INTER':inter, 'KPOP':kpop, 'THAI':thai, 'JPOP':jpop} 

@app.get('/api/getMusic/{id}')
async def getMusicById():
    return 

