---
title: '[Conference]Let''Swift 17'
categories:
  - Development
cover_image: images/letswift.png
date: 2017-09-23 21:28:17
tags:
---


<center>![1호 촬영자!](instast.JPG)</center>

***

# 첫 개발자 Conference 참여!
사실 작년에도 [Let'Swift 16](www.letswift.kr/2016)에 참여했었다. 단지 그 당시엔 개발자가 아니라 알아듣는 것이 하나도 없었다. 그런데도 그들(?)과 같은 공간에서 무언가를 하고 있다는 것만으로도 기분이 좋았다.  
그런데 이번엔 진짜 개발자로 참여했다.  
**그래서 지금 기분이 많이 좋다.**

<center>![](start.jpg)</center>

***

# 관심있는(기대하는) 것 

1. 언제나 RxSwift에 관심이 많았다. 현재 프로젝트에 적용해 보기엔 너무 큰 작업이 될 것 같아서 간간히(?) 들여다 보는 수준에 머물러 있었는데 이번 행사에서 뭔가 건질만한 것이 있을 것 같다. 

2. 그동안은 한개의 프로젝트를 혼자 하고 있어서 필요 없다고 생각했는데 Beta 버전을 배포하게 되면서 개발/배포환경 세팅의 중요성을 절절히 깨닫고 있다. 그동안은 Scheme만 구분해서 따로 빌드했는데, 오늘은 무언가 고급기술을 배울 수 있을 것 같다.   
*개발자는 게을러야 두번이상 같은 일을 반복하지 않는단다.*

***

# 결과

1. RxSwift는 더욱 더 미궁으로 빠져들었다. 40분동안 무언가 얻을 수 있을 거라는 것은 욕심이었고 결국 시간을 들여 직접 해보는 것 말고는 방법이 없겠다 싶다. [Lottie Player](/Product/2017/09/12/LottiePlayer)에 간단하게 적용을 해보자.

2. 배웠다. 많이 배웠다. 그런데 세션중 사용 된 Keynote 없이는 저런 고급기술을 사용할 수가 없을 정도로 복잡하고 어렵다. 몇주전부터 꾸준히 익혀보고 있는 [`fastlane`](http://fastlane.io)을 잘 활용하면 현재 수준에서 충분히 자동화를 시킬 수 있을 것 같다.

***

# 예상하지 않았던 결과
## 1. Swift 4!
- String이 다시 Collection type으로 변경되었다.  
이제 `String.characters.count`같은거 안해도 된다. ***야호!***  
- JSON Encode/Decode가 정말 간편해졌다.  
일일이 Key와 Value를 매핑해 주어야 했는데(코드 길이도 어마어마, JSON 구조가 바뀌면 `Knocking on hellgate`) 이제 `JSON.Decoder.decode()`가 알아서 해준다!
- 그런데 `@objc`추론을 자동으로 해주지 않는다. Swift4로 점프하면 가장 많이 수정을 가해야 할 부분이다.
- 조만간 Swift4로 점프를 해야겠다고 결심했다.

## 2. ReactorKit
- 지나가다 한번 들어보기만 했는데 한국사람이 만든 오픈소스였다는 것에 놀랐고, 그 당사자가 직접 세션을 진행해서 곱하기 10으로 놀랐다.   
- 세션 내용 자체도 상당히 고퀄리티였는데 RxSwift와 같이 사용하는 거라 오히려 이 세션에서 RxSwift를 조금 이해할 수 있었다. 아마 ReactorKit의 콘셉이 간결하고 알기 쉬워서 그랬을거다.   
- 나는 아마 ReactorKit을 쓸 것이다. *전도당함*

***

# 소감
상당히 만족스러운, 좀 더 직접적으로 말하면 3만원이 아깝지 않는 행사였다.  
무엇보다 무슨말을 하는지 50% 정도는 알아 들을 수 있었다는 점.*(이런 말일 것이다가 30%, 난 누구? 여긴 어디? 20%)*  
스스로 상당히 대견하고 자랑스러웠다.  
이렇게 고급진 행사가 한국에! 서울에! 있다는 것에 감사하며 내년에는 `trySwift(Tokyo)`와 `WWDC 18`을 노릴 것이다. *Let'Swift 스피커도 노릴 것이다* 

***

# 세션
- [키노트: 김정]()
- [What's New in Swift 4: 김영후]()
- [Swift vs. Kotlin: 유용하]()
- [Concurrency in Swift: 허혁]()
- [Metal기반 특별한 UI/UX 제공하기: 이선협]()
- [iOS11 ARKit 시작하기: 이봉원]()
- [토스의 개발/배포 환경: 손민탁]()
- [Serverless vs. Server-side Swift: Bob Lee]()
- [RxSwift 활용하기: 최완복]()
- [ReactorKit으로 단방향 반응형 앱 만들기: 전수열]()
>세션의 자세한 내용은 [Realm](www.realm.io)에 업데이트가 될 때마다 링크를 걸어 놓도록 하겠다.

***

### References
- Cover Image: [Let'Swift](http://letswift.kr/2016/index.html)
- [Realm](http://www.realm.io)
- [OSXDev.org](http://www.osxdev.org)