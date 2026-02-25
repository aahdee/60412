class StitchType{
    //type 
    static Chain = new StitchType('Chain');
    static SlipStitch = new StitchType('SlipStitch');
    static Single = new StitchType('Single');
    static Double = new StitchType('Double');
    static HalfDouble = new StitchType('HalfDouble');
    static Triple = new StitchType('Triple');
    //


    constructor(name){
        this.name = name;
    }
}
class Stitch{
    //type
    static type;
    //visual representation;

    constructor(type,x,y,prev,next, parent, child){
        this.type = type;
        this.x = x;
        this.y = y;
        this.prev = prev;
        this.next = next;
        this.parent = parent;
        this.child = child;
    }

}
class Chain extends Stitch{

}