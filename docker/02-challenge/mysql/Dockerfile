FROM --platform=linux/amd64 mysql:5.7

ENV MYSQL_DATABASE=db \
    MYSQL_ROOT_PASSWORD=root

ADD ./database/ /docker-entrypoint-initdb.d/
RUN chown -R mysql:mysql /docker-entrypoint-initdb.d/

EXPOSE 3306