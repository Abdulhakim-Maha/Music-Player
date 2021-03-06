class Queue:
    def __init__(self, ls = None):
        if ls == None: 
            self.items = []
        else: 
            self.items = ls
        self.count = 0
            
    def enqueue(self, val):
        self.items.append(val)

    def print_queue(self) -> str:
        print(str(self.items)) 

    def dequeueF(self):
        if self.isEmpty(): 
            return
        return self.items.pop(0)
    def peek(self):
        if self.isEmpty():
            return 
        else:
            return self.items[0]
    
    def isEmpty(self):
        return len(self.items) == 0

    def removeById(self,id):
        Count=0
        for i in self.items:
            if i.id == id:
                del self.items[Count]
            Count+=1
        return self.items

    def set_count(self):
        self.count = 0
        return self.count
        
    def size(self):
        return len(self.items)

    def back(self):
        self.count -= 1
        if self.count < 0:
            self.count = len(self.items)-1
        # print("Sample Music :", q.items[self.count])
        return self.items[self.count]

    def next(self):
        self.count += 1
        if self.count > len(self.items)-1:
            self.count = 0
        # print("Sample Music :", q.items[self.count])
        return self.items[self.count]
    



#------------------------------------------------------------------------------
if __name__ == '__main__':
    list = ['zero', 'one', 'two', 'three', 'four', 'five']

    q = Queue()
    while True :
        print("'zero', 'one', 'two', 'three', 'four', 'five'")
        input2 = (input("choose in queue (0-5) and please '00' if finish : "))
        if input2 == '00':
            break

        else:
            newInput2 = int(input2)
            q.enqueue(list[newInput2])
            print(q.items)

    lenQ = len(q.items)
    print("---------------------------------------------------------------------")
    print(q.items)
    count = 0

    input5 = input("'s' to START : ")
    if input5 == 's':
        print("Sample Music :", q.items[count])

    while True :
        input4 = int(input("('1'-> BACK / '2'-> NEXT) :"))
        if input4 == 1:
            print(q.back())

        elif input4 == 2:
            print(q.next())