# 프로그래머스_lv0_분수의덧셈
<br/>

- **문제 설명**<br/>
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
- **제한사항**<br/>
0 <numer1, denom1, numer2, denom2 < 1,000

- **수도코드**<br/>
 1. 입력받은 분수를 덧셈해준다
 2. 최대공약수를 구해준다.
 2. 덧셈해서 나온 분수를 기약분수로 나눠준다 => 최대공약수로 나누어준다.

<br/>

```
function solution(numer1, denom1, numer2, denom2) {
    let topNum = (denum1*num2)+(denum2*num1) // 분모의 덧셈 결과 값
    let botNum = num1*num2 // 분자의 덧셈 결과 값
    let maxdiv = 1 // 최대공약수
    
    for(let i = 1; i <= topNum; i++){ // 분모를 돌면서
        if(topNum%i === 0 && botNum%i === 0){ //분모와 분자 모두 나누어떨어지는 수 = 공약수, 반복문을 돌면서 가장 마지막에 할당 된 값 = 최대공약수
            maxdiv = i // maxdiv에 그 i값을 할당해준다.
            
        }
    }return [topNum/maxdiv, botNum/maxdiv] // 분자와 분모를 최대공약수로 나누어서 배열에 담아 return한다.
}
```

- **시행착오**<br/>
    - 분수의 덧셈이 갑자기 생각이나지않았다.
    - 테스트케이스를 보고 통과하기위해 공약수를 구하지않고 분자가 나누어지는 수면 2로 나누라는 이상한코드를 적었다.
  
