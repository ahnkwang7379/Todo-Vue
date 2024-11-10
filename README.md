### Todo-Vue

Vue로 만드는 간단한 투두앱

하나의 DB를 공유하는 store, prop, provide 세가지 버전의 투두앱입니다.


#### store, prop, provide
store: nuxt의 vuex store를 이용해 구현

prop: page에서 api를 호출한 후 prop 드릴링으로 하위로 내리는 방식으로 구현

provide: page에서 provide로 하위로 전파해 필요한 곳에서 inject해서 쓰는 방식으로 구현

