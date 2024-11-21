export const translations = {
  http_unhandled_success: "Unhandled success server response",
  http_404: "Not found error",
  http_400: "Bad Request",
  http_422: "Unprocessable Entity",
  http_401: "Unauthorized",
  http_403: "You do not have permission to access this resource",
  http_405: "Method Not Allowed",
  http_413: "Content Too Large",
  http_419: "Your session has expired. Please refresh the page",
  http_502: "Connection error, invalid gateway",
  http_504: "Connection timeout with the gateway",
  http_other_error: "Action not completed due to a server error",
  http_no_response: "No response received from the server",
  ajax_form_not_supported: "Operation not supported in dile-ajax-form use 'insert' or 'update'",
  success_operation: (operation) => operation == 'insert' ? 'The new item has been created' : 'Item updated successfully',
  error_operation: (operation) => `${operation == 'insert' ? 'Insertion' : 'Update'} error`,
  send_label: "Send",
  insert_label: "Create",
  update_label: "Update",
  start_update_label: "Edit",
  delete_label: "Delete",
  cancel_label: "Cancel",
  accept_label: "Accept",
  help_label: "Help",
  filters_label: "Filters",
  sort_label: "Sort",
  page_label: "Page",
  actions_label: "Actions",
  element_label: "Element",
  element_plural_label: "Elements",
  run_action_label: "Run action",
  loading: "Loading...",
  delete_confirm_message: "Are you sure you want to delete this item?",
  delete_confirm_message_plural: "Are you sure you want to delete those items?",
  items_total: "items in total",
  showing_page_size: (pageSize) => `Showing ${pageSize} items per page.`,
  empty_list: "There are no items yet",
  one_page: "Page 1 of 1",
  current_page: (page, numPages) => `Page ${page} of ${numPages}`,
  select: "Select",
  all: "all",
  all_in_page: "All in this page",
  select_matching: "Select all matching",
  element_actions: "Element actions",
  select_image: "Select an image",
  save_image: "Save image",
  file_drop: "Drop here your file",
  select_file: "Select file",
  selected_file: "Selected file",
  extension_allowed: "Only this file extensions are allowed: ",
};