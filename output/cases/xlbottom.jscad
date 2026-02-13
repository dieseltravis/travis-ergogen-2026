function xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.6024502,-518.8557919],"radius":465.7415642,"startangle":82.0695937,"endangle":98.8157526,"resolution":2927}).appendPoint([25.7216962,-59.4812184]).appendPoint([31.3183726,-166.2721643]).appendPoint([24.4310082,-187.7120036]).appendPoint([26.27961,-212.3847798]).appendPoint([44.3792416,-227.1582006]).appendArc([175.7057055,-226.1102353],{"radius":674.0203297,"clockwise":true,"large":false,"resolution":4235}).appendPoint([193.8053371,-211.3368145]).appendPoint([195.6539389,-186.6640383]).appendPoint([188.7665745,-165.224199]).appendPoint([194.3632509,-58.4332531]).appendPoint([177.8608978,-57.5684014]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
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
            
            
        
            function main() {
                return xlbottom_case_fn();
            }

        