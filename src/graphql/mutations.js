/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChatty = /* GraphQL */ `
  mutation CreateChatty(
    $input: CreateChattyInput!
    $condition: ModelChattyConditionInput
  ) {
    createChatty(input: $input, condition: $condition) {
      id
      user
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateChatty = /* GraphQL */ `
  mutation UpdateChatty(
    $input: UpdateChattyInput!
    $condition: ModelChattyConditionInput
  ) {
    updateChatty(input: $input, condition: $condition) {
      id
      user
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteChatty = /* GraphQL */ `
  mutation DeleteChatty(
    $input: DeleteChattyInput!
    $condition: ModelChattyConditionInput
  ) {
    deleteChatty(input: $input, condition: $condition) {
      id
      user
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
