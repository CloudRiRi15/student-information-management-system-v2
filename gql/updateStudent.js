import { util } from "@aws-appsync/utils";

export function updateStudentRequest(ctx) {
  const { key, values } = ctx.args.input;
  return {
    operation: "UpdateStudent",
    key: util.dynamodb.toMapValues(key),
    attributeValues: util.dynamodb.toMapValues(values),
  };
}
export function updateStudentResponse(ctx) {
    return ctx.result;
  }
  