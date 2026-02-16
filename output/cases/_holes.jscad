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

            

            function main() {
                return _holes_case_fn();
            }

        