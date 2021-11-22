from DATA import INTER, JPOP , THAI , KPOP

def search_music(cate , inp):
        ser = []
        if(cate == "Inter"):
                ser = INTER
        if(cate == "J-POP"):
                ser = JPOP
        if(cate == "Thai"):
                ser = THAI
        if(cate == "K-POP"):
                ser = KPOP
        # print(ser)
        compare = []
        x = inp.lower()
        for i in range(len(ser)):
                compare.append(str(ser[i]['title']).lower())
                compare.append(str(ser[i]['artist']).lower())
        q = []
        for i in range(len(compare)):
                if(x in compare[i]): 
                        index = int(i/2)
                        q.append(ser[index])
                else:
                        continue

        return q

if __name__ == '__main__':
        inp = input('Enter input (type)/(title) :').split('/')
        print(search_music(inp[0],inp[-1]))