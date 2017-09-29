/**
 * Created by Vainika on 09/24/17.
 */

const LEFT = 0;
const RIGHT = 1;

var height=parseInt(document.getElementById("canvas").getAttribute("height"));
var width=parseInt(document.getElementById("canvas").getAttribute("width"));

function addRowElem(value, next_to = null, place = RIGHT)
{
    /* If first elem, place in center. If not, we need LEFT or RIGHT. */
    // create a rectangle object
    var rect = new fabric.Rect({
      originX: 'center',
      originY: 'center',
      fill: 'red',
      width: 20,
      height: 20
    });
    var strValue=String(value);
    var text= new fabric.Text(strValue, {fontSize: 10, originX: 'center', originY: 'center'});
    var group = new fabric.Group([ rect, text ], {left:width/2, top: 40, angle:0});
    canvas.add(group);
    return group;
}

function colorElem(value)
{
}

function createList()
{
}