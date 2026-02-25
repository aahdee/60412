# Crochet Generation Research 

For this deliverable, I did a lot of research into crochet, crochet patterns, and modern crochet research. Crochet is the process of interlocking yarn through loops with a slim hooked tool. By varying how many loops are pulled through exisiting stitches, crocheters can create multiple diffenet patterns and effects. Some basic stitches are chain, single crochet, double crochet, half double crochet, and triple crochet. Lets start with a standard crochet pattern. 

## Modern Crochet Patterns
Crochet patterns are displayed in two differnt formats - textual and visual. Textual patterns describe their instructions by each row as written text. First, a pattern will list the abbreviations of the stitches used, and then it will describe instructions for each row using the abbreviations.

<img width="940" height="368" alt="image" src="https://github.com/user-attachments/assets/a239e86c-de88-4478-b991-17c12154df2e" />
<img width="978" height="437" alt="image" src="https://github.com/user-attachments/assets/5771a8b6-ba61-4183-b3e0-3cd768740233" />

(pattern: https://thecrochetswirl.com/granny-hexagons/) 

Visual patterns describe their insructions by symbols. Similarly to textual patterns, visual patterns provide the key for their patterns before describing their instructions. 

<img width="713" height="977" alt="image" src="https://github.com/user-attachments/assets/458e9c17-2a20-498f-902e-21b48c01f25d" />

(pattern: https://www.ravelry.com/patterns/library/twilight-23)

Visual patterns are typically paired with texual patterns when they are highly complex to accomodate different crocheter's preferences.

<img width="727" height="697" alt="image" src="https://github.com/user-attachments/assets/0b9d7ff4-f3f8-4619-96e8-b7c4b308ec65" />

(pattern: https://www.ravelry.com/patterns/library/twilight-23)

Most crocheters are used to textual patterns, so visual patterns are accopanyed by a textual description. However there are benefits that visual patterns that cannot be provided by textual patterns. One benefit is that visual patterns are better at describing very complex crochet patterns, like doilies. Another benefit is that they are universal - visual patterns can break language barriers. Of course, there are drawbacks to visual patterns: it is diffucult to represent 3d objects in a visual pattern since visual patterns are represented on a 2d plane. 

### A side on Corner to Corner Crochet Patterns

There is a style of crochet called *corner to corner* (abbreviated as C2C) whos patterns are commonly represented visually in grids. 

<img width="1492" height="876" alt="image" src="https://github.com/user-attachments/assets/07b7d6ab-cace-4c0f-89f9-ac51f4f6706b" />

(pattern: https://www.craftematics.com/crochet/corner-to-corner)


## Visual Crochet Pattern Editors

Currently there are not that many crochet editors that allow crochet pattern designers to make visual patterns. As of 2026, the most popular option is [StitchFiddle](https://www.stitchfiddle.com/en), an online web editor for knitting and crochet pattens. Its functionality for visiual patterns is very limited as it allows users to drag and drop stitch symbols to a blank page. There isn't a way for a pattern designer to know if their pattern is structually correct (for example, a structually correct crochet pattern starts with chains or a magic ring, and correctly increases and decreases 


## Data structures!

After thinking about how people crochet for a *very* long time, I started to design a data structure to represent crochet stitches, and therefore crochet meshes. 

Crochet stitches are constructed by looping yarn into existing stitches on the current work. This stitch that it loops into can be though of as a stitch's **parent**. For each crochet stitch, there can be a stitch before or after it, and we can describe these as a stitch's **neighbors**, specifically the **prev** and **next** when referring to the direction of the crocheter's work. As a new row is made, our stitch could be looped into by a new stitch. That new stitch will be the original stitch's **child**. 

<img width="1332" height="617" alt="image" src="https://github.com/user-attachments/assets/3b84b3ba-f8d7-46bf-bbc1-d273d6903f99" />

(pattern: https://attic24.co.uk/posts/neat-ripple-pattern/)

With a structure like this, a stitch's neighbors, and parents, and children can be easily referenced. This works for simple crochet patterns that are created by the row or in the round. Increases and decreases, an important technique that allows crocheters to increase or decrease the number of stitches by stitching into






