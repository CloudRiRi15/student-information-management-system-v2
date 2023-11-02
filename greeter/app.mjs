import { util } from "@aws-appsync/utils";

export const lambdaHandler = async (event, _) => {
  console.log("Got an Invoke Request.");
  console.log(`EVENT: ${JSON.stringify(event, null, 2)}`);

  // Extract the CRUD operation and input from the event
  const operation = event.info.fieldName;
  const input = event.arguments.input;

  try {
    switch (operation) {
      case "createStudent":
        // Call the createStudentRequest function to prepare the request for the Create operation
        const createRequest = createStudentRequest({ args: { input } });
        // Implement the logic to create a student in the data source (e.g., DynamoDB)
        // You can use the request object to interact with your data source
        // ...
        // Once the student is created, return the response
        const createResponse = /* Implement logic to handle Create operation */;
        return createResponse;

      case "updateStudent":
        // Call the updateStudentRequest function to prepare the request for the Update operation
        const updateRequest = updateStudentRequest({ args: { input } });
        // Implement the logic to update a student in the data source
        // You can use the request object to interact with your data source
        // ...
        // Once the student is updated, return the response
        const updateResponse = /* Implement logic to handle Update operation */;
        return updateResponse;

      case "deleteStudent":
        // Call the deleteStudentRequest function to prepare the request for the Delete operation
        const deleteRequest = deleteStudentRequest({ args: { input } });
        // Implement the logic to delete a student from the data source
        // You can use the request object to interact with your data source
        // ...
        // Once the student is deleted, return the response
        const deleteResponse = /* Implement logic to handle Delete operation */;
        return deleteResponse;

      case "getStudent":
        // Call the getStudentRequest function to prepare the request for the Read operation
        const getRequest = getStudentRequest({ args: { input } });
        // Implement the logic to retrieve a student from the data source
        // You can use the request object to interact with your data source
        // ...
        // Once the student is retrieved, return the response
        const getResponse = /* Implement logic to handle Read operation */;
        return getResponse;

      default:
        throw new Error("Unknown field, unable to resolve " + operation);
    }
  } catch (error) {
    // Handle any errors that may occur during the CRUD operation
    throw new Error("Failed to execute operation: " + error.message);
  }
};
