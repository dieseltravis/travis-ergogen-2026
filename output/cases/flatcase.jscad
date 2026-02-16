function flat_extrude_1_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.5988822,-519.6807142],"radius":464.5664942,"startangle":82.0883718,"endangle":98.793599}).appendArc([42.0753816,-60.6269027],{"radius":5,"clockwise":true,"large":false}).appendPoint([32.8167747,-61.1121258]).appendArc([28.085307,-66.3669535],{"radius":5,"clockwise":false,"large":false}).appendPoint([32.327135,-147.305851]).appendArc([31.9759172,-149.4256179],{"radius":5,"clockwise":true,"large":false}).appendPoint([26.3297529,-163.5310373]).appendArc([25.9785351,-165.6508043],{"radius":5,"clockwise":false,"large":false}).appendPoint([26.4142292,-173.9643436]).appendArc([26.985099,-176.0357856],{"radius":5,"clockwise":false,"large":false}).appendPoint([34.2466544,-189.7995811]).appendArc([34.7297295,-191.164451],{"radius":5,"clockwise":true,"large":false}).appendPoint([39.3604739,-214.624707]).appendArc([39.9656538,-216.2076335],{"radius":5,"clockwise":false,"large":false}).appendPoint([43.6640979,-222.4415962]).appendArc([48.3130534,-224.8782379],{"radius":5,"clockwise":false,"large":false}).appendPoint([55.956687,-224.343743]).appendArc([56.4593342,-224.2828963],{"radius":5,"clockwise":false,"large":false}).appendArc([163.6724944,-223.2470722],{"radius":333.4765734,"clockwise":true,"large":false}).appendArc([164.079789,-223.2923883],{"radius":5,"clockwise":false,"large":false}).appendPoint([171.7718937,-223.8302727]).appendArc([176.4208492,-221.3936309],{"radius":5,"clockwise":false,"large":false}).appendPoint([180.1192933,-215.1596683]).appendArc([180.7244733,-213.5767417],{"radius":5,"clockwise":false,"large":false}).appendPoint([185.3552176,-190.1164857]).appendArc([185.8382927,-188.7516157],{"radius":5,"clockwise":true,"large":false}).appendPoint([193.0998481,-174.9878203]).appendArc([193.6707179,-172.9163783],{"radius":5,"clockwise":false,"large":false}).appendPoint([194.106412,-164.602839]).appendArc([193.7551942,-162.4830721],{"radius":5,"clockwise":false,"large":false}).appendPoint([188.1090299,-148.3776527]).appendArc([187.7578121,-146.2578857],{"radius":5,"clockwise":true,"large":false}).appendPoint([191.9996401,-65.3189882]).appendArc([187.2681724,-60.0641605],{"radius":5,"clockwise":false,"large":false}).appendPoint([177.9709487,-59.5769136]).appendArc([177.544401,-59.5361736],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[44.9263753,-213.8375862],"radius":1.5})
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
)).extrude({ offset: [0, 0, 1] });
}




                function flatcase_case_fn() {
                    

                // creating part 0 of case flatcase
                let flatcase__part_0 = flat_extrude_1_outline_fn();

                // make sure that rotations are relative
                let flatcase__part_0_bounds = flatcase__part_0.getBounds();
                let flatcase__part_0_x = flatcase__part_0_bounds[0].x + (flatcase__part_0_bounds[1].x - flatcase__part_0_bounds[0].x) / 2
                let flatcase__part_0_y = flatcase__part_0_bounds[0].y + (flatcase__part_0_bounds[1].y - flatcase__part_0_bounds[0].y) / 2
                flatcase__part_0 = translate([-flatcase__part_0_x, -flatcase__part_0_y, 0], flatcase__part_0);
                flatcase__part_0 = rotate([0,0,0], flatcase__part_0);
                flatcase__part_0 = translate([flatcase__part_0_x, flatcase__part_0_y, 0], flatcase__part_0);

                flatcase__part_0 = translate([0,0,0], flatcase__part_0);
                let result = flatcase__part_0;

            
                    return result;
                }

            

            function main() {
                return flatcase_case_fn();
            }

        