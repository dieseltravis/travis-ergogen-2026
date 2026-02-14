function xlboard_extrude_5_6_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.6024502,-518.8557919],"radius":465.7415642,"startangle":82.1010679,"endangle":98.7786178}).appendArc([41.9206703,-58.6322661],{"radius":6,"clockwise":true,"large":false}).appendPoint([31.7134731,-59.1672027]).appendArc([26.0357119,-65.4729959],{"radius":6,"clockwise":false,"large":false}).appendPoint([31.2607139,-165.1719716]).appendArc([30.9814195,-167.3210737],{"radius":6,"clockwise":true,"large":false}).appendPoint([24.7892759,-186.5967437]).appendArc([24.5185292,-188.8801216],{"radius":6,"clockwise":false,"large":false}).appendPoint([26.0722262,-209.6168857]).appendArc([28.523342,-214.0187665],{"radius":6,"clockwise":false,"large":false}).appendPoint([44.5149271,-225.664558]).appendArc([48.6522031,-226.7837888],{"radius":6,"clockwise":false,"large":false}).appendArc([171.4850469,-225.7780836],{"radius":662.4691973,"clockwise":true,"large":false}).appendArc([175.5244982,-224.649744],{"radius":6,"clockwise":false,"large":false}).appendPoint([191.561605,-212.9708011]).appendArc([194.0127209,-208.5689204],{"radius":6,"clockwise":false,"large":false}).appendPoint([195.5664179,-187.8321563]).appendArc([195.2956712,-185.5487784],{"radius":6,"clockwise":false,"large":false}).appendPoint([189.1035276,-166.2731084]).appendArc([188.8242331,-164.1240063],{"radius":6,"clockwise":true,"large":false}).appendPoint([194.0492351,-64.4250306]).appendArc([188.371474,-58.1192374],{"radius":6,"clockwise":false,"large":false}).appendPoint([178.1180303,-57.5818771]).appendArc([177.6074898,-57.5331721],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.5988822,-519.6807142],"radius":464.5664942,"startangle":82.0883718,"endangle":98.793599}).appendArc([42.0753816,-60.6269027],{"radius":5,"clockwise":true,"large":false}).appendPoint([32.8167747,-61.1121258]).appendArc([28.085307,-66.3669535],{"radius":5,"clockwise":false,"large":false}).appendPoint([33.2675828,-165.2506651]).appendArc([33.0348374,-167.0415835],{"radius":5,"clockwise":true,"large":false}).appendPoint([26.7268391,-186.6779006]).appendArc([26.501224,-188.5808121],{"radius":5,"clockwise":false,"large":false}).appendPoint([28.0993672,-209.9052467]).appendArc([30.1867633,-213.6056374],{"radius":5,"clockwise":false,"large":false}).appendPoint([44.6981421,-223.9302156]).appendArc([48.1038136,-224.8303755],{"radius":5,"clockwise":false,"large":false}).appendArc([172.0245264,-223.817085],{"radius":664.3183738,"clockwise":true,"large":false}).appendArc([175.3487879,-222.9092986],{"radius":5,"clockwise":false,"large":false}).appendPoint([189.8981837,-212.5576721]).appendArc([191.9855799,-208.8572814],{"radius":5,"clockwise":false,"large":false}).appendPoint([193.5837231,-187.5328468]).appendArc([193.3581081,-185.6299354],{"radius":5,"clockwise":false,"large":false}).appendPoint([187.0501097,-165.9936183]).appendArc([186.8173643,-164.2026998],{"radius":5,"clockwise":true,"large":false}).appendPoint([191.9996401,-65.3189882]).appendArc([187.2681724,-60.0641605],{"radius":5,"clockwise":false,"large":false}).appendPoint([177.9709487,-59.5769136]).appendArc([177.544401,-59.5361736],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
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

            

            function main() {
                return _wall_case_fn();
            }

        