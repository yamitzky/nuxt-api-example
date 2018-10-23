## Development

### Local

```
cd frontend
yarn
yarn dev

cd api
pipenv install
python api.py

# see http://localhost:3000
```

### Docker

```
docker-compose up
# see http://localhost:3000
```

## Production

### CDN (JAMStack)

WIP: CORS must be configured for API if API domain is not `https://example.com`

```
- CDN (https://example.com)
- API (https://api.example.com):
```

```
cd frontend
yarn
# configure API_PREFIX, API_HOST, API_PORT
yarn generate
# deploy `dist` to CDN

cd api
pipenv install
# deploy `api`
```

### nginx (JAMStack)

```
nginx (https://example.com)
 ├─ api container (https://example.com/api/*)
 └─ server static files in nginx container (https://example.com/*)
```

```
cd frontend
yarn
yarn generate

docker-compose -f docker-compose.nginx.yml up
```

### SSR

```
yarn build
yarn generate
```
