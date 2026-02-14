function xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.6024502,-518.8557919],"radius":465.7415642,"startangle":82.1010679,"endangle":98.7786178}).appendArc([41.9206703,-58.6322661],{"radius":6,"clockwise":true,"large":false}).appendPoint([31.7134731,-59.1672027]).appendArc([26.0357119,-65.4729959],{"radius":6,"clockwise":false,"large":false}).appendPoint([31.2607139,-165.1719716]).appendArc([30.9814195,-167.3210737],{"radius":6,"clockwise":true,"large":false}).appendPoint([24.7892759,-186.5967437]).appendArc([24.5185292,-188.8801216],{"radius":6,"clockwise":false,"large":false}).appendPoint([26.0722262,-209.6168857]).appendArc([28.523342,-214.0187665],{"radius":6,"clockwise":false,"large":false}).appendPoint([44.5149271,-225.664558]).appendArc([48.6522031,-226.7837888],{"radius":6,"clockwise":false,"large":false}).appendArc([171.4850469,-225.7780836],{"radius":662.4691973,"clockwise":true,"large":false}).appendArc([175.5244982,-224.649744],{"radius":6,"clockwise":false,"large":false}).appendPoint([191.561605,-212.9708011]).appendArc([194.0127209,-208.5689204],{"radius":6,"clockwise":false,"large":false}).appendPoint([195.5664179,-187.8321563]).appendArc([195.2956712,-185.5487784],{"radius":6,"clockwise":false,"large":false}).appendPoint([189.1035276,-166.2731084]).appendArc([188.8242331,-164.1240063],{"radius":6,"clockwise":true,"large":false}).appendPoint([194.0492351,-64.4250306]).appendArc([188.371474,-58.1192374],{"radius":6,"clockwise":false,"large":false}).appendPoint([178.1180303,-57.5818771]).appendArc([177.6074898,-57.5331721],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function _xlbottom_case_fn() {
                    

                // creating part 0 of case _xlbottom
                let _xlbottom__part_0 = xlboard_extrude_1_outline_fn();

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

            

            function main() {
                return _xlbottom_case_fn();
            }

        