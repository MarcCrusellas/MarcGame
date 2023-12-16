// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [], -Infinity);
            case "level":
            case "level2":return tiles.createTilemap(hex`19001900060707070707070707070707070707070707070707070707050309090909010909010909090909090909090909090909090a0309090909090909090909090909090909090909090909010a0309090909090202010101010101010101010101010101010a0309090909090202020201010101010101010101010101010a0309090909020201010102010101010101010101010101010a0309090902020101010101020202020202010101010109090a0309090902010109010102020201010102020202090901010a0309090101010109010201020101010101010109010202020a0301090101010109090101010901010101020902010101010a0309090101010901090101010901010202090909020101010a0301090101010901090101010909090109020202020202020a0301090101090102010901090901090901020101020209090a0301090109010102010901090909090102010101020902020a0301090109010201010902010909010201010102090101020a0301090901010201010109010901020101010209090102010a0301090901020101010209090202010101020909020902010a0301090101020101090109020201010101090901020102010a0301090101020101090109020201010109090102010102010a0309010101020101090902020201010109020102010201010a0309010101020102010902020101010909020201010201090a0309010101020102090902020101010909090901020102010a0301010101020102090902020101090109090901020102020a0301010101020109010901020109010209090901020201020a0b080808080808080808080808080808080808080808080804`, img`
2222222222222222222222222
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2222222222222222222222222
`, [myTiles.transparency16,sprites.builtin.oceanDepths8,sprites.castle.tilePath2,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile1,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "forestTiles11":
            case "tile1":return tile1;
            case "forestTiles9":
            case "tile2":return tile2;
            case "forestTiles15":
            case "tile3":return tile3;
            case "forestTiles13":
            case "tile6":return tile6;
            case "forestTiles7":
            case "tile4":return tile4;
            case "forestTiles5":
            case "tile5":return tile5;
            case "forestTiles6":
            case "tile7":return tile7;
            case "forestTiles0":
            case "tile8":return tile8;
            case "floorLightMoss":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
