# RPG Browser Game

This is a simple RPG game where the player can navigate between different locations, fight monsters, gain experience points, buy weapons, and ultimately defeat the dragon to win the game.

## Features

- Navigate between locations: town square, store, cave
- Fight monsters: slime, fanged beast, dragon
- Buy and upgrade weapons
- Manage health, gold, and experience points
- Secret Easter egg minigame

## How to Play

1. **Start in the Town Square**: From here, you can go to the store, enter the cave to fight monsters, or challenge the dragon directly.
2. **Buy Weapons**: Visit the store to purchase better weapons. You can sell your old weapons for gold as well.
3. **Fight Monsters**: Enter the cave to fight weaker monsters (slime or fanged beast) and gather experience and gold.
4. **Defeat the Dragon**: Once you are powerful enough, fight the dragon to win the game.

## Game Mechanics

- Health: Start with 100 health. Can be replenished at the store.
- Gold: Earn gold by defeating monsters and use it to buy weapons or health.
- XP: Gain experience points by defeating monsters to increase your power.
- Inventory: Hold weapons that can be used in combat. Weapons can break during fights.


------------------------------------------------------------------------------------------------------------------------------------------------

A simple browser-based RPG where the player navigates between different locations (town, store, cave) 
and fights monsters (slime, fanged beast, dragon). 
It includes functionality for fighting monsters, managing health, buying and selling weapons, and gaining experience points and gold. 


Here's a breakdown of the key mechanics and functions:

Variables:

xp, health, gold, currentWeapon: Track the player's stats.
fighting, monsterHealth: Track the current fight state.
inventory: Holds the player's items.
button1, button2, button3, text, xpText, healthText, goldText, monsterStats, monsterName, monsterHealthText: These are elements in the HTML that are updated to reflect the game state.
Weapon and Monster Data:

weapons: An array of objects containing weapon details like name and power.
monsters: An array of objects describing the enemies.
Locations and Navigation:

locations: Describes different places the player can visit. Each location has button text, button functions, and some description text.
Main Functions:

update(location): Updates the buttons and text based on the current location.
goTown, goStore, goCave: These functions handle navigating to specific locations.
buyHealth, buyWeapon, sellWeapon: Functions to handle in-game purchases and inventory management.
fightSlime, fightBeast, fightDragon: These functions initiate fights with different monsters.
Combat System:

goFight(): Initializes a fight with a selected monster.
attack(): Handles the player’s attack, calculating damage, checking if the monster is defeated or if the player dies.
dodge(): Provides an option to dodge the monster's attack.
defeatMonster(): Rewards the player with gold and XP after winning a fight.
lose(): Ends the game if the player dies.
winGame(): Ends the game if the player defeats the dragon.
Easter Egg and Minigame:

There is an easter egg minigame where the player can guess a number. If the number matches one of 10 randomly generated numbers, they win gold; if not, they lose health.
Restarting the Game:

restart(): Resets the game state, including health, XP, gold, and inventory, and returns the player to the town square.
The game loop revolves around managing health, buying better weapons, fighting monsters to earn gold and XP, and eventually defeating the dragon to win. The game allows replaying upon defeat or victory.