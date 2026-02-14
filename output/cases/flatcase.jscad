function flat_extrude_1_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.5988822,-519.6807142],"radius":464.5664942,"startangle":82.0883718,"endangle":98.793599}).appendArc([42.0753816,-60.6269027],{"radius":5,"clockwise":true,"large":false}).appendPoint([32.8167747,-61.1121258]).appendArc([28.085307,-66.3669535],{"radius":5,"clockwise":false,"large":false}).appendPoint([33.2675828,-165.2506651]).appendArc([33.0348374,-167.0415835],{"radius":5,"clockwise":true,"large":false}).appendPoint([26.7268391,-186.6779006]).appendArc([26.501224,-188.5808121],{"radius":5,"clockwise":false,"large":false}).appendPoint([28.0993672,-209.9052467]).appendArc([30.1867633,-213.6056374],{"radius":5,"clockwise":false,"large":false}).appendPoint([44.6981421,-223.9302156]).appendArc([48.1038136,-224.8303755],{"radius":5,"clockwise":false,"large":false}).appendArc([172.0245264,-223.817085],{"radius":664.3183738,"clockwise":true,"large":false}).appendArc([175.3487879,-222.9092986],{"radius":5,"clockwise":false,"large":false}).appendPoint([189.8981837,-212.5576721]).appendArc([191.9855799,-208.8572814],{"radius":5,"clockwise":false,"large":false}).appendPoint([193.5837231,-187.5328468]).appendArc([193.3581081,-185.6299354],{"radius":5,"clockwise":false,"large":false}).appendPoint([187.0501097,-165.9936183]).appendArc([186.8173643,-164.2026998],{"radius":5,"clockwise":true,"large":false}).appendPoint([191.9996401,-65.3189882]).appendArc([187.2681724,-60.0641605],{"radius":5,"clockwise":false,"large":false}).appendPoint([177.9709487,-59.5769136]).appendArc([177.544401,-59.5361736],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[38.2974527,-215.8047884],"radius":1.5})
.union(
    CAG.circle({"center":[110.0025666,-213.0593903],"radius":1.5})
).union(
    CAG.circle({"center":[181.7874944,-214.7568231],"radius":1.5})
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

        