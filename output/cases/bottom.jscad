function board_extrude_1_outline_fn(){
    return new CSG.Path2D.arc({"center":[115.2240637,-539.7304045],"radius":484.6303938,"startangle":81.9907121,"endangle":98.6509367}).appendPoint([27.8236272,-61.3738056]).appendPoint([33.3156317,-166.1674924]).appendPoint([26.4282673,-187.6073317]).appendPoint([28.2747382,-212.2452668]).appendPoint([46.2348567,-225.0235596]).appendArc([173.8500904,-223.9755943],{"radius":664.3183738,"clockwise":true,"large":false}).appendPoint([191.8102089,-211.1973015]).appendPoint([193.6566798,-186.5593664]).appendPoint([186.7693154,-165.1195271]).appendPoint([191.7379603,-70.3121356]).appendArc([182.7493736,-59.8273403],{"radius":7.7987376,"clockwise":false,"large":false}).close().innerToCAG()
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

        