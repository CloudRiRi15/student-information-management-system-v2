import { util } from "@aws-appsync/utils";

export function deleteStudentRequest(ctx) {
  const { key } = ctx.args.input;
  return {
    operation: "DeleteStudent",
    key: util.dynamodb.toMapValues(key),
  };
}
export function deleteStudentResponse(ctx) {
    return ctx.result;
  }
  