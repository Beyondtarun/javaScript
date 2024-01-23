from turtle import *
title('Jai Shree Ram')
bgcolor('white')
pensize(2)
pencolor("ORANGE")
Ram = ["जय श्री राम"] * 51
angle = 360 / 51
penup()
sety(-1)
for _ in range(52):
    left(angle)
    forward(260)
    if Ram:
        write(Ram.pop(), align="right", font=('Arial', 12, "bold"))
    backward(260)
penup()    
goto(-40, -20)
pendown()
write("|| रामो विग्रहवान् धर्मः ||", font=("Arial", 35, "normal"), align="center")
hideturtle()
done()