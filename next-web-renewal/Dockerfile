# ----------------- STAGE 1: 빌드 환경 (Builder) -----------------
FROM node:18-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치를 위해 package.json 관련 파일 먼저 복사
COPY package*.json ./

# 의존성 설치 (프로젝트에 맞는 명령어로 수정)
RUN npm install

# 소스코드 복사
COPY . .

# next.config.js에 output: 'standalone'이 적용된 상태로 빌드
RUN npm run build


# ----------------- STAGE 2: 프로덕션 환경 (Runner) -----------------
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 프로덕션 환경으로 설정
ENV NODE_ENV=production

# 빌드 스테이지에서 생성된 standalone 폴더 복사
# 여기에는 최소화된 node_modules와 server.js가 포함됩니다.
COPY --from=builder /app/.next/standalone ./

# public 폴더와 .next/static 폴더 복사
# 정적 에셋(이미지, 폰트 등)과 빌드된 CSS/JS 파일을 위함입니다.
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# 3000번 포트 개방
EXPOSE 3000

# 컨테이너 실행 명령어
# npm start가 아닌, standalone 폴더 안의 server.js를 직접 실행합니다.
CMD ["node", "server.js"]