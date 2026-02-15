function plateholes_extrude_1_41_outline_fn(){
    return new CSG.Path2D([[40.7361024,-186.4270106],[35.5963132,-88.3539901]]).appendArc([36.5426067,-87.3030246],{"radius":1,"clockwise":true,"large":false}).appendPoint([50.5978238,-86.5664219]).appendArc([50.7471571,-86.5472461],{"radius":1,"clockwise":false,"large":false}).appendPoint([58.9584153,-84.8565499]).appendArc([59.1251851,-84.8366128],{"radius":1,"clockwise":true,"large":false}).appendPoint([72.9144793,-84.35508]).appendArc([73.0494961,-84.3411477],{"radius":1,"clockwise":false,"large":false}).appendPoint([80.9439163,-82.9799633]).appendArc([81.0963802,-82.9655741],{"radius":1,"clockwise":true,"large":false}).appendPoint([94.8994575,-82.7246406]).appendArc([95.0346969,-82.7130668],{"radius":1,"clockwise":false,"large":false}).appendPoint([102.9516712,-81.4898664]).appendArc([103.104363,-81.4781403],{"radius":1,"clockwise":true,"large":false}).appendPoint([116.9223229,-81.4781403]).appendArc([117.032475,-81.4842256],{"radius":1,"clockwise":true,"large":false}).appendPoint([125.011956,-82.3685633]).appendArc([125.1046557,-82.3744963],{"radius":1,"clockwise":false,"large":false}).appendPoint([138.9508085,-82.6161818]).appendArc([139.0608376,-82.6241886],{"radius":1,"clockwise":true,"large":false}).appendPoint([147.0236692,-83.647653]).appendArc([147.1162512,-83.6552029],{"radius":1,"clockwise":false,"large":false}).appendPoint([160.9476248,-84.1382052]).appendArc([161.074152,-84.1507113],{"radius":1,"clockwise":true,"large":false}).appendPoint([169.3575099,-85.5056362]).appendArc([169.4666006,-85.517381],{"radius":1,"clockwise":false,"large":false}).appendPoint([183.5423404,-86.2550593]).appendArc([184.4886339,-87.3060248],{"radius":1,"clockwise":true,"large":false}).appendPoint([179.3488447,-185.3790453]).appendArc([179.2945476,-185.6557021],{"radius":1,"clockwise":true,"large":false}).appendPoint([177.2651474,-191.4808392]).appendArc([177.2119158,-191.7400755],{"radius":1,"clockwise":false,"large":false}).appendPoint([176.0911731,-207.767442]).appendArc([175.0238525,-208.6952495],{"radius":1,"clockwise":true,"large":false}).appendPoint([144.1623161,-206.5372008]).appendArc([143.9224588,-206.4904991],{"radius":1,"clockwise":true,"large":false}).appendPoint([137.0262434,-204.2449971]).appendArc([136.734082,-204.1960118],{"radius":1,"clockwise":false,"large":false}).appendPoint([123.0003789,-203.9562892]).appendArc([122.8722088,-203.9457817],{"radius":1,"clockwise":true,"large":false}).appendPoint([117.0499879,-203.0888001]).appendArc([116.9043654,-203.0781403],{"radius":1,"clockwise":false,"large":false}).appendPoint([103.1297892,-203.0781403]).appendArc([102.9274579,-203.0988232],{"radius":1,"clockwise":false,"large":false}).appendPoint([97.1811647,-204.2860329]).appendArc([96.9962858,-204.3065635],{"radius":1,"clockwise":true,"large":false}).appendPoint([83.3371468,-204.5449846]).appendArc([82.9621168,-204.6250728],{"radius":1,"clockwise":false,"large":false}).appendPoint([76.2002491,-207.5105158]).appendArc([75.8775232,-207.5883203],{"radius":1,"clockwise":true,"large":false}).appendPoint([45.0610946,-209.7432149]).appendArc([43.9937741,-208.8154073],{"radius":1,"clockwise":true,"large":false}).appendPoint([42.8730314,-192.7880408]).appendArc([42.8197997,-192.5288045],{"radius":1,"clockwise":false,"large":false}).appendPoint([40.7903995,-186.7036674]).appendArc([40.7361024,-186.4270106],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[144.1232209,-205.3315367],[151.1061693,-205.8198321]]).appendPoint([152.2222729,-189.8588073]).appendPoint([145.2393245,-189.3705119]).appendPoint([144.1232209,-205.3315367]).close().innerToCAG()
