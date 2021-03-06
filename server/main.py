from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from DATA import INTER,JPOP,KPOP,THAI
from Sort import SortSong
from Search import search_music
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
        inter = SortSong(s,inter)
        kpop = SortSong(s,kpop)
        thai = SortSong(s,thai)
        jpop = SortSong(s,jpop)
    elif type == 'Artist':
        s = 'artist'
        inter = SortSong(s,inter)
        kpop = SortSong(s,kpop)
        thai = SortSong(s,thai)
        jpop = SortSong(s,jpop)
    elif type == 'Default':
        pass
    return {'INTER':inter, 'KPOP':kpop, 'THAI':thai, 'JPOP':jpop} 

@app.post('/api/postMusic')
async def postMusic(item: Music):
    # print(queue)
    Q.enqueue(item)
    Q.print_queue()
    return item

@app.delete('/api/deleteMusic')
async def deleteMusic(id : int):
    d = Q.removeById(id)
    print(d)
    return d

@app.get('/api/getMusic/{type}')
async def getMusicById(type:str):
    d = {}
    if type == 'dequeue':
        d = Q.peek() 
        print('Dequeue :',d)
    elif type == 'next':
        d = Q.next()
        print('next :',d)
    elif type == 'back':
        d = Q.back()
        print('back',d)
    return d

@app.get('/api/playMusic')
async def playMusic():
    d = Q.set_count()
    print('count :',d)
    return { 'setCound' : 'success'}

@app.get('/api/search/{type}')
async def search(type: str,inp:str):
    d = search_music(type,inp)
    print(d)
    return {'music':d}

