# **_Puzzle React_**

Mai Ubeid

Sajeda Ismail

## **What is our Game?**

Its a puzzle expects you to sort some numbers inside a board in ascending way.

## **How can you play and win the game?**

- You can play by moving the possible cell, it will swap with the empty cell which is arround it. you can move it left, right, top or bottom based on its location to the empty cell.

- If the empty cell doesnt locate around the targeted cell, that cell cant be moved!
- In any time while playing, you can reset the game by randomly shuffle the numbers again.

- Repeat this process until all the numbers are in the correct ascending sort.

- Now you are the winner ;)

## **Can you go to diffrent game levels?**

Yes! You can choose between three levels:

1- **_Beginner_**

![](https://media1.giphy.com/media/l3V0tEzAQrbG7CQow/200w.webp?cid=790b761180d92708ab0caa8986b62a4282cfc2344da04f2d&rid=200w.webp)

You will start from 3\*3 board size, and then move to more advanced levels by increasing that size as you win the previous board.

2- **_Meduim_**

![](https://media2.giphy.com/media/d1E1szXDsHUs3WvK/200w.webp?cid=790b7611a125c633cc631274754d6c2ecc2329477ecbb3d7&rid=200w.webp)

You will start from 4\*4 board size and then move to more advance levels by increasing that size as you win the previous board.

3- **_Hard_**

![](https://media0.giphy.com/media/l0ExvMqtnw7aTzPCE/200w.webp?cid=790b7611a125c633cc631274754d6c2ecc2329477ecbb3d7&rid=200w.webp)

You will start from 5\*5 board size and then move to more advanced levels by increasing that size as you win the previous board.

## **Why did we build this game?**

To practise Reactjs library for client-side rendering. Also, to be fammiliar with statefull class components and its lifecycle.

## **How did we build this game?**

1- We chose the game idea.
2- Discussed that idea and planned on paper.
3- Create React app with its required modules and file structure.

4- Created the class Components (Puzzle, Board, Cell) with their required methods.

5- Rendered each component in its parent

     App{
       Puzzle{
          Board{
               Cell
                    }}}

With using props to transfer the required properties and methods between components.

6- Tracking the updates which occur by the user on the mounted board, update the state according to them.

7- check the win state and show messages and pop up dialog to the user to let him move to the next levels,

8- then we call new game, render and mount it to let the user complete his playing journy!

9- Finally, we wrote this Readme to guide you how to play our game -\_-

**_Enjoy! ^\_^_**
