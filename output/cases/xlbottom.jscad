function xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D([[24.4698738,-188.2446894],[27.1971991,-225.6249951]]).appendArc([30.1180271,-228.1691084],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([103.0719336,-223.4339148]).appendArc([103.2500522,-223.4281403],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([116.7741254,-223.4281403]).appendArc([116.9142514,-223.4317127],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([190.002184,-227.160743]).appendArc([192.8850194,-224.6144277],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([195.6150733,-187.1967241]).appendArc([195.4905852,-186.1555307],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([188.9210113,-165.704949]).appendArc([188.7930014,-164.7199438],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([194.219327,-61.1794844]).appendArc([191.6170198,-58.2893292],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([177.9092311,-57.5709344]).appendArc([177.8126816,-57.5641689],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([155.0638812,-55.567254]).appendArc([154.9959321,-55.5621368],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([132.5508359,-54.151239]).appendArc([132.50291,-54.148646],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([110.1485616,-53.1347619]).appendArc([109.8566912,-53.1370298],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([87.5227161,-54.4980417]).appendArc([87.4748362,-54.5013791],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([65.0559315,-56.2607615]).appendArc([64.9887608,-56.2668626],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([42.2931121,-58.6092389]).appendArc([42.1547134,-58.6200004],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([28.4679273,-59.3372945]).appendArc([25.8656201,-62.2274497],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([31.2919457,-165.7679091]).appendArc([31.1639358,-166.7529142],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([24.5943619,-187.203496]).appendArc([24.4698738,-188.2446894],{"radius":2.75,"clockwise":false,"large":false}).close().innerToCAG()
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

        