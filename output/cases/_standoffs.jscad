function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[31.8027996,-223.2760321],"radius":4})
.union(
    CAG.circle({"center":[188.2821475,-222.2280668],"radius":4})
).union(
    CAG.circle({"center":[188.5850638,-73.1510164],"radius":4})
).union(
    CAG.circle({"center":[30.7137823,-63.9761129],"radius":4})
).union(
    new CSG.Path2D.arc({"center":[110.0025666,-213.0593903],"radius":4,"startangle":7.1807557,"endangle":172.8192443}).appendPoint([106.0025666,-212.5593903]).appendPoint([106.0025666,-221.5593903]).appendPoint([114.0025666,-221.5593903]).appendPoint([114.0025666,-212.5593903]).appendPoint([113.9711936,-212.5593903]).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[110.0025666,-64.6281403],"radius":4,"startangle":194.4775124,"endangle":345.5224876}).appendPoint([114.0025666,-65.6281403]).appendPoint([114.0025666,-55.6281403]).appendPoint([106.0025666,-55.6281403]).appendPoint([106.0025666,-65.6281403]).appendPoint([106.1295833,-65.6281403]).close().innerToCAG()
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

        