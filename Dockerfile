FROM nginx:1.27-alpine

# Replace the default site config with a static-site focused config.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static assets.
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js
COPY logo.png /usr/share/nginx/html/logo.png

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
