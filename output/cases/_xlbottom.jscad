function _xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D.arc({"center":[113.6024502,-518.8557919],"radius":465.7415642,"startangle":82.1010679,"endangle":98.7786178}).appendArc([41.9206703,-58.6322661],{"radius":6,"clockwise":true,"large":false}).appendPoint([31.7134731,-59.1672027]).appendArc([26.0357119,-65.4729959],{"radius":6,"clockwise":false,"large":false}).appendPoint([30.3183617,-147.1908191]).appendArc([29.8969003,-149.7345394],{"radius":6,"clockwise":true,"large":false}).appendPoint([24.4142515,-163.4314597]).appendArc([23.9927902,-165.97518],{"radius":6,"clockwise":false,"large":false}).appendPoint([24.405456,-173.8493118]).appendArc([25.0904997,-176.3350421],{"radius":6,"clockwise":false,"large":false}).appendPoint([32.1808556,-189.7743404]).appendArc([32.7607576,-191.4132577],{"radius":6,"clockwise":true,"large":false}).appendPoint([37.2936625,-214.3998992]).appendArc([38.2263898,-216.6241545],{"radius":6,"clockwise":false,"large":false}).appendPoint([45.3768056,-227.0884442]).appendPoint([46.3743697,-227.0186877]).appendArc([163.5166227,-225.2415225],{"radius":370.4866686,"clockwise":true,"large":false}).appendArc([163.9567674,-225.2886695],{"radius":6,"clockwise":false,"large":false}).appendPoint([171.2764924,-225.8005146]).appendArc([176.6489393,-223.2002146],{"radius":6,"clockwise":false,"large":false}).appendPoint([181.8585572,-215.5761892]).appendArc([182.7912847,-213.3519339],{"radius":6,"clockwise":false,"large":false}).appendPoint([187.3241896,-190.3652924]).appendArc([187.9040914,-188.7263751],{"radius":6,"clockwise":true,"large":false}).appendPoint([194.9944474,-175.2870768]).appendArc([195.6794911,-172.8013465],{"radius":6,"clockwise":false,"large":false}).appendPoint([196.0921569,-164.9272147]).appendArc([195.6706955,-162.3834944],{"radius":6,"clockwise":false,"large":false}).appendPoint([190.1880467,-148.6865741]).appendArc([189.7665854,-146.1428538],{"radius":6,"clockwise":true,"large":false}).appendPoint([194.0492351,-64.4250306]).appendArc([188.371474,-58.1192374],{"radius":6,"clockwise":false,"large":false}).appendPoint([178.1180303,-57.5818771]).appendArc([177.6074898,-57.5331721],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function _xlbottom_case_fn() {
                    

                // creating part 0 of case _xlbottom
                let _xlbottom__part_0 = _xlboard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _xlbottom__part_0_bounds = _xlbottom__part_0.getBounds();
                let _xlbottom__part_0_x = _xlbottom__part_0_bounds[0].x + (_xlbottom__part_0_bounds[1].x - _xlbottom__part_0_bounds[0].x) / 2
                let _xlbottom__part_0_y = _xlbottom__part_0_bounds[0].y + (_xlbottom__part_0_bounds[1].y - _xlbottom__part_0_bounds[0].y) / 2
                _xlbottom__part_0 = translate([-_xlbottom__part_0_x, -_xlbottom__part_0_y, 0], _xlbottom__part_0);
                _xlbottom__part_0 = rotate([0,0,0], _xlbottom__part_0);
                _xlbottom__part_0 = translate([_xlbottom__part_0_x, _xlbottom__part_0_y, 0], _xlbottom__part_0);

                _xlbottom__part_0 = translate([0,0,0], _xlbottom__part_0);
                let result = _xlbottom__part_0;

            
                    return result;
                }

            

            function main() {
                return _xlbottom_case_fn();
            }

        