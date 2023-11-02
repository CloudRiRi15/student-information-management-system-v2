import { util } from "@aws-appsync/utils";

export function createStudentRequest(ctx) {
  const { key, values } = ctx.args.input;
  return {
    operation: "CreateStudent",
    key: util.dynamodb.toMapValues(key),
    attributeValues: util.dynamodb.toMapValues(values),
  };
}
export function createStudentResponse(ctx) {
  return ctx.result;
}
