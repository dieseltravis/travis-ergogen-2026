function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[26.467239,-188.140248],[29.0527697,-223.4959758]]).appendArc([31.968379,-226.0399637],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([105.0745192,-221.4335831]).appendArc([105.2474524,-221.4281403],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([114.776689,-221.4281403]).appendArc([114.911695,-221.4314562],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([188.1517709,-225.0313792]).appendArc([191.0294531,-222.4852644],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([193.6177081,-187.0922827]).appendArc([193.4932533,-186.0506323],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([186.9237522,-165.6002771]).appendArc([186.7957423,-164.6152719],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([192.117396,-63.0720716]).appendArc([189.5150888,-60.1819164],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([177.8046516,-59.5681984]).appendArc([177.7079187,-59.5614168],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([154.9940951,-57.5660391]).appendArc([154.9261184,-57.5609156],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([132.51593,-56.1509357]).appendArc([132.4680042,-56.1483399],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([110.1487512,-55.1347788]).appendArc([109.8565029,-55.1370531],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([87.5576188,-56.4977353]).appendArc([87.5097394,-56.5010765],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([65.1257435,-58.2595394]).appendArc([65.0585471,-58.2656486],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([42.3979071,-60.6064789]).appendArc([42.2592614,-60.617266],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([30.5698583,-61.2298817]).appendArc([27.9675511,-64.1200369],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([33.2892048,-165.6632372]).appendArc([33.1611949,-166.6482423],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([26.5916938,-187.0985976]).appendArc([26.467239,-188.140248],{"radius":2.75,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        