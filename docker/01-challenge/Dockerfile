FROM golang:1.22-rc-alpine AS builder

WORKDIR /usr/app

COPY . .

RUN go build ./main.go

FROM scratch

WORKDIR usr/app

COPY --from=builder /usr/app/main .

CMD [ "./main" ]
