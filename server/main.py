from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from DATA import INTER,JPOP,KPOP,THAI
from Sort import SortByTitle
from Queue import Queue
from pydantic import BaseModel

#class Model
class Music(BaseModel):
    id : int
    artist : str
    title: str
    img_src : str
    src : str

#run
app = FastAPI()
Q = Queue()


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

@app.post('/api/postMusic')
async def postMusic(queue: List[Music]):
    # print(queue)
    for i in queue:
        Q.enqueue(i)
    Q.print_queue()
    return queue

@app.delete('/api/deleteMusic')
async def deleteMusic(item: Music):
    print(item)
    return item

@app.get('/api/getMusic/{type}')
async def getMusicById(type:str):
    if type == 'dequeue':
        print(Q.dequeueF())
    return 

