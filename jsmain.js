$(document).ready(function(){
    $('.nav-tabs a').get(0).click();
    var actual = {
                              x: [-0.7],
                              y: [0.7],
                              mode: 'markers+text',
                              text:[0.7],
                              textposition: 'top center',
                              textfont : {
                                color:'#eee',
                                },
                                opacity: 1,
                              marker: {
                                color: '#e74c3c',
                                size: [20, 20, 20, 20]
                              },
                              hoverinfo:"none",
                              name: 'Actual',
                            };

                            var predicted = {
                              x: [-0.6],
                              y: [-0.6],
                              mode: 'markers+text',
                              opacity: 1,
                              text:[0.7],
                              textposition: 'bottom center',
                               textfont : {
                                color:'#eee',
                                },
                              marker: {
                                color: '#3498db',
                                size: [20, 20, 20, 20]
                              },
                              hoverinfo:"none",
                              name: 'Predicted',
                            };

                            var data = [actual, predicted];

                            var layout = {
                                showlegend: true,
                                  legend: {
                                    x: 1,
                                    y: 1
                                  },
                                
                            autosize: false,
                          width: 646,
                          height: 480,
                          margin: {
                            l: 30,
                            r: 30,
                            b: 30,
                            t: 30,
                            pad: 0
                          },    
                            hovermode:'closest',
                              xaxis: {
                                title: 'Arousal',
                                showgrid: true,
                                zeroline: true,
                               range:[-1,1]
                              },
                              yaxis: {
                                title: 'Valence',
                                showline: true,
                               zeroline: true,
                               range:[-1,1]
                              },
                              plot_bgcolor: '#333'
                            };
                            Plotly.newPlot(graphDiv, data, layout);




    $('.nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab      
        //var y = $(event.relatedTarget).text();   //previous tab
        if(x=="Test Set 1"){
          $('.vids').each(function() {
            $(this).get(0).pause();
          });

          document.getElementById("actual").innerHTML = "-";
          document.getElementById("predicted").innerHTML = "-";
          document.getElementById("accuracy").innerHTML = "-";

          document.getElementById("actual_manual").innerHTML = "-";
          document.getElementById("predicted_manual").innerHTML = "-";
          document.getElementById("accuracy_manual").innerHTML = "-";

           var vid = document.getElementById("vid1");
           vid.addEventListener('timeupdate',function(){
          var currentTime = vid.currentTime;
          frame = parseInt(currentTime*50)-1;
          document.getElementById("actual").innerHTML = emotion(data1[frame][2]);
          document.getElementById("predicted").innerHTML = emotion(data1[frame][3]);
          document.getElementById("accuracy").innerHTML = data1[frame][1];

          document.getElementById("actual_manual").innerHTML = manual_emotion(data1_t[frame][2]);
          document.getElementById("predicted_manual").innerHTML = manual_emotion(data1_t[frame][3]);
          document.getElementById("accuracy_manual").innerHTML = data1_t[frame][1];
          actual.x = [(data1_t[frame][3]/4) - 0.5];
          actual.y = [(data1_t[frame][3]/4) - 0.5];
          actual.text = [String(actual.x) + " , " + String(actual.y)];
          predicted.y = [(data1_t[frame][2]/4) - 0.5];
          predicted.x = [(data1_t[frame][2]/4) - 0.5];
          predicted.text = [String(predicted.x) + " , " + String(predicted.y)];
                    
          Plotly.update(graphDiv, data, layout);

            },false);
       }
        else if(x=="Test Set 2"){
          $('.vids').each(function() {
            $(this).get(0).pause();
          });

          document.getElementById("actual").innerHTML = "-";
          document.getElementById("predicted").innerHTML = "-";
          document.getElementById("accuracy").innerHTML = "-";

          document.getElementById("actual_manual").innerHTML = "-";
          document.getElementById("predicted_manual").innerHTML = "-";
          document.getElementById("accuracy_manual").innerHTML = "-";
          
           var vid = document.getElementById("vid2");
           vid.addEventListener('timeupdate',function(){
          var currentTime = vid.currentTime;
          frame = parseInt(currentTime*50)-1;
          document.getElementById("actual").innerHTML = emotion(data2[frame][2]);
          document.getElementById("predicted").innerHTML = emotion(data2[frame][3]);
          document.getElementById("accuracy").innerHTML = data2[frame][1];

          document.getElementById("actual_manual").innerHTML = manual_emotion(data2_t[frame][2]);
          document.getElementById("predicted_manual").innerHTML = manual_emotion(data2_t[frame][3]);
          document.getElementById("accuracy_manual").innerHTML = data2_t[frame][1];
          actual.x = [(data1_t[frame][3]/4) - 0.5];
          actual.y = [(data1_t[frame][3]/4) - 0.5];
          actual.text = [String(actual.x) + " , " + String(actual.y)];
          predicted.y = [(data1_t[frame][2]/4) - 0.5];
          predicted.x = [(data1_t[frame][2]/4) - 0.5];
          predicted.text = [String(predicted.x) + " , " + String(predicted.y)];
                    
          Plotly.update(graphDiv, data, layout);


            },false);
               
        }
        else if(x=="Test Set 3"){
          $('.vids').each(function() {
            $(this).get(0).pause();
          });

          document.getElementById("actual").innerHTML = "-";
          document.getElementById("predicted").innerHTML = "-";
          document.getElementById("accuracy").innerHTML = "-";

          document.getElementById("actual_manual").innerHTML = "-";
          document.getElementById("predicted_manual").innerHTML = "-";
          document.getElementById("accuracy_manual").innerHTML = "-";
          
           var vid = document.getElementById("vid3");
          vid.addEventListener('timeupdate',function(){
          var currentTime = vid.currentTime;
          frame = parseInt(currentTime*50)-1;
          document.getElementById("actual").innerHTML = emotion(data3[frame][2]);
          document.getElementById("predicted").innerHTML = emotion(data3[frame][3]);
          document.getElementById("accuracy").innerHTML = data3[frame][1];

          document.getElementById("actual_manual").innerHTML = manual_emotion(data3_t[frame][2]);
          document.getElementById("predicted_manual").innerHTML = manual_emotion(data3_t[frame][3]);
          document.getElementById("accuracy_manual").innerHTML = data3_t[frame][1];
          actual.x = [(data1_t[frame][3]/4) - 0.5];
          actual.y = [(data1_t[frame][3]/4) - 0.5];
          actual.text = [String(actual.x) + " , " + String(actual.y)];
          predicted.y = [(data1_t[frame][2]/4) - 0.5];
          predicted.x = [(data1_t[frame][2]/4) - 0.5];
          predicted.text = [String(predicted.x) + " , " + String(predicted.y)];
                    
          Plotly.update(graphDiv, data, layout);
 
            },false);
       
        }
        else if(x=="Test Set 4"){
          $('.vids').each(function() {
            $(this).get(0).pause();
          });

          document.getElementById("actual").innerHTML = "-";
          document.getElementById("predicted").innerHTML = "-";
          document.getElementById("accuracy").innerHTML = "-";

          document.getElementById("actual_manual").innerHTML = "-";
          document.getElementById("predicted_manual").innerHTML = "-";
          document.getElementById("accuracy_manual").innerHTML = "-";
          
           var vid = document.getElementById("vid4");
          vid.addEventListener('timeupdate',function(){
          var currentTime = vid.currentTime;
          frame = parseInt(currentTime*50)-1;
          document.getElementById("actual").innerHTML = emotion(data4[frame][2]);
          document.getElementById("predicted").innerHTML = emotion(data4[frame][3]);
          document.getElementById("accuracy").innerHTML = data4[frame][1];

          document.getElementById("actual_manual").innerHTML = manual_emotion(data4_t[frame][2]);
          document.getElementById("predicted_manual").innerHTML = manual_emotion(data4_t[frame][3]);
          document.getElementById("accuracy_manual").innerHTML = data4_t[frame][1];
          actual.x = [(data1_t[frame][3]/4) - 0.5];
          actual.y = [(data1_t[frame][3]/4) - 0.5];
          actual.text = [String(actual.x) + " , " + String(actual.y)];
          predicted.y = [(data1_t[frame][2]/4) - 0.5];
          predicted.x = [(data1_t[frame][2]/4) - 0.5];
          predicted.text = [String(predicted.x) + " , " + String(predicted.y)];
                    
          Plotly.update(graphDiv, data, layout);
 
            },false);
       
        }
        else if(x=="Test Set 5"){
          $('.vids').each(function() {
            $(this).get(0).pause();
          });

          document.getElementById("actual").innerHTML = "-";
          document.getElementById("predicted").innerHTML = "-";
          document.getElementById("accuracy").innerHTML = "-";

          document.getElementById("actual_manual").innerHTML = "-";
          document.getElementById("predicted_manual").innerHTML = "-";
          document.getElementById("accuracy_manual").innerHTML = "-";
          
           var vid = document.getElementById("vid5");
          vid.addEventListener('timeupdate',function(){
          var currentTime = vid.currentTime;
          frame = parseInt(currentTime*50)-1;
          document.getElementById("actual").innerHTML = emotion(data5[frame][2]);
          document.getElementById("predicted").innerHTML = emotion(data5[frame][3]);
          document.getElementById("accuracy").innerHTML = data5[frame][1];

          document.getElementById("actual_manual").innerHTML = manual_emotion(data5_t[frame][2]);
          document.getElementById("predicted_manual").innerHTML = manual_emotion(data5_t[frame][3]);
          document.getElementById("accuracy_manual").innerHTML = data5_t[frame][1];
          actual.x = [(data1_t[frame][3]/4) - 0.5];
          actual.y = [(data1_t[frame][3]/4) - 0.5];
          actual.text = [String(actual.x) + " , " + String(actual.y)];
          predicted.y = [(data1_t[frame][2]/4) - 0.5];
          predicted.x = [(data1_t[frame][2]/4) - 0.5];
          predicted.text = [String(predicted.x) + " , " + String(predicted.y)];
                    
          Plotly.update(graphDiv, data, layout);

            },false);
       
        }
        else if(x=="Test Set 6"){
          $('.vids').each(function() {
            $(this).get(0).pause();
          });

          document.getElementById("actual").innerHTML = "-";
          document.getElementById("predicted").innerHTML = "-";
          document.getElementById("accuracy").innerHTML = "-";

          document.getElementById("actual_manual").innerHTML = "-";
          document.getElementById("predicted_manual").innerHTML = "-";
          document.getElementById("accuracy_manual").innerHTML = "-";
          
           var vid = document.getElementById("vid6");
          vid.addEventListener('timeupdate',function(){
          var currentTime = vid.currentTime;
          frame = parseInt(currentTime*50)-1;
          document.getElementById("actual").innerHTML = emotion(data6[frame][2]);
          document.getElementById("predicted").innerHTML = emotion(data6[frame][3]);
          document.getElementById("accuracy").innerHTML = data6[frame][1];

          document.getElementById("actual_manual").innerHTML = manual_emotion(data6_t[frame][2]);
          document.getElementById("predicted_manual").innerHTML = manual_emotion(data6_t[frame][3]);
          document.getElementById("accuracy_manual").innerHTML = data6_t[frame][1];
          actual.x = [(data1_t[frame][3]/4) - 0.5];
          actual.y = [(data1_t[frame][3]/4) - 0.5];
          actual.text = [String(actual.x) + " , " + String(actual.y)];
          predicted.y = [(data1_t[frame][2]/4) - 0.5];
          predicted.x = [(data1_t[frame][2]/4) - 0.5];
          predicted.text = [String(predicted.x) + " , " + String(predicted.y)];
                    
          Plotly.update(graphDiv, data, layout);

            },false);
       
        }
        else if(x=="Test Set 7"){
          $('.vids').each(function() {
            $(this).get(0).pause();
          });

          document.getElementById("actual").innerHTML = "-";
          document.getElementById("predicted").innerHTML = "-";
          document.getElementById("accuracy").innerHTML = "-";

          document.getElementById("actual_manual").innerHTML = "-";
          document.getElementById("predicted_manual").innerHTML = "-";
          document.getElementById("accuracy_manual").innerHTML = "-";
          
           var vid = document.getElementById("vid7");
        vid.addEventListener('timeupdate',function(){
          var currentTime = vid.currentTime;
          frame = parseInt(currentTime*50)-1;
          document.getElementById("actual").innerHTML = emotion(data7[frame][2]);
          document.getElementById("predicted").innerHTML = emotion(data7[frame][3]);
          document.getElementById("accuracy").innerHTML = data7[frame][1];

          document.getElementById("actual_manual").innerHTML = manual_emotion(data7_t[frame][2]);
          document.getElementById("predicted_manual").innerHTML = manual_emotion(data7_t[frame][3]);
          document.getElementById("accuracy_manual").innerHTML = data7_t[frame][1];
          actual.x = [(data1_t[frame][3]/4) - 0.5];
          actual.y = [(data1_t[frame][3]/4) - 0.5];
          actual.text = [String(actual.x) + " , " + String(actual.y)];
          predicted.y = [(data1_t[frame][2]/4) - 0.5];
          predicted.x = [(data1_t[frame][2]/4) - 0.5];
          predicted.text = [String(predicted.x) + " , " + String(predicted.y)];
                    
          Plotly.update(graphDiv, data, layout);

            },false);
       
        }
        else if(x=="Test Set 8"){
          $('.vids').each(function() {
            $(this).get(0).pause();
          });

          document.getElementById("actual").innerHTML = "-";
          document.getElementById("predicted").innerHTML = "-";
          document.getElementById("accuracy").innerHTML = "-";

          document.getElementById("actual_manual").innerHTML = "-";
          document.getElementById("predicted_manual").innerHTML = "-";
          document.getElementById("accuracy_manual").innerHTML = "-";
          
           var vid = document.getElementById("vid8");
        vid.addEventListener('timeupdate',function(){
          var currentTime = vid.currentTime;
          frame = parseInt(currentTime*50)-1;
          document.getElementById("actual").innerHTML = emotion(data8[frame][2]);
          document.getElementById("predicted").innerHTML = emotion(data8[frame][3]);
          document.getElementById("accuracy").innerHTML = data8[frame][1];

          document.getElementById("actual_manual").innerHTML = manual_emotion(data8_t[frame][2]);
          document.getElementById("predicted_manual").innerHTML = manual_emotion(data8_t[frame][3]);
          document.getElementById("accuracy_manual").innerHTML = data8_t[frame][1];
          actual.x = [(data1_t[frame][3]/4) - 0.5];
          actual.y = [(data1_t[frame][3]/4) - 0.5];
          actual.text = [String(actual.x) + " , " + String(actual.y)];
          predicted.y = [(data1_t[frame][2]/4) - 0.5];
          predicted.x = [(data1_t[frame][2]/4) - 0.5];
          predicted.text = [String(predicted.x) + " , " + String(predicted.y)];
                    
          Plotly.update(graphDiv, data, layout);

            },false);
       
        }
       
    });

});

function emotion(p1) {
    if(p1==0) return "Neutral";
    else if (p1==1) return "Fear/\nAnger/\nStressed";
    else if (p1==2) return "Sad/\nFatigued";
    else if (p1==3) return "Calm/\nContent";
    else if (p1==4) return "Happy/\nExcited";
}

function manual_emotion(p1) {
    if(p1==0) return "Happy\nExcited";
    else if (p1==1) return "Calm/\nContent";
    else if (p1==2) return "Sad/\nFatigued";
    else if (p1==3) return "Fear/\nAnger";
    else if (p1==4) return "Neutral";
}




