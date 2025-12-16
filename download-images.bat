@echo off
cd public\images

echo Downloading product images...
curl -L "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&w=800" -o mens-trousers.jpg
curl -L "https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&w=800" -o denim.jpg
curl -L "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=800" -o pajamas.jpg
curl -L "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=800" -o chino-shorts.jpg

echo Downloading about section images...
curl -L "https://images.pexels.com/photos/7679681/pexels-photo-7679681.jpeg?auto=compress&cs=tinysrgb&w=800" -o about-1.jpg
curl -L "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800" -o about-2.jpg
curl -L "https://images.pexels.com/photos/7679476/pexels-photo-7679476.jpeg?auto=compress&cs=tinysrgb&w=800" -o about-3.jpg
curl -L "https://images.pexels.com/photos/7679686/pexels-photo-7679686.jpeg?auto=compress&cs=tinysrgb&w=800" -o about-4.jpg

echo Downloading competency image...
curl -L "https://images.pexels.com/photos/7679639/pexels-photo-7679639.jpeg?auto=compress&cs=tinysrgb&w=800" -o competency-bottomwear.jpg

echo Downloading infrastructure images...
curl -L "https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&w=800" -o nature-1.jpg
curl -L "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=800" -o nature-2.jpg
curl -L "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800" -o nature-3.jpg
curl -L "https://images.pexels.com/photos/7679484/pexels-photo-7679484.jpeg?auto=compress&cs=tinysrgb&w=800" -o manufacturing.jpg

echo All images downloaded successfully!
pause
