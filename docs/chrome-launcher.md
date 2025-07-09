# CI/CD 

Example how to add `chrome-launcher` for `website-auditfy`

```yaml
  - run: |
          sudo apt-get update
          sudo apt-get install -y \
            libnss3 \
            libatk1.0-0 \
            libatk-bridge2.0-0 \
            libcups2 \
            libxcomposite1 \
            libxrandr2 \
            libgbm-dev \
            libasound2t64  \
            libpangocairo-1.0-0 \
            libxshmfence1 \
            libxdamage1 \
            libx11-xcb1 \
            fonts-liberation \
            libappindicator3-1 \
            libnspr4 \
            libxss1 \
            xdg-utils \
            wget \
            ca-certificates
  - run: npm install
  - run: npm run build --if-present
  - run: npm test
```