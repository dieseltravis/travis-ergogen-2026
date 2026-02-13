function xlboard_extrude_5_6_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.6024502,-518.8557919],"radius":465.7415642,"startangle":82.0695937,"endangle":98.8157526}).appendPoint([25.7216962,-59.4812184]).appendPoint([31.3183726,-166.2721643]).appendPoint([24.4310082,-187.7120036]).appendPoint([26.27961,-212.3847798]).appendPoint([46.3743697,-227.0186877]).appendArc([173.7105774,-225.9707224],{"radius":662.4691973,"clockwise":true,"large":false}).appendPoint([193.8053371,-211.3368145]).appendPoint([195.6539389,-186.6640383]).appendPoint([188.7665745,-165.224199]).appendPoint([193.3165317,-78.4058438]).appendArc([177.8608978,-57.5684014],{"radius":17.5189515,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D.arc({"center":[115.2240637,-539.7304045],"radius":484.6303938,"startangle":81.9907121,"endangle":98.6509367}).appendPoint([27.8236272,-61.3738056]).appendPoint([33.3156317,-166.1674924]).appendPoint([26.4282673,-187.6073317]).appendPoint([28.2747382,-212.2452668]).appendPoint([46.2348567,-225.0235596]).appendArc([173.8500904,-223.9755943],{"radius":664.3183738,"clockwise":true,"large":false}).appendPoint([191.8102089,-211.1973015]).appendPoint([193.6566798,-186.5593664]).appendPoint([186.7693154,-165.1195271]).appendPoint([191.7379603,-70.3121356]).appendArc([182.7493736,-59.8273403],{"radius":7.7987376,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function _outerwall_case_fn() {
                    

                // creating part 0 of case _outerwall
                let _outerwall__part_0 = xlboard_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outerwall__part_0_bounds = _outerwall__part_0.getBounds();
                let _outerwall__part_0_x = _outerwall__part_0_bounds[0].x + (_outerwall__part_0_bounds[1].x - _outerwall__part_0_bounds[0].x) / 2
                let _outerwall__part_0_y = _outerwall__part_0_bounds[0].y + (_outerwall__part_0_bounds[1].y - _outerwall__part_0_bounds[0].y) / 2
                _outerwall__part_0 = translate([-_outerwall__part_0_x, -_outerwall__part_0_y, 0], _outerwall__part_0);
                _outerwall__part_0 = rotate([0,0,0], _outerwall__part_0);
                _outerwall__part_0 = translate([_outerwall__part_0_x, _outerwall__part_0_y, 0], _outerwall__part_0);

                _outerwall__part_0 = translate([0,0,0], _outerwall__part_0);
                let result = _outerwall__part_0;
                
            
                    return result;
                }
            
            

                function _innerwall_case_fn() {
                    

                // creating part 0 of case _innerwall
                let _innerwall__part_0 = board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _innerwall__part_0_bounds = _innerwall__part_0.getBounds();
                let _innerwall__part_0_x = _innerwall__part_0_bounds[0].x + (_innerwall__part_0_bounds[1].x - _innerwall__part_0_bounds[0].x) / 2
                let _innerwall__part_0_y = _innerwall__part_0_bounds[0].y + (_innerwall__part_0_bounds[1].y - _innerwall__part_0_bounds[0].y) / 2
                _innerwall__part_0 = translate([-_innerwall__part_0_x, -_innerwall__part_0_y, 0], _innerwall__part_0);
                _innerwall__part_0 = rotate([0,0,0], _innerwall__part_0);
                _innerwall__part_0 = translate([_innerwall__part_0_x, _innerwall__part_0_y, 0], _innerwall__part_0);

                _innerwall__part_0 = translate([0,0,0], _innerwall__part_0);
                let result = _innerwall__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerwall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerwall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        