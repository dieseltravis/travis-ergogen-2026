function plateholes_extrude_1_41_outline_fn(){
    return new CSG.Path2D([[50.3071233,-211.581749],[71.3058465,-210.1133753]]).appendArc([72.2356293,-209.1461609],{"radius":1,"clockwise":false,"large":false}).appendPoint([81.1239376,-208.5246298]).appendPoint([81.0739644,-207.8099798]).appendPoint([100.6954272,-207.4674859]).appendArc([101.6778225,-206.4501858],{"radius":1,"clockwise":false,"large":false}).appendPoint([101.6752558,-206.3031403]).appendPoint([118.3442785,-206.3031403]).appendPoint([118.3303646,-207.100265]).appendPoint([138.9621472,-207.4603941]).appendPoint([138.9610095,-207.4766645]).appendPoint([147.8493178,-208.0981956]).appendArc([148.7791006,-209.0654099],{"radius":1,"clockwise":false,"large":false}).appendPoint([169.7778238,-210.5337837]).appendArc([170.8331683,-209.7053829],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.7336562,-209.9781316]).appendArc([180.0702589,-205.3390938],{"radius":5,"clockwise":false,"large":false}).appendPoint([181.1396175,-190.0465531]).appendPoint([181.4565854,-190.0631646]).appendArc([182.5075509,-189.1168711],{"radius":1,"clockwise":false,"large":false}).appendPoint([183.5568868,-169.0943489]).appendPoint([183.6484747,-167.3467472]).appendPoint([184.6585587,-148.0731972]).appendPoint([184.7501466,-146.3255955]).appendPoint([185.7602306,-127.0520455]).appendPoint([185.8518185,-125.3044438]).appendPoint([186.8619025,-106.0308938]).appendPoint([186.9534904,-104.2832921]).appendPoint([188.0028263,-84.2607699]).appendArc([187.0565328,-83.2098044],{"radius":1,"clockwise":false,"large":false}).appendPoint([166.6171114,-82.1386198]).appendArc([165.6700566,-81.1050908],{"radius":1,"clockwise":true,"large":false}).appendPoint([165.671066,-81.0761856]).appendPoint([143.5970895,-80.3053454]).appendPoint([143.6116348,-79.4720456]).appendPoint([121.5275666,-79.0865667]).appendPoint([121.5275666,-78.2531403]).appendPoint([99.4775666,-78.2531403]).appendArc([98.4775666,-79.2531403],{"radius":1,"clockwise":false,"large":false}).appendPoint([98.4775666,-79.4366932]).appendPoint([77.4138524,-79.8043617]).appendArc([76.4314571,-80.8216618],{"radius":1,"clockwise":false,"large":false}).appendPoint([76.4346605,-81.0051868]).appendPoint([55.3805715,-81.7404118]).appendArc([54.4160802,-82.7747021],{"radius":1,"clockwise":false,"large":false}).appendPoint([54.428705,-83.136228]).appendPoint([33.0284143,-84.2577697]).appendArc([32.0821208,-85.3087352],{"radius":1,"clockwise":false,"large":false}).appendPoint([33.1314567,-105.3312574]).appendPoint([33.2230446,-107.0788591]).appendPoint([34.2331286,-126.3524091]).appendPoint([34.3247165,-128.1000108]).appendPoint([35.3348005,-147.3735608]).appendPoint([35.4263884,-149.1211625]).appendPoint([36.4364724,-168.3947125]).appendPoint([36.5280603,-170.1423142]).appendPoint([37.5773962,-190.1648364]).appendArc([38.6283617,-191.1111299],{"radius":1,"clockwise":false,"large":false}).appendPoint([38.9453296,-191.0945184]).appendPoint([40.0146881,-206.3870591]).appendArc([45.3512909,-211.0260968],{"radius":5,"clockwise":false,"large":false}).appendPoint([49.2517788,-210.7533482]).appendArc([50.3071233,-211.5817489],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
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

        