function solution(my_str, n) {
  //수도코드
  //n만큼 커지는 my_str의 길이 만큼 반복한다.
      //answer에 반복횟수번째에서 n번까지의 문자열을 저장한다.
  var answer = [];

  for(let i = 0; i <= my_str.length-1; i += n ){
      answer.push(my_str.substr(i,n))
  }

  return answer;
}
