import Redis from "ioredis"

export const io_cc = new Redis.Cluster([
  {
    port: 7001,
    host: "127.0.0.1",
  },
  {
    port: 7002,
    host: "127.0.0.1",
  },
  {
    port: 7003,
    host: "127.0.0.1",
  },
  {
    port: 7004,
    host: "127.0.0.1",
  },
  {
    port: 7005,
    host: "127.0.0.1",
  },
  {
    port: 7006,
    host: "127.0.0.1",
  },
  {
    port: 7007,
    host: "127.0.0.1",
  },
  {
    port: 7008,
    host: "127.0.0.1",
  },
  {
    port: 7009,
    host: "127.0.0.1",
  },
  {
    port: 7010,
    host: "127.0.0.1",
  },
  {
    port: 7011,
    host: "127.0.0.1",
  },
  {
    port: 7012,
    host: "127.0.0.1",
  }
],{ enableAutoPipelining: true });


