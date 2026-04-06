from PIL import Image

with Image.open('logo.jpg') as img:
    img = img.convert('RGBA')
    img.save('favicon.ico', format='ICO', sizes=[(64, 64), (32, 32), (16, 16)])
print('favicon created')
