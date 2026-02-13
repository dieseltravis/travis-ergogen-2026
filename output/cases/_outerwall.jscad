function xlboard_extrude_5_6_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.6024502,-518.8557919],"radius":465.7415642,"startangle":82.0695937,"endangle":98.8157526,"resolution":2927}).appendPoint([25.7216962,-59.4812184]).appendPoint([31.3183726,-166.2721643]).appendPoint([24.4310082,-187.7120036]).appendPoint([26.27961,-212.3847798]).appendPoint([44.3792416,-227.1582006]).appendArc([175.7057055,-226.1102353],{"radius":674.0203297,"clockwise":true,"large":false,"resolution":4235}).appendPoint([193.8053371,-211.3368145]).appendPoint([195.6539389,-186.6640383]).appendPoint([188.7665745,-165.224199]).appendPoint([194.3632509,-58.4332531]).appendPoint([177.8608978,-57.5684014]).close().innerToCAG()
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
            
            
        
            function main() {
                return _outerwall_case_fn();
            }

        