*safe-backend*
# Backend for main Safe project

[Flutter client](https://#)

### Environment variables
- `PORT`
- `DATABASE_URL`
- `SECRET_KEY` secret key, used for auth
- `PGSSLMODE` set 'no-verify' for Heroku

### How to use
Setup PostgreSQl DB:
```shell
psql -U postgres
create database safe;
\q
```

Prepare project
```shell
git clone git@github.com:IIPEKOLICT/safe-backend.git
cd safe-backend
npm i
```

Run in dev mode
```shell
npm run start:dev
```

Run in prod mode
```shell
npm run start:prod
```

[Nest guide](NEST.md)
