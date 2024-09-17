export const translations = {
  http_unhandled_success: "Unhandled success server response",
  http_404: "Not found error",
  http_401: "Unauthorized",
  http_405: "Method Not Allowed",
  http_419: "Your session has expired. Please refresh the page",
  http_502: "Connection error, invalid gateway",
  http_504: "Connection timeout with the gateway",
  http_other_error: "Action not completed due to a server error",
  http_no_response: "No response received from the server",
  ajax_form_not_supported: "Operation not supported in dile-ajax-form use 'insert' or 'update'",
  success_operation: (operation) => operation == 'insert' ? 'The new item has been created' : 'Item updated successfully',
  error_operation: (operation) => `${operation == 'insert' ? 'Insertion' : 'Update'} error`,
};