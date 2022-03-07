JQuery Shuffle Text 1.0.1
===========

### [Live Demo](http://www.anthonydupont.be/lab/ShuffleText)
JQuery Shuffle Text is a **lightweight** JQuery plugin able to shuffle any of your text content.
Easy to use, it offers a **set of options** to customize it...

**Note:**
Be aware this plugin is efficient with **small text content**. Don't use it with long paragraphs for example.
How to use it ?
-------------------------
To use **JQuery Shuffle Text** you need to target the content you want to shuffle and pass the output content to the function.

```js
$("#myTarget").shuffleText("My output text");
```
Options
-------------------------
**JQuery Shuffle Text** offers a set of options to customize it:

+ **time**     : The time in milliseconds (ms) of the shuffle for each letter - *Default:* _**40**_
+ **maxTime**  : The maximum time of the global shuffle - *Default:* _**1000**_
+ **amount**   : The number of shuffle to do for each letter - *Default:* _**3**_
+ **complete** : Something to do when the shuffle is completed - *Default:* _**null**_

```js
$("#myTarget").shuffleText("My output text", {
    time     : 30,
    maxTime  : 2500,
    amount   : 4,
    complete : function(){
        // Do something
    }
});
```

Finally you can choose your own chars to appear during the shuffle by editing the content of the array

```js
// Add/Remove Chars You Want To Appear During Shuffle In This Array
var aChars = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","k","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
```
Copyright
-------------------------
**JQuery Shuffle Text** is created by [Anthony Du Pont](http://www.twitter.com/Anthodpnt) and is completely **free for commercial use**.

**Notes**: Any problem to use this plugin ? Please [contact me](mailto:antho.dpnt@gmail.com).

If you **enjoy it**, please **share it** ;).