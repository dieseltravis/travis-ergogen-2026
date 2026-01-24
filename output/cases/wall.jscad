function xlboard_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[24.4698738,-188.2446894],[27.1971991,-225.6249951]]).appendArc([30.1180271,-228.1691084],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([103.0719336,-223.4339148]).appendArc([103.2500522,-223.4281403],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([116.7741254,-223.4281403]).appendArc([116.9142514,-223.4317127],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([190.002184,-227.160743]).appendArc([192.8850194,-224.6144277],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([195.6150733,-187.1967241]).appendArc([195.4905852,-186.1555307],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([188.9210113,-165.704949]).appendArc([188.7930014,-164.7199438],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([194.219327,-61.1794844]).appendArc([191.6170198,-58.2893292],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([177.9092311,-57.5709344]).appendArc([177.8126816,-57.5641689],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([155.0638812,-55.567254]).appendArc([154.9959321,-55.5621368],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([132.5508359,-54.151239]).appendArc([132.50291,-54.148646],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([110.1485616,-53.1347619]).appendArc([109.8566912,-53.1370298],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([87.5227161,-54.4980417]).appendArc([87.4748362,-54.5013791],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([65.0559315,-56.2607615]).appendArc([64.9887608,-56.2668626],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([42.2931121,-58.6092389]).appendArc([42.1547134,-58.6200004],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([28.4679273,-59.3372945]).appendArc([25.8656201,-62.2274497],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([31.2919457,-165.7679091]).appendArc([31.1639358,-166.7529142],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([24.5943619,-187.203496]).appendArc([24.4698738,-188.2446894],{"radius":2.75,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[26.467239,-188.140248],[29.0527697,-223.4959758]]).appendArc([31.968379,-226.0399637],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([105.0745192,-221.4335831]).appendArc([105.2474524,-221.4281403],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([114.776689,-221.4281403]).appendArc([114.911695,-221.4314562],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([188.1517709,-225.0313792]).appendArc([191.0294531,-222.4852644],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([193.6177081,-187.0922827]).appendArc([193.4932533,-186.0506323],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([186.9237522,-165.6002771]).appendArc([186.7957423,-164.6152719],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([192.117396,-63.0720716]).appendArc([189.5150888,-60.1819164],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([177.8046516,-59.5681984]).appendArc([177.7079187,-59.5614168],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([154.9940951,-57.5660391]).appendArc([154.9261184,-57.5609156],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([132.51593,-56.1509357]).appendArc([132.4680042,-56.1483399],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([110.1487512,-55.1347788]).appendArc([109.8565029,-55.1370531],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([87.5576188,-56.4977353]).appendArc([87.5097394,-56.5010765],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([65.1257435,-58.2595394]).appendArc([65.0585471,-58.2656486],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([42.3979071,-60.6064789]).appendArc([42.2592614,-60.617266],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([30.5698583,-61.2298817]).appendArc([27.9675511,-64.1200369],{"radius":2.75,"clockwise":false,"large":false}).appendPoint([33.2892048,-165.6632372]).appendArc([33.1611949,-166.6482423],{"radius":2.75,"clockwise":true,"large":false}).appendPoint([26.5916938,-187.0985976]).appendArc([26.467239,-188.140248],{"radius":2.75,"clockwise":false,"large":false}).close().innerToCAG()
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
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerwall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerwall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        