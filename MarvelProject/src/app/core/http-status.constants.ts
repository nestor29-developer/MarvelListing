export class HttpStatusConstants {

  public static CONNECT_TIME_OUT: number = 2 * 60;
  public static READ_TIME_OUT: number = 2 * 60;


  //Network: Code State 2xx
  public static OK: number = 200;
  public static CREATED: number = 201;
  public static ACCEPTED: number = 202;


  //Network: Code State 4xx
  public static BAD_REQUEST: number = 400;
  public static UNAUTHORIZED: number = 401;
  public static PAYMENT_REQUIRED: number = 402;
  public static FORBIDDEN: number = 403;
  public static NOT_FOUND: number = 404;
  public static METHOD_NOT_ALLOWED: number = 405;
  public static CONFLICT: number = 409;
  public static UNPROCESABLE_ENTITY: number = 422;
  public static LOCKED: number = 423;
  public static TOO_MANY_REQUESTS: number = 429;
  public static NOT_ACCEPTABLE: number = 406;


  //Network: Code State 5xx
  public static INTERNAL_SERVER_ERROR: number = 500;
  public static BAD_GATEWAY: number = 502;
  public static SERVICES_UNAVAILABLE: number = 503;
  public static GATEWAY_TIMEOUT: number = 504;

}