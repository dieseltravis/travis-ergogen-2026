function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.5988822,-519.6807142],"radius":464.5664942,"startangle":82.0619952,"endangle":98.8247198,"resolution":2919}).appendPoint([27.8236272,-61.3738056]).appendPoint([33.3156317,-166.1674924]).appendPoint([26.4282673,-187.6073317]).appendPoint([28.2747382,-212.2452668]).appendPoint([46.2348567,-225.0235596]).appendArc([173.8500904,-223.9755943],{"radius":664.3183738,"clockwise":true,"large":false,"resolution":4175}).appendPoint([191.8102089,-211.1973015]).appendPoint([193.6566798,-186.5593664]).appendPoint([186.7693154,-165.1195271]).appendPoint([192.2613199,-60.3258403]).appendPoint([177.7562259,-59.5656605]).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
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
            
            
        
            function main() {
                return _innerwall_case_fn();
            }

        