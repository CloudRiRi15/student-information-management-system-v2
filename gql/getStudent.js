import { util } from "@aws-appsync/utils";

export function request(ctx) {
  return dynamoDBGetStudentRequest({ id: ctx.args.id });
}

export function response(ctx) {
  return ctx.result;
}

/**
 * A helper function to get a DynamoDB item
 */
function dynamoDBGetStudentRequest(key) {
  return {
    operation: "GetStudent",
    key: util.dynamodb.toMapValues(key),
  };
}
