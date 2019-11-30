import { wrapper, Request, Responser } from "@serverless-guy/lambda";
import { APIGatewayProxyResult } from "aws-lambda";

export const handler = wrapper(async (request: Request, response: Responser): Promise<APIGatewayProxyResult> => {
  const { event, context } = request;

  console.log("@event",   JSON.stringify(event, null, 2));
  console.log("@context", JSON.stringify(context, null, 2));

  return response({ hello: "This is a sample handler" });
});
