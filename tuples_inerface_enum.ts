const tuple: [string,number,boolean]= ['st',3,true];
//enum
const enum direction {
    up=0,
    down=1,
    left=2,
    right=3

}
function keypressed(key:number ,test?:string)
{
if(key===direction.up)
    console.log("up key is pressed");
    else if(key ===direction.down)
    console.log("down key ressed");
    else if(key===direction.left)
    console.log("left key is pressed");
    else
    console.log("right key presssed");


}

const user :user[] =[{firstname:"hary",verified:true}];
interface user{
    firstname: string,
    verified: boolean
}

keypressed(4);
