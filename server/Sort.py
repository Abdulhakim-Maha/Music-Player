import operator
inter = [
		{
				'id': 103,
				'artist': 'Jessie J, Ariana Grande, Nicki Mina',
				'title':'Bang Bang',
				'img_src':'/Image-inter/Bang Bang.jpg',
				'src' : '/Inter/Bang Bang.mp3'
		},
		{
				'id': 101,
				'artist': 'Lukas Graham',
				'title':'7 Years',
				'img_src':'/Image-inter/7 Year.jpg',
				'src' : '/Inter/7 Years.mp3'
		},
		{
				'id': 102,
				'artist': 'Charlie Puth',
				'title':'Attention',
				'img_src':'/Image-inter/Attention.jpg',
				'src' : '/Inter/Attention.mp3'
		},
		{
				'id': 104,
				'artist': 'Taylor Swift',
				'title':'Blank Space',
				'img_src':'/Image-inter/Blank Space.jpg',
				'src' : '/Inter/Blank Space.mp3'
		}]

def SortSong(type,ls = []):
	lst = []
	if type == 'title':
		lst = sorted(ls, key=operator.itemgetter("title"))
	elif type == 'artist':
		lst = sorted(ls, key=operator.itemgetter("artist"))
	return lst

if __name__ == '__main__':
	terminate = False
	while terminate is not True :
		INTER = inter
		inp = int(input("Sort by Default(0) Title(1) Artist(2) : "))
		if inp == 1 :
			INTER = SortSong('title',inter)
		elif inp == 2 :
			INTER = SortSong('artist', inter)
		elif inp == -1:
			terminate = True
			break
		print(INTER)

		
