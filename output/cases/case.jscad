function _standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[44.9263753,-213.8375862],"radius":2.85})
.union(
    CAG.circle({"center":[175.1585718,-212.7896209],"radius":2.85})
).union(
    CAG.circle({"center":[31.2392651,-64.4492597],"radius":2.85})
).union(
    new CSG.Path2D.arc({"center":[188.5850638,-73.1510164],"radius":2.85,"startangle":446.9999995,"endangle":627.0000015}).appendPoint([192.4304245,-76.2064544]).appendPoint([192.7287394,-70.514266]).appendPoint([188.7342213,-70.3049222]).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[110.0025666,-213.0593903],"radius":2.85,"startangle":0,"endangle":180}).appendPoint([107.1525666,-221.0593903]).appendPoint([112.8525666,-221.0593903]).appendPoint([112.8525666,-213.0593903]).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[110.0025666,-64.6281403],"radius":2.85,"startangle":100.1041826,"endangle":439.8958174}).appendPoint([110.5025666,-53.6281403]).appendPoint([109.5025666,-53.6281403]).appendPoint([109.5025666,-61.8223427]).close().innerToCAG()
).extrude({ offset: [0, 0, 4] });
}


function _mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[44.9263753,-213.8375862],"radius":1.5})
.union(
    CAG.circle({"center":[110.0025666,-213.0593903],"radius":1.5})
).union(
    CAG.circle({"center":[175.1585718,-212.7896209],"radius":1.5})
).union(
    CAG.circle({"center":[188.5850638,-73.1510164],"radius":1.5})
).union(
    CAG.circle({"center":[110.0025666,-64.6281403],"radius":1.5})
).union(
    CAG.circle({"center":[31.2392651,-64.4492597],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function _xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.6024502,-518.8557919],"radius":465.7415642,"startangle":82.1010679,"endangle":98.7786178}).appendArc([41.9206703,-58.6322661],{"radius":6,"clockwise":true,"large":false}).appendPoint([31.7134731,-59.1672027]).appendArc([26.0357119,-65.4729959],{"radius":6,"clockwise":false,"large":false}).appendPoint([30.3183617,-147.1908191]).appendArc([29.8969003,-149.7345394],{"radius":6,"clockwise":true,"large":false}).appendPoint([24.4142515,-163.4314597]).appendArc([23.9927902,-165.97518],{"radius":6,"clockwise":false,"large":false}).appendPoint([24.405456,-173.8493118]).appendArc([25.0904997,-176.3350421],{"radius":6,"clockwise":false,"large":false}).appendPoint([32.1808556,-189.7743404]).appendArc([32.7607576,-191.4132577],{"radius":6,"clockwise":true,"large":false}).appendPoint([37.2936625,-214.3998992]).appendArc([38.2263898,-216.6241545],{"radius":6,"clockwise":false,"large":false}).appendPoint([45.3768056,-227.0884442]).appendPoint([46.3743697,-227.0186877]).appendArc([163.5166227,-225.2415225],{"radius":370.4866686,"clockwise":true,"large":false}).appendArc([163.9567674,-225.2886695],{"radius":6,"clockwise":false,"large":false}).appendPoint([171.2764924,-225.8005146]).appendArc([176.6489393,-223.2002146],{"radius":6,"clockwise":false,"large":false}).appendPoint([181.8585572,-215.5761892]).appendArc([182.7912847,-213.3519339],{"radius":6,"clockwise":false,"large":false}).appendPoint([187.3241896,-190.3652924]).appendArc([187.9040914,-188.7263751],{"radius":6,"clockwise":true,"large":false}).appendPoint([194.9944474,-175.2870768]).appendArc([195.6794911,-172.8013465],{"radius":6,"clockwise":false,"large":false}).appendPoint([196.0921569,-164.9272147]).appendArc([195.6706955,-162.3834944],{"radius":6,"clockwise":false,"large":false}).appendPoint([190.1880467,-148.6865741]).appendArc([189.7665854,-146.1428538],{"radius":6,"clockwise":true,"large":false}).appendPoint([194.0492351,-64.4250306]).appendArc([188.371474,-58.1192374],{"radius":6,"clockwise":false,"large":false}).appendPoint([178.1180303,-57.5818771]).appendArc([177.6074898,-57.5331721],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _xlboard_extrude_5_6_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.6024502,-518.8557919],"radius":465.7415642,"startangle":82.1010679,"endangle":98.7786178}).appendArc([41.9206703,-58.6322661],{"radius":6,"clockwise":true,"large":false}).appendPoint([31.7134731,-59.1672027]).appendArc([26.0357119,-65.4729959],{"radius":6,"clockwise":false,"large":false}).appendPoint([30.3183617,-147.1908191]).appendArc([29.8969003,-149.7345394],{"radius":6,"clockwise":true,"large":false}).appendPoint([24.4142515,-163.4314597]).appendArc([23.9927902,-165.97518],{"radius":6,"clockwise":false,"large":false}).appendPoint([24.405456,-173.8493118]).appendArc([25.0904997,-176.3350421],{"radius":6,"clockwise":false,"large":false}).appendPoint([32.1808556,-189.7743404]).appendArc([32.7607576,-191.4132577],{"radius":6,"clockwise":true,"large":false}).appendPoint([37.2936625,-214.3998992]).appendArc([38.2263898,-216.6241545],{"radius":6,"clockwise":false,"large":false}).appendPoint([45.3768056,-227.0884442]).appendPoint([46.3743697,-227.0186877]).appendArc([163.5166227,-225.2415225],{"radius":370.4866686,"clockwise":true,"large":false}).appendArc([163.9567674,-225.2886695],{"radius":6,"clockwise":false,"large":false}).appendPoint([171.2764924,-225.8005146]).appendArc([176.6489393,-223.2002146],{"radius":6,"clockwise":false,"large":false}).appendPoint([181.8585572,-215.5761892]).appendArc([182.7912847,-213.3519339],{"radius":6,"clockwise":false,"large":false}).appendPoint([187.3241896,-190.3652924]).appendArc([187.9040914,-188.7263751],{"radius":6,"clockwise":true,"large":false}).appendPoint([194.9944474,-175.2870768]).appendArc([195.6794911,-172.8013465],{"radius":6,"clockwise":false,"large":false}).appendPoint([196.0921569,-164.9272147]).appendArc([195.6706955,-162.3834944],{"radius":6,"clockwise":false,"large":false}).appendPoint([190.1880467,-148.6865741]).appendArc([189.7665854,-146.1428538],{"radius":6,"clockwise":true,"large":false}).appendPoint([194.0492351,-64.4250306]).appendArc([188.371474,-58.1192374],{"radius":6,"clockwise":false,"large":false}).appendPoint([178.1180303,-57.5818771]).appendArc([177.6074898,-57.5331721],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.5988822,-519.6807142],"radius":464.5664942,"startangle":82.0883718,"endangle":98.793599}).appendArc([42.0753816,-60.6269027],{"radius":5,"clockwise":true,"large":false}).appendPoint([32.8167747,-61.1121258]).appendArc([28.085307,-66.3669535],{"radius":5,"clockwise":false,"large":false}).appendPoint([32.327135,-147.305851]).appendArc([31.9759172,-149.4256179],{"radius":5,"clockwise":true,"large":false}).appendPoint([26.3297529,-163.5310373]).appendArc([25.9785351,-165.6508043],{"radius":5,"clockwise":false,"large":false}).appendPoint([26.4142292,-173.9643436]).appendArc([26.985099,-176.0357856],{"radius":5,"clockwise":false,"large":false}).appendPoint([34.2466544,-189.7995811]).appendArc([34.7297295,-191.164451],{"radius":5,"clockwise":true,"large":false}).appendPoint([39.3604739,-214.624707]).appendArc([39.9656538,-216.2076335],{"radius":5,"clockwise":false,"large":false}).appendPoint([43.6640979,-222.4415962]).appendArc([48.3130534,-224.8782379],{"radius":5,"clockwise":false,"large":false}).appendPoint([55.956687,-224.343743]).appendArc([56.4593342,-224.2828963],{"radius":5,"clockwise":false,"large":false}).appendArc([163.6724944,-223.2470722],{"radius":333.4765734,"clockwise":true,"large":false}).appendArc([164.079789,-223.2923883],{"radius":5,"clockwise":false,"large":false}).appendPoint([171.7718937,-223.8302727]).appendArc([176.4208492,-221.3936309],{"radius":5,"clockwise":false,"large":false}).appendPoint([180.1192933,-215.1596683]).appendArc([180.7244733,-213.5767417],{"radius":5,"clockwise":false,"large":false}).appendPoint([185.3552176,-190.1164857]).appendArc([185.8382927,-188.7516157],{"radius":5,"clockwise":true,"large":false}).appendPoint([193.0998481,-174.9878203]).appendArc([193.6707179,-172.9163783],{"radius":5,"clockwise":false,"large":false}).appendPoint([194.106412,-164.602839]).appendArc([193.7551942,-162.4830721],{"radius":5,"clockwise":false,"large":false}).appendPoint([188.1090299,-148.3776527]).appendArc([187.7578121,-146.2578857],{"radius":5,"clockwise":true,"large":false}).appendPoint([191.9996401,-65.3189882]).appendArc([187.2681724,-60.0641605],{"radius":5,"clockwise":false,"large":false}).appendPoint([177.9709487,-59.5769136]).appendArc([177.544401,-59.5361736],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = _standoff_extrude_4_outline_fn();

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
                let _holes__part_0 = _mounting_extrude_4_outline_fn();

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

            

                function _xlbottom_case_fn() {
                    

                // creating part 0 of case _xlbottom
                let _xlbottom__part_0 = _xlboard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _xlbottom__part_0_bounds = _xlbottom__part_0.getBounds();
                let _xlbottom__part_0_x = _xlbottom__part_0_bounds[0].x + (_xlbottom__part_0_bounds[1].x - _xlbottom__part_0_bounds[0].x) / 2
                let _xlbottom__part_0_y = _xlbottom__part_0_bounds[0].y + (_xlbottom__part_0_bounds[1].y - _xlbottom__part_0_bounds[0].y) / 2
                _xlbottom__part_0 = translate([-_xlbottom__part_0_x, -_xlbottom__part_0_y, 0], _xlbottom__part_0);
                _xlbottom__part_0 = rotate([0,0,0], _xlbottom__part_0);
                _xlbottom__part_0 = translate([_xlbottom__part_0_x, _xlbottom__part_0_y, 0], _xlbottom__part_0);

                _xlbottom__part_0 = translate([0,0,0], _xlbottom__part_0);
                let result = _xlbottom__part_0;

            
                    return result;
                }

            

                function _wall_case_fn() {
                    

                // creating part 0 of case _wall
                let _wall__part_0 = _outerwall_case_fn();

                // make sure that rotations are relative
                let _wall__part_0_bounds = _wall__part_0.getBounds();
                let _wall__part_0_x = _wall__part_0_bounds[0].x + (_wall__part_0_bounds[1].x - _wall__part_0_bounds[0].x) / 2
                let _wall__part_0_y = _wall__part_0_bounds[0].y + (_wall__part_0_bounds[1].y - _wall__part_0_bounds[0].y) / 2
                _wall__part_0 = translate([-_wall__part_0_x, -_wall__part_0_y, 0], _wall__part_0);
                _wall__part_0 = rotate([0,0,0], _wall__part_0);
                _wall__part_0 = translate([_wall__part_0_x, _wall__part_0_y, 0], _wall__part_0);

                _wall__part_0 = translate([0,0,0], _wall__part_0);
                let result = _wall__part_0;

            

                // creating part 1 of case _wall
                let _wall__part_1 = _innerwall_case_fn();

                // make sure that rotations are relative
                let _wall__part_1_bounds = _wall__part_1.getBounds();
                let _wall__part_1_x = _wall__part_1_bounds[0].x + (_wall__part_1_bounds[1].x - _wall__part_1_bounds[0].x) / 2
                let _wall__part_1_y = _wall__part_1_bounds[0].y + (_wall__part_1_bounds[1].y - _wall__part_1_bounds[0].y) / 2
                _wall__part_1 = translate([-_wall__part_1_x, -_wall__part_1_y, 0], _wall__part_1);
                _wall__part_1 = rotate([0,0,0], _wall__part_1);
                _wall__part_1 = translate([_wall__part_1_x, _wall__part_1_y, 0], _wall__part_1);

                _wall__part_1 = translate([0,0,0], _wall__part_1);
                result = result.subtract(_wall__part_1);

            
                    return result;
                }

            

                function _outerwall_case_fn() {
                    

                // creating part 0 of case _outerwall
                let _outerwall__part_0 = _xlboard_extrude_5_6_outline_fn();

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
                let case__part_2 = _xlbottom_case_fn();

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
                let case__part_3 = _wall_case_fn();

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

        