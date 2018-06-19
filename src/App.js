import React, { Component } from 'react';
import * as firebase from 'firebase';
import $ from 'jquery';

class App extends Component{
    constructor(){
      super();
      this.state = {
        comment : "",
        exhibition : "",
        name : "",
        score : 0,
      };
    }

    componentDidMount(){
      const newReviewRef = firebase.database().ref().child('newReview');
      newReviewRef.on('value', snap => {
        clicktest();
        function clicktest(){$('#test').show(); wrapWindowByMask();}
        function wrapWindowByMask(){ //화면의 높이와 너비를 구한다.
          var maskHeight = $(document).height();
          var maskWidth = $(window).width(); //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
          $('#mask').css({'width':maskWidth,'height':maskHeight}); //마스크의 투명도 처리
          $('#mask').fadeTo("slow",0.5);
        }
        $(document).ready(function(){ //wrapWindowByMask(); //불투명 배경 띄우기
          $('.openMask').click(function(e){
             e.preventDefault(); wrapWindowByMask();
           });
        }); // 팝업 , 불투명 배경 띄우기
        function clicktest(){
           $('#test').show(); wrapWindowByMask();
           setTimeout(function clicktest2(){ $('#test2').show(); wrapWindowByMask();},6000);
           setTimeout(function btnexit(){ $('#test').hide(); $('#mask').hide(); $('#test2').hide();},9000);
         }

        setTimeout(function clicktest2(){ $('#test2').show(); wrapWindowByMask();},6000);
        setTimeout(function btnexit(){ $('#test').hide(); $('#mask').hide(); $('#test2').hide();},9000);
          var result = snap.val();
          this.setState({
            comment: result.comment,
            exhibition: result.exhibition,
            name: result.name,
            score: result.score
          });
      });
    }

    render(){
      return(
        <div className="App">
          <div id="exhibition">{this.state.exhibition}</div>
          <div id="name">{this.state.name}</div>
          <div id="comment">{this.state.comment}</div>
          <div id="score">{this.state.score}</div>
        </div>
      );
    }
}

export default App;
