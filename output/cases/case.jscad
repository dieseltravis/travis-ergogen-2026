function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[38.2974527,-215.8047884],"radius":2.85,"resolution":18})
.union(
    CAG.circle({"center":[181.7874944,-214.7568231],"radius":2.85,"resolution":18})
).union(
    CAG.circle({"center":[30.7137823,-63.9761129],"radius":2.85,"resolution":18})
).union(
    new CSG.Path2D.arc({"center":[188.5850638,-73.1510164],"radius":2.85,"startangle":446.9999995,"endangle":627.0000015,"resolution":18}).appendPoint([192.4304245,-76.2064544]).appendPoint([192.7287394,-70.514266]).appendPoint([188.7342213,-70.3049222]).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[110.0025666,-64.6281403],"radius":2.85,"startangle":100.1041826,"endangle":439.8958174,"resolution":18}).appendPoint([110.5025666,-53.6281403]).appendPoint([109.5025666,-53.6281403]).appendPoint([109.5025666,-61.8223427]).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[110.0025666,-213.0593903],"radius":2.85,"startangle":0,"endangle":180,"resolution":18}).appendPoint([107.1525666,-223.0593903]).appendPoint([112.8525666,-223.0593903]).appendPoint([112.8525666,-213.0593903]).close().innerToCAG()
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[38.2974527,-215.8047884],"radius":1.5,"resolution":10})
.union(
    CAG.circle({"center":[110.0025666,-213.0593903],"radius":1.5,"resolution":10})
).union(
    CAG.circle({"center":[181.7874944,-214.7568231],"radius":1.5,"resolution":10})
).union(
    CAG.circle({"center":[188.5850638,-73.1510164],"radius":1.5,"resolution":10})
).union(
    CAG.circle({"center":[110.0025666,-64.6281403],"radius":1.5,"resolution":10})
).union(
    CAG.circle({"center":[30.7137823,-63.9761129],"radius":1.5,"resolution":10})
).extrude({ offset: [0, 0, 4] });
}


function xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.6024502,-518.8557919],"radius":465.7415642,"startangle":82.0695937,"endangle":98.8157526,"resolution":2927}).appendPoint([25.7216962,-59.4812184]).appendPoint([31.3183726,-166.2721643]).appendPoint([24.4310082,-187.7120036]).appendPoint([26.27961,-212.3847798]).appendPoint([44.3792416,-227.1582006]).appendArc([175.7057055,-226.1102353],{"radius":674.0203297,"clockwise":true,"large":false,"resolution":4235}).appendPoint([193.8053371,-211.3368145]).appendPoint([195.6539389,-186.6640383]).appendPoint([188.7665745,-165.224199]).appendPoint([194.3632509,-58.4332531]).appendPoint([177.8608978,-57.5684014]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlboard_extrude_5_6_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.6024502,-518.8557919],"radius":465.7415642,"startangle":82.0695937,"endangle":98.8157526,"resolution":2927}).appendPoint([25.7216962,-59.4812184]).appendPoint([31.3183726,-166.2721643]).appendPoint([24.4310082,-187.7120036]).appendPoint([26.27961,-212.3847798]).appendPoint([44.3792416,-227.1582006]).appendArc([175.7057055,-226.1102353],{"radius":674.0203297,"clockwise":true,"large":false,"resolution":4235}).appendPoint([193.8053371,-211.3368145]).appendPoint([195.6539389,-186.6640383]).appendPoint([188.7665745,-165.224199]).appendPoint([194.3632509,-58.4332531]).appendPoint([177.8608978,-57.5684014]).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.5988822,-519.6807142],"radius":464.5664942,"startangle":82.0619952,"endangle":98.8247198,"resolution":2919}).appendPoint([27.8236272,-61.3738056]).appendPoint([33.3156317,-166.1674924]).appendPoint([26.4282673,-187.6073317]).appendPoint([28.2747382,-212.2452668]).appendPoint([46.2348567,-225.0235596]).appendArc([173.8500904,-223.9755943],{"radius":664.3183738,"clockwise":true,"large":false,"resolution":4175}).appendPoint([191.8102089,-211.1973015]).appendPoint([193.6566798,-186.5593664]).appendPoint([186.7693154,-165.1195271]).appendPoint([192.2613199,-60.3258403]).appendPoint([177.7562259,-59.5656605]).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function xlbottom_case_fn() {
                    

                // creating part 0 of case xlbottom
                let xlbottom__part_0 = xlboard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlbottom__part_0_bounds = xlbottom__part_0.getBounds();
                let xlbottom__part_0_x = xlbottom__part_0_bounds[0].x + (xlbottom__part_0_bounds[1].x - xlbottom__part_0_bounds[0].x) / 2
                let xlbottom__part_0_y = xlbottom__part_0_bounds[0].y + (xlbottom__part_0_bounds[1].y - xlbottom__part_0_bounds[0].y) / 2
                xlbottom__part_0 = translate([-xlbottom__part_0_x, -xlbottom__part_0_y, 0], xlbottom__part_0);
                xlbottom__part_0 = rotate([0,0,0], xlbottom__part_0);
                xlbottom__part_0 = translate([xlbottom__part_0_x, xlbottom__part_0_y, 0], xlbottom__part_0);

                xlbottom__part_0 = translate([0,0,0], xlbottom__part_0);
                let result = xlbottom__part_0;
                
            
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
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = xlbottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        