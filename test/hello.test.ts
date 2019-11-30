import * as chai from "chai";
import * as promisedChai from "chai-as-promised";
import { handler } from "../src/handlers/hello";

describe("wrapper", () => {
  const { expect } = chai;
  const event = {
    requestContext: {
      identity: {
        sourceIp: "127.0.0.1",
        user: "anonymouse",
        userAgent: "Mozilla"
      }
    },
    headers: {},
    multiValueHeaders: {},
    httpMethod: {},
    pathParameters: null,
    path: "",
    queryStringParameters: null,
    body: JSON.stringify({ cartIds: [] }),
    isBase64Encoded: false
  };
  
  const context = {
    callbackWaitsForEmptyEventLoop: true,
    functionName: "handler",
    functionVersion: "1",
    invokedFunctionArn: "arn:cccccc",
    memoryLimitInMB: 1024,
    awsRequestId: "asdas-adsas-asdasdas-asdasda-adss",
    logGroupName: "myLogGroup",
    logStreamName: "myLogStream",
    done: (error, result) => 11111,
    fail: (error) => 11111,
    succeed: (result) => 11111,
    getRemainingTimeInMillis: () => 11147
  };
  
  const originalConsole = console.log;

  before(() => {
    chai.use(promisedChai);

    console.log = () => {};
  });

  after(() => {
    console.log = originalConsole;
  });

  it("should resolve basic handler", async () => {
    const resolvedHandler = await handler(event, context);

    expect(resolvedHandler).to.haveOwnProperty("body");

    const body = JSON.parse(resolvedHandler.body);

    expect(body).to.haveOwnProperty("hello");
    expect(body.hello).to.equal("This is a sample handler");
  });
});
