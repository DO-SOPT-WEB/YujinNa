# 🖤 API 통신에 대하여

### 로딩 / 에러 처리를 하는 방법에는 어떤 것들이 있을까?

> React Suspense, React ErrorBoundary
> : 데이터 패칭 여부나 에러 핸들링 로직은 외부로 위임하고, 컴포넌트는 '비즈니스 로직'만을 책임지게끔 설계하게 도와주는 컴포넌트

##### React Suspense

- 데이터를 가져 올 때, 데이터의 준비가 끝나지 않았을 땐 컴포넌트를 렌더링하지 않고, 지정해둔 컴포넌트를 보여주는 컴포넌트
- 예시 코드

```
const ProfilePage = React.lazy(() => import('./ProfilePage')); // 지연 로딩

// 프로필을 불러오는 동안 스피너를 표시합니다
<Suspense fallback={<}>
  <ProfilePage />
</Suspense>
```

- ProfilePage를 불러올 동안 Suspense는 fallback에 지정된 Spinner 컴포넌트를 랜더링하게 됨
- ProfilePage를 모두 불러온 상태라면, ProfilePage를 다시 랜더링하여 보여주게 됨

##### React ErrorBoundary

- 데이터를 가져올 때 오류가 발생하면, 그 에러에 대한 핸들링처리를 위임 받을 수 있는 컴포넌트
- try/catch와 유사
- 예시 코드

```
<ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
  <Suspense fallback={<h1>Loading posts...</h1>}>
    <ProfileTimeline />
  </Suspense>
</ErrorBoundary>;
```

- ProfileTimeline에서 발생한 오류는 h2태그로 위임하게 됨. 에러 처리도 해당 컴포넌트가 처리하게 됨
  - 즉, ProfileTimeline에서 데이터를 패칭하다 실패하게 되면, h2 컴포넌트가 렌더링됨
- 따라서, 비동기처리는 ProfileTimeline, 로딩 처리는 Suspense, 에러 처리는 ErrorBoundary가 처리하도록 함.
  - 컴포넌트는 비지니스 로직에만 신경 쓸 수 있도록!

### 패칭 라이브러리란 무엇이고 어떤 것들이 있을까?

- 데이터 패칭이란
  - 웹 애플리케이션에서 서버로부터 데이터를 가져오는 기능
- 데이터 패칭 라이브러리란
  - 데이터 패칭 작업을 단순화하고, 관리를 유용하게 하기 위해 사용하는 라이브러리
  - 주로 웹 API를 통해 데이터를 요청하고, 응답을 받아와서 애플리케이션의 상태를 업데이트 하는 작업을 처리함.
- 데이터 패칭 라이브러리 종류
  - SWR
  - React Query

### 패칭 라이브러리를 쓰는 이유는 무엇일까?

- 간편한 비동기 데이터 요청
  - 데이터를 언제 fetch하면 되는지 목표만을 기술하기 때문에, 선언적 프로그래밍 가능
- 상태 관리 및 업데이트 용이
- 캐싱과 최적화
- 로딩, 오류 처리
- 서버사이드 렌더링과 호환

출처

- https://varletc0nst.tistory.com/entry/React-Suspense%EC%99%80-ErrorBoundary%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%A1%9C%EB%94%A9%EC%B2%98%EB%A6%AC%EC%99%80-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81-1
- https://fe-developers.kakaoent.com/2022/220224-data-fetching-libs/
