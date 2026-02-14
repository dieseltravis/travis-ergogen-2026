function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[38.2974527,-215.8047884],"radius":2.85})
.union(
    CAG.circle({"center":[181.7874944,-214.7568231],"radius":2.85})
).union(
    CAG.circle({"center":[31.2392651,-64.4492597],"radius":2.85})
).union(
    new CSG.Path2D.arc({"center":[188.5850638,-73.1510164],"radius":2.85,"startangle":446.9999995,"endangle":627.0000015}).appendPoint([192.4304245,-76.2064544]).appendPoint([192.7287394,-70.514266]).appendPoint([188.7342213,-70.3049222]).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[110.0025666,-64.6281403],"radius":2.85,"startangle":100.1041826,"endangle":439.8958174}).appendPoint([110.5025666,-53.6281403]).appendPoint([109.5025666,-53.6281403]).appendPoint([109.5025666,-61.8223427]).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[110.0025666,-213.0593903],"radius":2.85,"startangle":0,"endangle":180}).appendPoint([107.1525666,-223.0593903]).appendPoint([112.8525666,-223.0593903]).appendPoint([112.8525666,-213.0593903]).close().innerToCAG()
).extrude({ offset: [0, 0, 4] });
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

            

            function main() {
                return _standoffs_case_fn();
            }

        