.union(
    new CSG.Path2D([[167.9250991,-206.9959261],[174.9080475,-207.4842215]]).appendPoint([176.0241511,-191.5231967]).appendPoint([169.0412027,-191.0349013]).appendPoint([167.9250991,-206.9959261]).close().innerToCAG()
).union(
    new CSG.Path2D([[45.1768996,-208.5321868],[52.159848,-208.0438914]]).appendPoint([51.0437444,-192.0828666]).appendPoint([44.060796,-192.571162]).appendPoint([45.1768996,-208.5321868]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.9787778,-206.8677974],[75.9617262,-206.379502]]).appendPoint([74.8456226,-190.4184772]).appendPoint([67.8626742,-190.9067726]).appendPoint([68.9787778,-206.8677974]).close().innerToCAG()
).union(
    new CSG.Path2D([[81.2839997,-98.114607],[95.231875,-97.8711459]]).appendPoint([94.9884139,-83.9232706]).appendPoint([81.0405386,-84.1667317]).appendPoint([81.2839997,-98.114607]).close().innerToCAG()
).union(
    new CSG.Path2D([[81.6513729,-119.161401],[95.5992482,-118.9179399]]).appendPoint([95.3557871,-104.9700646]).appendPoint([81.4079118,-105.2135257]).appendPoint([81.6513729,-119.161401]).close().innerToCAG()
).union(
    new CSG.Path2D([[82.0187461,-140.208195],[95.9666214,-139.9647339]]).appendPoint([95.7231603,-126.0168586]).appendPoint([81.775285,-126.2603197]).appendPoint([82.0187461,-140.208195]).close().innerToCAG()
).union(
    new CSG.Path2D([[124.7937645,-97.5213774],[138.7416398,-97.7648385]]).appendPoint([138.9851009,-83.8169632]).appendPoint([125.0372256,-83.5735021]).appendPoint([124.7937645,-97.5213774]).close().innerToCAG()
).union(
    new CSG.Path2D([[124.4263913,-118.5681714],[138.3742666,-118.8116325]]).appendPoint([138.6177277,-104.8637572]).appendPoint([124.6698524,-104.6202961]).appendPoint([124.4263913,-118.5681714]).close().innerToCAG()
).union(
    new CSG.Path2D([[124.0590181,-139.6149654],[138.0068934,-139.8584265]]).appendPoint([138.2503545,-125.9105512]).appendPoint([124.3024792,-125.6670901]).appendPoint([124.0590181,-139.6149654]).close().innerToCAG()
).union(
    new CSG.Path2D([[82.3861193,-161.254989],[96.3339946,-161.0115279]]).appendPoint([96.0905335,-147.0636526]).appendPoint([82.1426582,-147.3071137]).appendPoint([82.3861193,-161.254989]).close().innerToCAG()
).union(
    new CSG.Path2D([[82.7534925,-182.301783],[96.7013678,-182.0583219]]).appendPoint([96.4579067,-168.1104466]).appendPoint([82.5100314,-168.3539077]).appendPoint([82.7534925,-182.301783]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.1208657,-203.348577],[97.068741,-203.1051159]]).appendPoint([96.8252799,-189.1572406]).appendPoint([82.8774046,-189.4007017]).appendPoint([83.1208657,-203.348577]).close().innerToCAG()
).union(
    new CSG.Path2D([[123.6916449,-160.6617594],[137.6395202,-160.9052205]]).appendPoint([137.8829813,-146.9573452]).appendPoint([123.935106,-146.7138841]).appendPoint([123.6916449,-160.6617594]).close().innerToCAG()
).union(
    new CSG.Path2D([[123.3242717,-181.7085534],[137.272147,-181.9520145]]).appendPoint([137.5156081,-168.0041392]).appendPoint([123.5677328,-167.7606781]).appendPoint([123.3242717,-181.7085534]).close().innerToCAG()
).union(
    new CSG.Path2D([[122.9568985,-202.7553474],[136.9047738,-202.9988085]]).appendPoint([137.1482349,-189.0509332]).appendPoint([123.2003596,-188.8074721]).appendPoint([122.9568985,-202.7553474]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.5410575,-98.7943513],[160.4825595,-99.2811993]]).appendPoint([160.9694075,-85.3396973]).appendPoint([147.0279055,-84.8528493]).appendPoint([146.5410575,-98.7943513]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.8064231,-119.8315282],[159.7479251,-120.3183762]]).appendPoint([160.2347731,-106.3768742]).appendPoint([146.2932711,-105.8900262]).appendPoint([145.8064231,-119.8315282]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.0717887,-140.8687051],[159.0132907,-141.3555531]]).appendPoint([159.5001387,-127.4140511]).appendPoint([145.5586367,-126.9272031]).appendPoint([145.0717887,-140.8687051]).close().innerToCAG()
).union(
    new CSG.Path2D([[144.3371543,-161.905882],[158.2786563,-162.39273]]).appendPoint([158.7655043,-148.451228]).appendPoint([144.8240023,-147.96438]).appendPoint([144.3371543,-161.905882]).close().innerToCAG()
).union(
    new CSG.Path2D([[143.6025199,-182.9430589],[157.5440219,-183.4299069]]).appendPoint([158.0308699,-169.4884049]).appendPoint([144.0893679,-169.0015569]).appendPoint([143.6025199,-182.9430589]).close().innerToCAG()
).union(
    new CSG.Path2D([[59.5696872,-99.980325],[73.5111892,-99.493477]]).appendPoint([73.0243412,-85.551975]).appendPoint([59.0828392,-86.038823]).appendPoint([59.5696872,-99.980325]).close().innerToCAG()
).union(
    new CSG.Path2D([[60.3043216,-121.0175019],[74.2458236,-120.5306539]]).appendPoint([73.7589756,-106.5891519]).appendPoint([59.8174736,-107.0759999]).appendPoint([60.3043216,-121.0175019]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.038956,-142.0546788],[74.980458,-141.5678308]]).appendPoint([74.49361,-127.6263288]).appendPoint([60.552108,-128.1131768]).appendPoint([61.038956,-142.0546788]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.7735904,-163.0918557],[75.7150924,-162.6050077]]).appendPoint([75.2282444,-148.6635057]).appendPoint([61.2867424,-149.1503537]).appendPoint([61.7735904,-163.0918557]).close().innerToCAG()
).union(
    new CSG.Path2D([[62.5082248,-184.1290326],[76.4497268,-183.6421846]]).appendPoint([75.9628788,-169.7006826]).appendPoint([62.0213768,-170.1875306]).appendPoint([62.5082248,-184.1290326]).close().innerToCAG()
).union(
    new CSG.Path2D([[166.4154989,-142.6860463],[180.3463809,-143.4161329]]).appendPoint([181.0764675,-129.4852509]).appendPoint([167.1455855,-128.7551643]).appendPoint([166.4154989,-142.6860463]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.313827,-163.707198],[179.244709,-164.4372846]]).appendPoint([179.9747956,-150.5064026]).appendPoint([166.0439136,-149.776316]).appendPoint([165.313827,-163.707198]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.2121551,-184.7283497],[178.1430371,-185.4584363]]).appendPoint([178.8731237,-171.5275543]).appendPoint([164.9422417,-170.7974677]).appendPoint([164.2121551,-184.7283497]).close().innerToCAG()
).union(
    new CSG.Path2D([[167.5171708,-121.6648946],[181.4480528,-122.3949812]]).appendPoint([182.1781394,-108.4640992]).appendPoint([168.2472574,-107.7340126]).appendPoint([167.5171708,-121.6648946]).close().innerToCAG()
).union(
    new CSG.Path2D([[39.7385662,-144.4640982],[53.6694482,-143.7340116]]).appendPoint([52.9393616,-129.8031296]).appendPoint([39.0084796,-130.5332162]).appendPoint([39.7385662,-144.4640982]).close().innerToCAG()
).union(
    new CSG.Path2D([[40.8402381,-165.4852499],[54.7711201,-164.7551633]]).appendPoint([54.0410335,-150.8242813]).appendPoint([40.1101515,-151.5543679]).appendPoint([40.8402381,-165.4852499]).close().innerToCAG()
).union(
    new CSG.Path2D([[41.94191,-186.5064016],[55.872792,-185.776315]]).appendPoint([55.1427054,-171.845433]).appendPoint([41.2118234,-172.5755196]).appendPoint([41.94191,-186.5064016]).close().innerToCAG()
).union(
    new CSG.Path2D([[38.6368943,-123.4429465],[52.5677763,-122.7128599]]).appendPoint([51.8376897,-108.7819779]).appendPoint([37.9068077,-109.5120645]).appendPoint([38.6368943,-123.4429465]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.6188427,-100.6437429],[182.5497247,-101.3738295]]).appendPoint([183.2798113,-87.4429475]).appendPoint([169.3489293,-86.7128609]).appendPoint([168.6188427,-100.6437429]).close().innerToCAG()
).union(
    new CSG.Path2D([[37.5352224,-102.4217948],[51.4661044,-101.6917082]]).appendPoint([50.7360178,-87.7608262]).appendPoint([36.8051358,-88.4909128]).appendPoint([37.5352224,-102.4217948]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.0275666,-159.7781403],[116.9775666,-159.7781403]]).appendPoint([116.9775666,-145.8281403]).appendPoint([103.0275666,-145.8281403]).appendPoint([103.0275666,-159.7781403]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.0275666,-180.8281403],[116.9775666,-180.8281403]]).appendPoint([116.9775666,-166.8781403]).appendPoint([103.0275666,-166.8781403]).appendPoint([103.0275666,-180.8281403]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.0275666,-201.8781403],[116.9775666,-201.8781403]]).appendPoint([116.9775666,-187.9281403]).appendPoint([103.0275666,-187.9281403]).appendPoint([103.0275666,-201.8781403]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.0275666,-96.6281403],[116.9775666,-96.6281403]]).appendPoint([116.9775666,-82.6781403]).appendPoint([103.0275666,-82.6781403]).appendPoint([103.0275666,-96.6281403]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.0275666,-117.6781403],[116.9775666,-117.6781403]]).appendPoint([116.9775666,-103.7281403]).appendPoint([103.0275666,-103.7281403]).appendPoint([103.0275666,-117.6781403]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.0275666,-138.7281403],[116.9775666,-138.7281403]]).appendPoint([116.9775666,-124.7781403]).appendPoint([103.0275666,-124.7781403]).appendPoint([103.0275666,-138.7281403]).close().innerToCAG()
).union(
    new CSG.Path2D([[152.6291253,-204.8988245],[166.5451438,-205.8719274]]).appendPoint([167.5182467,-191.9559089]).appendPoint([153.6022282,-190.982806]).appendPoint([152.6291253,-204.8988245]).close().innerToCAG()
).union(
    new CSG.Path2D([[53.5398033,-206.9198927],[67.4558218,-205.9467898]]).appendPoint([66.4827189,-192.0307713]).appendPoint([52.5667004,-193.0038742]).appendPoint([53.5398033,-206.9198927]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.41] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = plateholes_extrude_1_41_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;

            
                    return result;
                }

            

            function main() {
                return plate_case_fn();
            }

        