var canvas = new fabric.canvas = ("myCanvas");

var width = 30;
var height = 30;

player_x = 10;
player_y = 10;

image_width = "";
image_height = "";

function player_update() {
    fabric.Image.fromURL("images.jpeg",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToWidth(150);
        player_object.set({
            top:player_y,
            left:player_x,
        }
        );
        canvas.add(player_object);
    });
}
function newImage(getImage) {
    fabric.Image.fromURL(getImage,function(Img) {
        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:player_y,
            left:player_x,
        }
        );
        canvas.add(block_object);
    });
}