module.exports = function(server) {

  // Create an API namespace, so that the root does not 
  // have to be repeated for each end point.
    server.namespace('/api', function() {
        // var post = {
 //          "post": {
 //            "id": 1,
 //            "title": "Rails is omakase",
 //            "comments": ["1", "2"],
 //            "user" : "dhh"
 //          },
 // 
 //          "comments": [{
 //            "id": "1",
 //            "body": "Rails is unagi"
 //          }, {
 //            "id": "2",
 //            "body": "Omakase O_o"
 //          }]
 //        };
 //        var posts = {
 // 
 //              "posts": [{
 //                "id": 1,
 //                "title": "ship",
 //                "comments": ["1", "2"],
 //                "user" : "dhh",
 //              },{
 //                 "id": 2,
 //                "title": "Rr",
 //                "comments": ["1", "2"],
 //                "user" : "dhh",
 //              }],
 // 
 //              "comments": [{
 //                "id": "1",
 //                "body": "Rails is unagi"
 //              }, {
 //                "id": "2",
 //                "body": "Omakase O_o"
 //              }]
 // 
 //        }
 //        server.get('/posts', function(req,res){
 //            res.send(posts);
 //        });
 //        // Return fixture data for '/api/posts/:id'
 //        server.get('/posts/:id', function(req, res) {
 //            res.send(post);
 //        });

        // server.get('/quiz/:id',function(req,res){
            // var quizs = {
    //             "info": {
    //                 "name":    "小测试!!",
    //                 "main":    "<p>看完视频 小测一下!</p>",
    //                 "results": "<h5>测试完成</h5><p></p>",
    //                 "level1":  "完全掌握理解运用。",
    //                 "level2":  "掌握得不错",
    //                 "level3":  "恭喜您，合格了。",
    //                 "level4":  "麻麻啦，基本拉车尾。",
    //                 "level5":  "仍然需要努力哦..." // no comma here
    //             },
    //             "questions": [
    //                 { // Question 1 - Multiple Choice, Single True Answer
    //                     "q": "男性,50岁,农民,以衰弱、气促、轻度干咳8个月入院。体检:呼吸28次/分,两肺底闻爆裂音(Velcro罗音),有杵状指,胸部X线:两肺中下野弥漫性网状影,肺功能示限制性通气障碍,最可能的诊断是",
    //                     "a": [
    //                         {"option": "A.慢性支气管炎",      "correct": false},
    //                         {"option": "B.特发性肺间质纤维化",     "correct": true},
    //                         {"option": "C.支气管扩张症",      "correct": false},
    //                         {"option": "D.心力衰竭",     "correct": false},
    //                         {"option": "E.矽肺",     "correct": false} // no comma here
    //                     ],
    //                     "correct": "<p> 答案：B <span>您答对了！</span> 要记住肺纤维化：肺功能提示的是限制性通气障碍。查体通常有杵状指。</p>",
    //                     "incorrect": "<p>答案：B <span>抱歉，答错了。</span> 见到两肺底闻爆裂音(Velcro罗音)或见到胸部X线:两肺中下野弥漫性网状影就是肺纤维化；</p>" // no comma here
    //                 },
    //                 { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
    //                     "q": "支气管哮喘患者急性发作5天,测动脉血气pH7.40、PaO6.67kPa(50mmHg),PaCO8.0kPa(60mmHg)、HCO30mmol/L，最可能表明",
    //                     "a": [
    //                         {"option": "A.病情好转",               "correct": false},
    //                         {"option": "B.没有临床意义",   "correct": true},
    //                         {"option": "C.轻度发作",               "correct": false},
    //                         {"option": "D.病情严重,须积极治疗",               "correct": true},
    //                         {"option": "E.有心血管并发症", "correct": false} // no comma here
    //                     ],
    //                     "select_any": true,
    //                     "correct": "<p>答案：D <span>您答对了！!</span> <span>分析：</span><br /> \
    //                     支气管哮喘发作时是呼气性呼吸困难，血气分析常常是：呼吸性碱中毒。 \
    //                     题干出现哮喘发作5天，提示是重症哮喘。（哮喘持续状态可持续1-2天，又称为重症哮喘；每分钟呼吸28次/分，P大于110次/分。可出现呼吸机疲劳，出现奇脉，血压下降、大汗淋漓、严重脱水、神志模糊。出现呼吸性酸中毒，若缺氧明显可合并代谢性酸中毒）\
    //                     题干提示：出现PaCO潴留，说明是重症哮喘。\
    //                     综上所述是D</p>",
    //                     "incorrect": "<p>答案：D <span>抱歉，答错了。.</span> <br /> \
    //                     <span>分析：</span><br /> \
    //                     支气管哮喘发作时是呼气性呼吸困难，血气分析常常是：呼吸性碱中毒。 \
    //                     题干出现哮喘发作5天，提示是重症哮喘。（哮喘持续状态可持续1-2天，又称为重症哮喘；每分钟呼吸28次/分，P大于110次/分。可出现呼吸机疲劳，出现奇脉，血压下降、大汗淋漓、严重脱水、神志模糊。出现呼吸性酸中毒，若缺氧明显可合并代谢性酸中毒）\
    //                     题干提示：出现PaCO潴留，说明是重症哮喘。\
    //                     综上所述是D</p>" // no comma here
    //                 },
    //                 { // Question 3 - Multiple Choice, Multiple True Answers, Select All
    //                     "q": "支气管哮喘发病的最主要病理基础是.",
    //                     "a": [
    //                         {"option": "气道的非特异性炎症",           "correct": true},
    //                         {"option": "副交感神经兴奋",                  "correct": false},
    //                         {"option": "细菌感染",  "correct": false},
    //                         {"option": "支气管痉挛",          "correct": false} // no comma here
    //                     ],
    //                     "correct": "<p> 答案：A <span>您答对了！!</span> 支气管哮喘的定义已涵盖了，死记。</p>",
    //                     "incorrect": "<p>答案：A <span>抱歉，答错了。.</span> 支气管哮喘的定义已涵盖了，死记。</p>" // no comma here
    //                 },
    //                 { // Question 4
    //                     "q": "男性60岁，突然夜间发作呼吸困难，查体：双肺满布呼气性哮鸣音。下面哪几项对鉴别诊断有意义。",
    //                     "a": [
    //                         {"option": "A.血气分析",    "correct": false},
    //                         {"option": "B.超声心动图",     "correct": true},
    //                         {"option": "C.胸部X线",      "correct": true},
    //                         {"option": "E.既往病史",   "correct": true} // no comma here
    //                     ],
    //                     "correct": "<p>答案：A<span>您答对了！!</span> </p>",
    //                     "incorrect": "<p>答案：A<span>抱歉，答错了。.</span> </p>" // no comma here
    //                 }
    //             ]
    //         };
            // res.format({
 //                json: function(){
 //                    res.send('you are stub');
 //                }
 //            });
 //        });

    });

};
