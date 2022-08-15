# Kiosk
태블릿용 키오스크
- 리액트 라우팅 구현
- 리액트 mount,unmount 애니메이션 구현 

## 클라이언트 실행 
```bash
cd client
yarn install 
yarn start
```

## 서버 실행
1. mysql 데이터 베이스와 연결할 수 있게 env 파일 작성 

환경에 따라 `development.env`와 `production.env`로 나누어주세요.

```bash
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_HOST=
PORT=
```

2. 데이터베이스에 목업 데이터를 넣어주고 싶은 경우 (option)

`migration` 브랜치로 이동
```bash
git checkout migration
```

`init.ts` 실행
```bash 
cd server/src/migration
npx ts-node init.ts
```
목업 데이터 실행 

3. 서버 실행 
```bash
# dev 실행
yarn start:dev 

# production 실행 
yarn start
```

## ERD
![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/22eedcde-82cf-4d02-a187-575afbc12ece/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220815T104154Z&X-Amz-Expires=86400&X-Amz-Signature=34ed08000447786c1a856ee4f1a4e8362f8dd917df9e1c0de08c53b7425ae53e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## 실행 화면 

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/817ad108-12ea-4cb1-9312-ca8cf10e6452/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220815T104112Z&X-Amz-Expires=86400&X-Amz-Signature=ba5094b3d2e2355f3c300a4eaad5eb4da3813f76aca6447e91955207e56e6d32&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
