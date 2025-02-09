# Trello NodeJS API Client

![Twitter Follow](https://img.shields.io/twitter/follow/elienairo?style=social)

TrelloRestApi - JavaScript client for Trello

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TrelloRestApi = require('trello_rest_api');

var defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix['key'] = "Token"
// Configure API key authorization: APIToken
var APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix['token'] = "Token"

var api = new TrelloRestApi.DefaultApi()
var key = "key_example"; // {String} 
var key2 = "key_example"; // {String} The API key to use
var token = "token_example"; // {String} The API token to use
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.applicationsKeyCompliance(key, key2, token, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.trello.com/1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TrelloRestApi.DefaultApi* | [**applicationsKeyCompliance**](docs/DefaultApi.md#applicationsKeyCompliance) | **GET** /applications/{key}/compliance | Get Application&#39;s compliance data
*TrelloRestApi.DefaultApi* | [**boardsIdChecklists**](docs/DefaultApi.md#boardsIdChecklists) | **GET** /boards/{id}/checklists | Get Checklists on a Board
*TrelloRestApi.DefaultApi* | [**boardsidmembersidmember**](docs/DefaultApi.md#boardsidmembersidmember) | **DELETE** /boards/{id}/members/{idMember} | Remove Member from Board
*TrelloRestApi.DefaultApi* | [**cardsidmembersvoted1**](docs/DefaultApi.md#cardsidmembersvoted1) | **POST** /cards/{id}/membersVoted | Add Member vote to Card
*TrelloRestApi.DefaultApi* | [**deleteActionsId**](docs/DefaultApi.md#deleteActionsId) | **DELETE** /actions/{id} | Delete an Action
*TrelloRestApi.DefaultApi* | [**deleteActionsIdactionReactionsId**](docs/DefaultApi.md#deleteActionsIdactionReactionsId) | **DELETE** /actions/{idAction}/reactions/{id} | Delete Action&#39;s Reaction
*TrelloRestApi.DefaultApi* | [**deleteBoardsId**](docs/DefaultApi.md#deleteBoardsId) | **DELETE** /boards/{id} | Delete a Board
*TrelloRestApi.DefaultApi* | [**deleteBoardsIdBoardplugins**](docs/DefaultApi.md#deleteBoardsIdBoardplugins) | **DELETE** /boards/{id}/boardPlugins/{idPlugin} | Disable a Power-Up on a Board
*TrelloRestApi.DefaultApi* | [**deleteBoardsIdPowerups**](docs/DefaultApi.md#deleteBoardsIdPowerups) | **DELETE** /boards/{id}/powerUps/{powerUp} | Disable Power-Up on a Board
*TrelloRestApi.DefaultApi* | [**deleteCardsId**](docs/DefaultApi.md#deleteCardsId) | **DELETE** /cards/{id} | Delete a Card
*TrelloRestApi.DefaultApi* | [**deleteCardsIdActionsIdComments**](docs/DefaultApi.md#deleteCardsIdActionsIdComments) | **DELETE** /cards/{id}/actions/{idAction}/comments | Delete a comment on a Card
*TrelloRestApi.DefaultApi* | [**deleteCardsIdCheckitemIdcheckitem**](docs/DefaultApi.md#deleteCardsIdCheckitemIdcheckitem) | **DELETE** /cards/{id}/checkItem/{idCheckItem} | Delete checkItem on a Card
*TrelloRestApi.DefaultApi* | [**deleteCardsIdChecklistsIdchecklist**](docs/DefaultApi.md#deleteCardsIdChecklistsIdchecklist) | **DELETE** /cards/{id}/checklists/{idChecklist} | Delete a Checklist on a Card
*TrelloRestApi.DefaultApi* | [**deleteCardsIdIdlabelsIdlabel**](docs/DefaultApi.md#deleteCardsIdIdlabelsIdlabel) | **DELETE** /cards/{id}/idLabels/{idLabel} | Remove a Label from a Card
*TrelloRestApi.DefaultApi* | [**deleteCardsIdMembersvotedIdmember**](docs/DefaultApi.md#deleteCardsIdMembersvotedIdmember) | **DELETE** /cards/{id}/membersVoted/{idMember} | Remove a Member&#39;s Vote on a Card
*TrelloRestApi.DefaultApi* | [**deleteCardsIdStickersIdsticker**](docs/DefaultApi.md#deleteCardsIdStickersIdsticker) | **DELETE** /cards/{id}/stickers/{idSticker} | Delete a Sticker on a Card
*TrelloRestApi.DefaultApi* | [**deleteChecklistsId**](docs/DefaultApi.md#deleteChecklistsId) | **DELETE** /checklists/{id} | Delete a Checklist
*TrelloRestApi.DefaultApi* | [**deleteChecklistsIdCheckitemsIdcheckitem**](docs/DefaultApi.md#deleteChecklistsIdCheckitemsIdcheckitem) | **DELETE** /checklists/{id}/checkItems/{idCheckItem} | Delete Checkitem from Checklist
*TrelloRestApi.DefaultApi* | [**deleteCustomfieldsId**](docs/DefaultApi.md#deleteCustomfieldsId) | **DELETE** /customFields/{id} | Delete a Custom Field definition
*TrelloRestApi.DefaultApi* | [**deleteCustomfieldsOptionsIdcustomfieldoption**](docs/DefaultApi.md#deleteCustomfieldsOptionsIdcustomfieldoption) | **DELETE** /customFields/{id}/options/{idCustomFieldOption} | Delete Option of Custom Field dropdown
*TrelloRestApi.DefaultApi* | [**deleteEnterprisesIdOrganizationsIdorg**](docs/DefaultApi.md#deleteEnterprisesIdOrganizationsIdorg) | **DELETE** /enterprises/{id}/organizations/{idOrg} | Delete an Organization from an Enterprise.
*TrelloRestApi.DefaultApi* | [**deleteIdIdmembersIdmember**](docs/DefaultApi.md#deleteIdIdmembersIdmember) | **DELETE** /cards/{id}/idMembers/{idMember} | Remove a Member from a Card
*TrelloRestApi.DefaultApi* | [**deleteLabelsId**](docs/DefaultApi.md#deleteLabelsId) | **DELETE** /labels/{id} | Delete a Label
*TrelloRestApi.DefaultApi* | [**deleteMembersIdBoardbackgroundsIdbackground**](docs/DefaultApi.md#deleteMembersIdBoardbackgroundsIdbackground) | **DELETE** /members/{id}/boardBackgrounds/{idBackground} | Delete a Member&#39;s custom Board background
*TrelloRestApi.DefaultApi* | [**deleteMembersIdBoardstarsIdstar**](docs/DefaultApi.md#deleteMembersIdBoardstarsIdstar) | **DELETE** /members/{id}/boardStars/{idStar} | Delete Star for Board
*TrelloRestApi.DefaultApi* | [**deleteMembersIdCustomboardbackgroundsIdbackground**](docs/DefaultApi.md#deleteMembersIdCustomboardbackgroundsIdbackground) | **DELETE** /members/{id}/customBoardBackgrounds/{idBackground} | Delete custom Board Background of Member
*TrelloRestApi.DefaultApi* | [**deleteMembersIdCustomstickersIdsticker**](docs/DefaultApi.md#deleteMembersIdCustomstickersIdsticker) | **DELETE** /members/{id}/customStickers/{idSticker} | Delete a Member&#39;s custom Sticker
*TrelloRestApi.DefaultApi* | [**deleteMembersIdSavedsearchesIdsearch**](docs/DefaultApi.md#deleteMembersIdSavedsearchesIdsearch) | **DELETE** /members/{id}/savedSearches/{idSearch} | Delete a saved search
*TrelloRestApi.DefaultApi* | [**deleteOrganizationsId**](docs/DefaultApi.md#deleteOrganizationsId) | **DELETE** /organizations/{id} | Delete an Organization
*TrelloRestApi.DefaultApi* | [**deleteOrganizationsIdLogo**](docs/DefaultApi.md#deleteOrganizationsIdLogo) | **DELETE** /organizations/{id}/logo | Delete Logo for Organization
*TrelloRestApi.DefaultApi* | [**deleteOrganizationsIdMembers**](docs/DefaultApi.md#deleteOrganizationsIdMembers) | **DELETE** /organizations/{id}/members/{idMember} | Remove a Member from an Organization
*TrelloRestApi.DefaultApi* | [**deleteOrganizationsIdPrefsAssociateddomain**](docs/DefaultApi.md#deleteOrganizationsIdPrefsAssociateddomain) | **DELETE** /organizations/{id}/prefs/associatedDomain | Remove the associated Google Apps domain from a team
*TrelloRestApi.DefaultApi* | [**deleteOrganizationsIdPrefsOrginviterestrict**](docs/DefaultApi.md#deleteOrganizationsIdPrefsOrginviterestrict) | **DELETE** /organizations/{id}/prefs/orgInviteRestrict | Delete the email domain restriction on who can be invited to the team
*TrelloRestApi.DefaultApi* | [**deleteOrganizationsIdTagsIdtag**](docs/DefaultApi.md#deleteOrganizationsIdTagsIdtag) | **DELETE** /organizations/{id}/tags/{idTag} | Delete an Organization&#39;s Tag
*TrelloRestApi.DefaultApi* | [**deleteToken**](docs/DefaultApi.md#deleteToken) | **DELETE** /tokens/{token}/ | Delete a Token
*TrelloRestApi.DefaultApi* | [**deleteTokensTokenWebhooksIdwebhook**](docs/DefaultApi.md#deleteTokensTokenWebhooksIdwebhook) | **DELETE** /tokens/{token}/webhooks/{idWebhook} | Delete a Webhook created by Token
*TrelloRestApi.DefaultApi* | [**deleteWebhooksId**](docs/DefaultApi.md#deleteWebhooksId) | **DELETE** /webhooks/{id} | Delete a Webhook
*TrelloRestApi.DefaultApi* | [**deletedCardsIdAttachmentsIdattachment**](docs/DefaultApi.md#deletedCardsIdAttachmentsIdattachment) | **DELETE** /cards/{id}/attachments/{idAttachment} | Delete an Attachment on a Card
*TrelloRestApi.DefaultApi* | [**emoji**](docs/DefaultApi.md#emoji) | **GET** /emoji | List available Emoji
*TrelloRestApi.DefaultApi* | [**enterprisesIdMembersIdMemberDeactivated**](docs/DefaultApi.md#enterprisesIdMembersIdMemberDeactivated) | **PUT** /enterprises/{id}/members/{idMember}/deactivated | Deactivate a Member of an Enterprise.
*TrelloRestApi.DefaultApi* | [**enterprisesIdOrganizationsIdmember**](docs/DefaultApi.md#enterprisesIdOrganizationsIdmember) | **DELETE** /enterprises/{id}/organizations/{idMember} | Remove a Member as admin from Enterprise.
*TrelloRestApi.DefaultApi* | [**getActionsId**](docs/DefaultApi.md#getActionsId) | **GET** /actions/{id} | Get an Action
*TrelloRestApi.DefaultApi* | [**getActionsIdBoard**](docs/DefaultApi.md#getActionsIdBoard) | **GET** /actions/{id}/board | Get the Board for an Action
*TrelloRestApi.DefaultApi* | [**getActionsIdCard**](docs/DefaultApi.md#getActionsIdCard) | **GET** /actions/{id}/card | Get the Card for an Action
*TrelloRestApi.DefaultApi* | [**getActionsIdField**](docs/DefaultApi.md#getActionsIdField) | **GET** /actions/{id}/{field} | Get a specific field on an Action
*TrelloRestApi.DefaultApi* | [**getActionsIdList**](docs/DefaultApi.md#getActionsIdList) | **GET** /actions/{id}/list | Get the List for an Action
*TrelloRestApi.DefaultApi* | [**getActionsIdMember**](docs/DefaultApi.md#getActionsIdMember) | **GET** /actions/{id}/member | Get the Member of an Action
*TrelloRestApi.DefaultApi* | [**getActionsIdMembercreator**](docs/DefaultApi.md#getActionsIdMembercreator) | **GET** /actions/{id}/memberCreator | Get the Member Creator of an Action
*TrelloRestApi.DefaultApi* | [**getActionsIdOrganization**](docs/DefaultApi.md#getActionsIdOrganization) | **GET** /actions/{id}/organization | Get the Organization of an Action
*TrelloRestApi.DefaultApi* | [**getActionsIdactionReactions**](docs/DefaultApi.md#getActionsIdactionReactions) | **GET** /actions/{idAction}/reactions | Get Action&#39;s Reactions
*TrelloRestApi.DefaultApi* | [**getActionsIdactionReactionsId**](docs/DefaultApi.md#getActionsIdactionReactionsId) | **GET** /actions/{idAction}/reactions/{id} | Get Action&#39;s Reaction
*TrelloRestApi.DefaultApi* | [**getActionsIdactionReactionsummary**](docs/DefaultApi.md#getActionsIdactionReactionsummary) | **GET** /actions/{idAction}/reactionsSummary | List Action&#39;s summary of Reactions
*TrelloRestApi.DefaultApi* | [**getBatch**](docs/DefaultApi.md#getBatch) | **GET** /batch | Batch Requests
*TrelloRestApi.DefaultApi* | [**getBoardIdPlugins**](docs/DefaultApi.md#getBoardIdPlugins) | **GET** /boards/{id}/plugins | Get Power-Ups on a Board
*TrelloRestApi.DefaultApi* | [**getBoardsId**](docs/DefaultApi.md#getBoardsId) | **GET** /boards/{id} | Get a Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdActions**](docs/DefaultApi.md#getBoardsIdActions) | **GET** /boards/{boardId}/actions | Get Actions of a Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdBoardplugins**](docs/DefaultApi.md#getBoardsIdBoardplugins) | **GET** /boards/{id}/boardPlugins | Get Enabled Power-Ups on Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdBoardstars**](docs/DefaultApi.md#getBoardsIdBoardstars) | **GET** /boards/{boardId}/boardStars | Get boardStars on a Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdCards**](docs/DefaultApi.md#getBoardsIdCards) | **GET** /boards/{id}/cards | Get Cards on a Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdCardsFilter**](docs/DefaultApi.md#getBoardsIdCardsFilter) | **GET** /boards/{id}/cards/{filter} | Get filtered Cards on a Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdCardsIdcard**](docs/DefaultApi.md#getBoardsIdCardsIdcard) | **GET** /boards/{id}/cards/{idCard} | Get a Card on a Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdCustomfields**](docs/DefaultApi.md#getBoardsIdCustomfields) | **GET** /boards/{id}/customFields | Get Custom Fields for Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdField**](docs/DefaultApi.md#getBoardsIdField) | **GET** /boards/{id}/{field} | Get a field on a Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdLabels**](docs/DefaultApi.md#getBoardsIdLabels) | **GET** /boards/{id}/labels | Get Labels on a Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdLists**](docs/DefaultApi.md#getBoardsIdLists) | **GET** /boards/{id}/lists | Get Lists on a Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdListsFilter**](docs/DefaultApi.md#getBoardsIdListsFilter) | **GET** /boards/{id}/lists/{filter} | Get filtered Lists on a Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdMembers**](docs/DefaultApi.md#getBoardsIdMembers) | **GET** /boards/{id}/members | Get the Members of a Board
*TrelloRestApi.DefaultApi* | [**getBoardsIdMemberships**](docs/DefaultApi.md#getBoardsIdMemberships) | **GET** /boards/{id}/memberships | Get Memberships of a Board
*TrelloRestApi.DefaultApi* | [**getCardsId**](docs/DefaultApi.md#getCardsId) | **GET** /cards/{id} | Get a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdActions**](docs/DefaultApi.md#getCardsIdActions) | **GET** /cards/{id}/actions | Get Actions on a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdAttachments**](docs/DefaultApi.md#getCardsIdAttachments) | **GET** /cards/{id}/attachments | Get Attachments on a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdAttachmentsIdattachment**](docs/DefaultApi.md#getCardsIdAttachmentsIdattachment) | **GET** /cards/{id}/attachments/{idAttachment} | Get an Attachment on a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdBoard**](docs/DefaultApi.md#getCardsIdBoard) | **GET** /cards/{id}/board | Get the Board the Card is on
*TrelloRestApi.DefaultApi* | [**getCardsIdCheckitemIdcheckitem**](docs/DefaultApi.md#getCardsIdCheckitemIdcheckitem) | **GET** /cards/{id}/checkItem/{idCheckItem} | Get checkItem on a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdCheckitemstates**](docs/DefaultApi.md#getCardsIdCheckitemstates) | **GET** /cards/{id}/checkItemStates | Get checkItems on a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdChecklists**](docs/DefaultApi.md#getCardsIdChecklists) | **GET** /cards/{id}/checklists | Get Checklists on a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdCustomfielditems**](docs/DefaultApi.md#getCardsIdCustomfielditems) | **GET** /cards/{id}/customFieldItems | Get Custom Field Items for a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdField**](docs/DefaultApi.md#getCardsIdField) | **GET** /cards/{id}/{field} | Get a field on a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdList**](docs/DefaultApi.md#getCardsIdList) | **GET** /cards/{id}/list | Get the List of a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdMembers**](docs/DefaultApi.md#getCardsIdMembers) | **GET** /cards/{id}/members | Get the Members of a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdMembersvoted**](docs/DefaultApi.md#getCardsIdMembersvoted) | **GET** /cards/{id}/membersVoted | Get Members who have voted on a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdPlugindata**](docs/DefaultApi.md#getCardsIdPlugindata) | **GET** /cards/{id}/pluginData | Get pluginData on a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdStickers**](docs/DefaultApi.md#getCardsIdStickers) | **GET** /cards/{id}/stickers | Get Stickers on a Card
*TrelloRestApi.DefaultApi* | [**getCardsIdStickersIdsticker**](docs/DefaultApi.md#getCardsIdStickersIdsticker) | **GET** /cards/{id}/stickers/{idSticker} | Get a Sticker on a Card
*TrelloRestApi.DefaultApi* | [**getChecklistsId**](docs/DefaultApi.md#getChecklistsId) | **GET** /checklists/{id} | Get a Checklist
*TrelloRestApi.DefaultApi* | [**getChecklistsIdBoard**](docs/DefaultApi.md#getChecklistsIdBoard) | **GET** /checklists/{id}/board | Get the Board the Checklist is on
*TrelloRestApi.DefaultApi* | [**getChecklistsIdCards**](docs/DefaultApi.md#getChecklistsIdCards) | **GET** /checklists/{id}/cards | Get the Card a Checklist is on
*TrelloRestApi.DefaultApi* | [**getChecklistsIdCheckitems**](docs/DefaultApi.md#getChecklistsIdCheckitems) | **GET** /checklists/{id}/checkItems | Get Checkitems on a Checklist
*TrelloRestApi.DefaultApi* | [**getChecklistsIdCheckitemsIdcheckitem**](docs/DefaultApi.md#getChecklistsIdCheckitemsIdcheckitem) | **GET** /checklists/{id}/checkItems/{idCheckItem} | Get a Checkitem on a Checklist
*TrelloRestApi.DefaultApi* | [**getChecklistsIdField**](docs/DefaultApi.md#getChecklistsIdField) | **GET** /checklists/{id}/{field} | Get field on a Checklist
*TrelloRestApi.DefaultApi* | [**getCustomfieldsId**](docs/DefaultApi.md#getCustomfieldsId) | **GET** /customFields/{id} | Get a Custom Field
*TrelloRestApi.DefaultApi* | [**getCustomfieldsIdOptions**](docs/DefaultApi.md#getCustomfieldsIdOptions) | **POST** /customFields/{id}/options | Add Option to Custom Field dropdown
*TrelloRestApi.DefaultApi* | [**getCustomfieldsOptionsIdcustomfieldoption**](docs/DefaultApi.md#getCustomfieldsOptionsIdcustomfieldoption) | **GET** /customFields/{id}/options/{idCustomFieldOption} | Get Option of Custom Field dropdown
*TrelloRestApi.DefaultApi* | [**getEnterprisesId**](docs/DefaultApi.md#getEnterprisesId) | **GET** /enterprises/{id} | Get an Enterprise
*TrelloRestApi.DefaultApi* | [**getEnterprisesIdAdmins**](docs/DefaultApi.md#getEnterprisesIdAdmins) | **GET** /enterprises/{id}/admins | Get Enterprise admin Members
*TrelloRestApi.DefaultApi* | [**getEnterprisesIdAuditlog**](docs/DefaultApi.md#getEnterprisesIdAuditlog) | **GET** /enterprises/{id}/auditlog | Get auditlog data for an Enterprise
*TrelloRestApi.DefaultApi* | [**getEnterprisesIdMembers**](docs/DefaultApi.md#getEnterprisesIdMembers) | **GET** /enterprises/{id}/members | Get Members of Enterprise
*TrelloRestApi.DefaultApi* | [**getEnterprisesIdMembersIdmember**](docs/DefaultApi.md#getEnterprisesIdMembersIdmember) | **GET** /enterprises/{id}/members/{idMember} | Get a Member of Enterprise
*TrelloRestApi.DefaultApi* | [**getEnterprisesIdSignupurl**](docs/DefaultApi.md#getEnterprisesIdSignupurl) | **GET** /enterprises/{id}/signupUrl | Get signupUrl for Enterprise
*TrelloRestApi.DefaultApi* | [**getEnterprisesIdTransferrableOrganizationIdOrganization**](docs/DefaultApi.md#getEnterprisesIdTransferrableOrganizationIdOrganization) | **GET** /enterprises/{id}/transferrable/organization/{idOrganization} | Get whether an organization can be transferred to an enterprise.
*TrelloRestApi.DefaultApi* | [**getLabelsId**](docs/DefaultApi.md#getLabelsId) | **GET** /labels/{id} | Get a Label
*TrelloRestApi.DefaultApi* | [**getListsId**](docs/DefaultApi.md#getListsId) | **GET** /lists/{id} | Get a List
*TrelloRestApi.DefaultApi* | [**getListsIdActions**](docs/DefaultApi.md#getListsIdActions) | **GET** /lists/{id}/actions | Get Actions for a List
*TrelloRestApi.DefaultApi* | [**getListsIdBoard**](docs/DefaultApi.md#getListsIdBoard) | **GET** /lists/{id}/board | Get the Board a List is on
*TrelloRestApi.DefaultApi* | [**getListsIdCards**](docs/DefaultApi.md#getListsIdCards) | **GET** /lists/{id}/cards | Get Cards in a List
*TrelloRestApi.DefaultApi* | [**getMembersIdActions**](docs/DefaultApi.md#getMembersIdActions) | **GET** /members/{id}/actions | Get a Member&#39;s Actions
*TrelloRestApi.DefaultApi* | [**getMembersIdBoardbackgrounds**](docs/DefaultApi.md#getMembersIdBoardbackgrounds) | **GET** /members/{id}/boardBackgrounds | Get Member&#39;s custom Board backgrounds
*TrelloRestApi.DefaultApi* | [**getMembersIdBoardbackgroundsIdbackground**](docs/DefaultApi.md#getMembersIdBoardbackgroundsIdbackground) | **GET** /members/{id}/boardBackgrounds/{idBackground} | Get a boardBackground of a Member
*TrelloRestApi.DefaultApi* | [**getMembersIdBoards**](docs/DefaultApi.md#getMembersIdBoards) | **GET** /members/{id}/boards | Get Boards that Member belongs to
*TrelloRestApi.DefaultApi* | [**getMembersIdBoardsinvited**](docs/DefaultApi.md#getMembersIdBoardsinvited) | **GET** /members/{id}/boardsInvited | Get Boards the Member has been invited to
*TrelloRestApi.DefaultApi* | [**getMembersIdBoardstars**](docs/DefaultApi.md#getMembersIdBoardstars) | **GET** /members/{id}/boardStars | Get a Member&#39;s boardStars
*TrelloRestApi.DefaultApi* | [**getMembersIdBoardstarsIdstar**](docs/DefaultApi.md#getMembersIdBoardstarsIdstar) | **GET** /members/{id}/boardStars/{idStar} | Get a boardStar of Member
*TrelloRestApi.DefaultApi* | [**getMembersIdCards**](docs/DefaultApi.md#getMembersIdCards) | **GET** /members/{id}/cards | Get Cards the Member is on
*TrelloRestApi.DefaultApi* | [**getMembersIdCustomboardbackgrounds**](docs/DefaultApi.md#getMembersIdCustomboardbackgrounds) | **GET** /members/{id}/customBoardBackgrounds | Get a Member&#39;s custom Board Backgrounds
*TrelloRestApi.DefaultApi* | [**getMembersIdCustomboardbackgroundsIdbackground**](docs/DefaultApi.md#getMembersIdCustomboardbackgroundsIdbackground) | **GET** /members/{id}/customBoardBackgrounds/{idBackground} | Get custom Board Background of Member
*TrelloRestApi.DefaultApi* | [**getMembersIdCustomemoji**](docs/DefaultApi.md#getMembersIdCustomemoji) | **GET** /members/{id}/customEmoji | Get a Member&#39;s customEmojis
*TrelloRestApi.DefaultApi* | [**getMembersIdCustomstickers**](docs/DefaultApi.md#getMembersIdCustomstickers) | **GET** /members/{id}/customStickers | Get Member&#39;s custom Stickers
*TrelloRestApi.DefaultApi* | [**getMembersIdCustomstickersIdsticker**](docs/DefaultApi.md#getMembersIdCustomstickersIdsticker) | **GET** /members/{id}/customStickers/{idSticker} | Get a Member&#39;s custom Sticker
*TrelloRestApi.DefaultApi* | [**getMembersIdField**](docs/DefaultApi.md#getMembersIdField) | **GET** /members/{id}/{field} | Get a field on a Member
*TrelloRestApi.DefaultApi* | [**getMembersIdNotifications**](docs/DefaultApi.md#getMembersIdNotifications) | **GET** /members/{id}/notifications | Get Member&#39;s Notifications
*TrelloRestApi.DefaultApi* | [**getMembersIdOrganizations**](docs/DefaultApi.md#getMembersIdOrganizations) | **GET** /members/{id}/organizations | Get Member&#39;s Organizations
*TrelloRestApi.DefaultApi* | [**getMembersIdOrganizationsinvited**](docs/DefaultApi.md#getMembersIdOrganizationsinvited) | **GET** /members/{id}/organizationsInvited | Get Organizations a Member has been invited to
*TrelloRestApi.DefaultApi* | [**getMembersIdSavedsearches**](docs/DefaultApi.md#getMembersIdSavedsearches) | **GET** /members/{id}/savedSearches | Get Member&#39;s saved searched
*TrelloRestApi.DefaultApi* | [**getMembersIdSavedsearchesIdsearch**](docs/DefaultApi.md#getMembersIdSavedsearchesIdsearch) | **GET** /members/{id}/savedSearches/{idSearch} | Get a saved search
*TrelloRestApi.DefaultApi* | [**getMembersIdTokens**](docs/DefaultApi.md#getMembersIdTokens) | **GET** /members/{id}/tokens | Get Member&#39;s Tokens
*TrelloRestApi.DefaultApi* | [**getMembersid**](docs/DefaultApi.md#getMembersid) | **GET** /members/{id} | Get a Member
*TrelloRestApi.DefaultApi* | [**getNotificationsId**](docs/DefaultApi.md#getNotificationsId) | **GET** /notifications/{id} | Get a Notification
*TrelloRestApi.DefaultApi* | [**getNotificationsIdBoard**](docs/DefaultApi.md#getNotificationsIdBoard) | **GET** /notifications/{id}/board | Get the Board a Notification is on
*TrelloRestApi.DefaultApi* | [**getNotificationsIdCard**](docs/DefaultApi.md#getNotificationsIdCard) | **GET** /notifications/{id}/card | Get the Card a Notification is on
*TrelloRestApi.DefaultApi* | [**getNotificationsIdField**](docs/DefaultApi.md#getNotificationsIdField) | **GET** /notifications/{id}/{field} | Get a field of a Notification
*TrelloRestApi.DefaultApi* | [**getNotificationsIdList**](docs/DefaultApi.md#getNotificationsIdList) | **GET** /notifications/{id}/list | Get the List a Notification is on
*TrelloRestApi.DefaultApi* | [**getNotificationsIdMembercreator**](docs/DefaultApi.md#getNotificationsIdMembercreator) | **GET** /notifications/{id}/memberCreator | Get the Member who created the Notification
*TrelloRestApi.DefaultApi* | [**getNotificationsIdOrganization**](docs/DefaultApi.md#getNotificationsIdOrganization) | **GET** /notifications/{id}/organization | Get a Notification&#39;s associated Organization
*TrelloRestApi.DefaultApi* | [**getOrganizationsId**](docs/DefaultApi.md#getOrganizationsId) | **GET** /organizations/{id} | Get an Organization
*TrelloRestApi.DefaultApi* | [**getOrganizationsIdActions**](docs/DefaultApi.md#getOrganizationsIdActions) | **GET** /organizations/{id}/actions | Get Actions for Organization
*TrelloRestApi.DefaultApi* | [**getOrganizationsIdBoards**](docs/DefaultApi.md#getOrganizationsIdBoards) | **GET** /organizations/{id}/boards | Get Boards in an Organization
*TrelloRestApi.DefaultApi* | [**getOrganizationsIdExports**](docs/DefaultApi.md#getOrganizationsIdExports) | **GET** /organizations/{id}/exports | Retrieve Organization&#39;s Exports
*TrelloRestApi.DefaultApi* | [**getOrganizationsIdField**](docs/DefaultApi.md#getOrganizationsIdField) | **GET** /organizations/{id}/{field} | Get field on Organization
*TrelloRestApi.DefaultApi* | [**getOrganizationsIdMembers**](docs/DefaultApi.md#getOrganizationsIdMembers) | **GET** /organizations/{id}/members | Get the Members of an Organization
*TrelloRestApi.DefaultApi* | [**getOrganizationsIdMemberships**](docs/DefaultApi.md#getOrganizationsIdMemberships) | **GET** /organizations/{id}/memberships | Get Memberships of an Organization
*TrelloRestApi.DefaultApi* | [**getOrganizationsIdMembershipsIdmembership**](docs/DefaultApi.md#getOrganizationsIdMembershipsIdmembership) | **GET** /organizations/{id}/memberships/{idMembership} | Get a Membership of an Organization
*TrelloRestApi.DefaultApi* | [**getOrganizationsIdNewbillableguestsIdboard**](docs/DefaultApi.md#getOrganizationsIdNewbillableguestsIdboard) | **GET** /organizations/{id}/newBillableGuests/{idBoard} | Get Organizations new billable guests
*TrelloRestApi.DefaultApi* | [**getOrganizationsIdPlugindata**](docs/DefaultApi.md#getOrganizationsIdPlugindata) | **GET** /organizations/{id}/pluginData | Get the pluginData Scoped to Organization
*TrelloRestApi.DefaultApi* | [**getOrganizationsIdTags**](docs/DefaultApi.md#getOrganizationsIdTags) | **GET** /organizations/{id}/tags | Get Tags of an Organization
*TrelloRestApi.DefaultApi* | [**getPluginsId**](docs/DefaultApi.md#getPluginsId) | **GET** /plugins/{id}/ | Get a Plugin
*TrelloRestApi.DefaultApi* | [**getPluginsIdComplianceMemberprivacy**](docs/DefaultApi.md#getPluginsIdComplianceMemberprivacy) | **GET** /plugins/{id}/compliance/memberPrivacy | Get Plugin&#39;s Member privacy compliance
*TrelloRestApi.DefaultApi* | [**getSearch**](docs/DefaultApi.md#getSearch) | **GET** /search | Search Trello
*TrelloRestApi.DefaultApi* | [**getSearchMembers**](docs/DefaultApi.md#getSearchMembers) | **GET** /search/members/ | Search for Members
*TrelloRestApi.DefaultApi* | [**getTokensToken**](docs/DefaultApi.md#getTokensToken) | **GET** /tokens/{token} | Get a Token
*TrelloRestApi.DefaultApi* | [**getTokensTokenMember**](docs/DefaultApi.md#getTokensTokenMember) | **GET** /tokens/{token}/member | Get Token&#39;s Member
*TrelloRestApi.DefaultApi* | [**getTokensTokenWebhooks**](docs/DefaultApi.md#getTokensTokenWebhooks) | **GET** /tokens/{token}/webhooks | Get Webhooks for Token
*TrelloRestApi.DefaultApi* | [**getTokensTokenWebhooksIdwebhook**](docs/DefaultApi.md#getTokensTokenWebhooksIdwebhook) | **GET** /tokens/{token}/webhooks/{idWebhook} | Get a Webhook belonging to a Token
*TrelloRestApi.DefaultApi* | [**getWebhooksId**](docs/DefaultApi.md#getWebhooksId) | **GET** /webhooks/{id} | Get a Webhook
*TrelloRestApi.DefaultApi* | [**membersidavatar**](docs/DefaultApi.md#membersidavatar) | **POST** /members/{id}/avatar | Create Avatar for Member
*TrelloRestApi.DefaultApi* | [**membersidcustomboardbackgrounds1**](docs/DefaultApi.md#membersidcustomboardbackgrounds1) | **POST** /members/{id}/customBoardBackgrounds | Create a new custom Board Background
*TrelloRestApi.DefaultApi* | [**membersidcustomemojiidemoji**](docs/DefaultApi.md#membersidcustomemojiidemoji) | **GET** /members/{id}/customEmoji/{idEmoji} | Get a Member&#39;s custom Emoji
*TrelloRestApi.DefaultApi* | [**notificationsidmember**](docs/DefaultApi.md#notificationsidmember) | **GET** /notifications/{id}/member | Get the Member a Notification is about (not the creator)
*TrelloRestApi.DefaultApi* | [**organizationsIdMembersIdmemberAll**](docs/DefaultApi.md#organizationsIdMembersIdmemberAll) | **DELETE** /organizations/{id}/members/{idMember}/all | Remove a Member from an Organization and all Organization Boards
*TrelloRestApi.DefaultApi* | [**postActionsIdactionReactions**](docs/DefaultApi.md#postActionsIdactionReactions) | **POST** /actions/{idAction}/reactions | Create Reaction for Action
*TrelloRestApi.DefaultApi* | [**postBoards**](docs/DefaultApi.md#postBoards) | **POST** /boards/ | Create a Board
*TrelloRestApi.DefaultApi* | [**postBoardsIdBoardplugins**](docs/DefaultApi.md#postBoardsIdBoardplugins) | **POST** /boards/{id}/boardPlugins | Enable a Power-Up on a Board
*TrelloRestApi.DefaultApi* | [**postBoardsIdCalendarkeyGenerate**](docs/DefaultApi.md#postBoardsIdCalendarkeyGenerate) | **POST** /boards/{id}/calendarKey/generate | Create a calendarKey for a Board
*TrelloRestApi.DefaultApi* | [**postBoardsIdChecklists**](docs/DefaultApi.md#postBoardsIdChecklists) | **POST** /boards/{id}/checklists | Create Checklist on a Board
*TrelloRestApi.DefaultApi* | [**postBoardsIdEmailkeyGenerate**](docs/DefaultApi.md#postBoardsIdEmailkeyGenerate) | **POST** /boards/{id}/emailKey/generate | Create a emailKey for a Board
*TrelloRestApi.DefaultApi* | [**postBoardsIdIdtags**](docs/DefaultApi.md#postBoardsIdIdtags) | **POST** /boards/{id}/idTags | Create a Tag for a Board
*TrelloRestApi.DefaultApi* | [**postBoardsIdLabels**](docs/DefaultApi.md#postBoardsIdLabels) | **POST** /boards/{id}/labels | Create a Label on a Board
*TrelloRestApi.DefaultApi* | [**postBoardsIdLists**](docs/DefaultApi.md#postBoardsIdLists) | **POST** /boards/{id}/lists | Create a List on a Board
*TrelloRestApi.DefaultApi* | [**postBoardsIdMarkedasviewed**](docs/DefaultApi.md#postBoardsIdMarkedasviewed) | **POST** /boards/{id}/markedAsViewed | Mark Board as viewed
*TrelloRestApi.DefaultApi* | [**postBoardsIdPowerups**](docs/DefaultApi.md#postBoardsIdPowerups) | **POST** /boards/{id}/powerUps | Enable Power-Up on a Board
*TrelloRestApi.DefaultApi* | [**postCards**](docs/DefaultApi.md#postCards) | **POST** /cards | Create a new Card
*TrelloRestApi.DefaultApi* | [**postCardsIdActionsComments**](docs/DefaultApi.md#postCardsIdActionsComments) | **POST** /cards/{id}/actions/comments | Add a new comment to a Card
*TrelloRestApi.DefaultApi* | [**postCardsIdAttachments**](docs/DefaultApi.md#postCardsIdAttachments) | **POST** /cards/{id}/attachments | Create Attachment On Card
*TrelloRestApi.DefaultApi* | [**postCardsIdChecklists**](docs/DefaultApi.md#postCardsIdChecklists) | **POST** /cards/{id}/checklists | Create Checklist on a Card
*TrelloRestApi.DefaultApi* | [**postCardsIdIdlabels**](docs/DefaultApi.md#postCardsIdIdlabels) | **POST** /cards/{id}/idLabels | Add a Label to a Card
*TrelloRestApi.DefaultApi* | [**postCardsIdIdmembers**](docs/DefaultApi.md#postCardsIdIdmembers) | **POST** /cards/{id}/idMembers | Add a Member to a Card
*TrelloRestApi.DefaultApi* | [**postCardsIdLabels**](docs/DefaultApi.md#postCardsIdLabels) | **POST** /cards/{id}/labels | Create a new Label on a Card
*TrelloRestApi.DefaultApi* | [**postCardsIdMarkassociatednotificationsread**](docs/DefaultApi.md#postCardsIdMarkassociatednotificationsread) | **POST** /cards/{id}/markAssociatedNotificationsRead | Mark a Card&#39;s Notifications as read
*TrelloRestApi.DefaultApi* | [**postCardsIdStickers**](docs/DefaultApi.md#postCardsIdStickers) | **POST** /cards/{id}/stickers | Add a Sticker to a Card
*TrelloRestApi.DefaultApi* | [**postChecklists**](docs/DefaultApi.md#postChecklists) | **POST** /checklists | Create a Checklist
*TrelloRestApi.DefaultApi* | [**postChecklistsIdCheckitems**](docs/DefaultApi.md#postChecklistsIdCheckitems) | **POST** /checklists/{id}/checkItems | Create Checkitem on Checklist
*TrelloRestApi.DefaultApi* | [**postCustomfields**](docs/DefaultApi.md#postCustomfields) | **POST** /customFields | Create a new Custom Field on a Board
*TrelloRestApi.DefaultApi* | [**postCustomfieldsIdOptions**](docs/DefaultApi.md#postCustomfieldsIdOptions) | **GET** /customFields/{id}/options | Get Options of Custom Field drop down
*TrelloRestApi.DefaultApi* | [**postEnterprisesIdTokens**](docs/DefaultApi.md#postEnterprisesIdTokens) | **POST** /enterprises/{id}/tokens | Create an auth Token for an Enterprise.
*TrelloRestApi.DefaultApi* | [**postLabels**](docs/DefaultApi.md#postLabels) | **POST** /labels | Create a Label
*TrelloRestApi.DefaultApi* | [**postLists**](docs/DefaultApi.md#postLists) | **POST** /lists | Create a new List
*TrelloRestApi.DefaultApi* | [**postListsIdArchiveallcards**](docs/DefaultApi.md#postListsIdArchiveallcards) | **POST** /lists/{id}/archiveAllCards | Archive all Cards in List
*TrelloRestApi.DefaultApi* | [**postListsIdMoveallcards**](docs/DefaultApi.md#postListsIdMoveallcards) | **POST** /lists/{id}/moveAllCards | Move all Cards in List
*TrelloRestApi.DefaultApi* | [**postMembersIdBoardbackgrounds1**](docs/DefaultApi.md#postMembersIdBoardbackgrounds1) | **POST** /members/{id}/boardBackgrounds | Upload new boardBackground for Member
*TrelloRestApi.DefaultApi* | [**postMembersIdBoardstars**](docs/DefaultApi.md#postMembersIdBoardstars) | **POST** /members/{id}/boardStars | Create Star for Board
*TrelloRestApi.DefaultApi* | [**postMembersIdCustomemoji**](docs/DefaultApi.md#postMembersIdCustomemoji) | **POST** /members/{id}/customEmoji | Create custom Emoji for Member
*TrelloRestApi.DefaultApi* | [**postMembersIdCustomstickers**](docs/DefaultApi.md#postMembersIdCustomstickers) | **POST** /members/{id}/customStickers | Create custom Sticker for Member
*TrelloRestApi.DefaultApi* | [**postMembersIdOnetimemessagesdismissed**](docs/DefaultApi.md#postMembersIdOnetimemessagesdismissed) | **POST** /members/{id}/oneTimeMessagesDismissed | Dismiss a message for Member
*TrelloRestApi.DefaultApi* | [**postMembersIdSavedsearches**](docs/DefaultApi.md#postMembersIdSavedsearches) | **POST** /members/{id}/savedSearches | Create saved Search for Memer
*TrelloRestApi.DefaultApi* | [**postNotificationsAllRead**](docs/DefaultApi.md#postNotificationsAllRead) | **POST** /notifications/all/read | Mark all Notifications as read
*TrelloRestApi.DefaultApi* | [**postOrganizations**](docs/DefaultApi.md#postOrganizations) | **POST** /organizations | Create a new Organization
*TrelloRestApi.DefaultApi* | [**postOrganizationsIdExports**](docs/DefaultApi.md#postOrganizationsIdExports) | **POST** /organizations/{id}/exports | Create Export for Organizations
*TrelloRestApi.DefaultApi* | [**postOrganizationsIdLogo**](docs/DefaultApi.md#postOrganizationsIdLogo) | **POST** /organizations/{id}/logo | Update logo for an Organization
*TrelloRestApi.DefaultApi* | [**postOrganizationsIdTags**](docs/DefaultApi.md#postOrganizationsIdTags) | **POST** /organizations/{id}/tags | Create a Tag in Organization
*TrelloRestApi.DefaultApi* | [**postPluginsIdpluginListing**](docs/DefaultApi.md#postPluginsIdpluginListing) | **POST** /plugins/{idPlugin}/listing | Create a Listing for Plugin
*TrelloRestApi.DefaultApi* | [**postTokensTokenWebhooks**](docs/DefaultApi.md#postTokensTokenWebhooks) | **POST** /tokens/{token}/webhooks | Create Webhooks for Token
*TrelloRestApi.DefaultApi* | [**postWebhooks**](docs/DefaultApi.md#postWebhooks) | **POST** /webhooks/ | Create a Webhook
*TrelloRestApi.DefaultApi* | [**putActionsId**](docs/DefaultApi.md#putActionsId) | **PUT** /actions/{id} | Update an Action
*TrelloRestApi.DefaultApi* | [**putActionsIdText**](docs/DefaultApi.md#putActionsIdText) | **PUT** /actions/{id}/text | Update a Comment Action
*TrelloRestApi.DefaultApi* | [**putBoardsId**](docs/DefaultApi.md#putBoardsId) | **PUT** /boards/{id} | Update a Board
*TrelloRestApi.DefaultApi* | [**putBoardsIdMembers**](docs/DefaultApi.md#putBoardsIdMembers) | **PUT** /boards/{id}/members | Invite Member to Board via email
*TrelloRestApi.DefaultApi* | [**putBoardsIdMembersIdmember**](docs/DefaultApi.md#putBoardsIdMembersIdmember) | **PUT** /boards/{id}/members/{idMember} | Add a Member to a Board
*TrelloRestApi.DefaultApi* | [**putBoardsIdMembershipsIdmembership**](docs/DefaultApi.md#putBoardsIdMembershipsIdmembership) | **PUT** /boards/{id}/memberships/{idMembership} | Update Membership of Member on a Board
*TrelloRestApi.DefaultApi* | [**putBoardsIdMyPrefsShowlistguide**](docs/DefaultApi.md#putBoardsIdMyPrefsShowlistguide) | **PUT** /boards/{id}/myPrefs/showListGuide | Update showListGuide Pref on a Board
*TrelloRestApi.DefaultApi* | [**putBoardsIdMyPrefsShowsidebar**](docs/DefaultApi.md#putBoardsIdMyPrefsShowsidebar) | **PUT** /boards/{id}/myPrefs/showSidebar | Update showSidebar Pref on a Board
*TrelloRestApi.DefaultApi* | [**putBoardsIdMyPrefsShowsidebaractivity**](docs/DefaultApi.md#putBoardsIdMyPrefsShowsidebaractivity) | **PUT** /boards/{id}/myPrefs/showSidebarActivity | Update showSidebarActivity Pref on a Board
*TrelloRestApi.DefaultApi* | [**putBoardsIdMyPrefsShowsidebarboardactions**](docs/DefaultApi.md#putBoardsIdMyPrefsShowsidebarboardactions) | **PUT** /boards/{id}/myPrefs/showSidebarBoardActions | Update showSidebarBoardActions Pref on a Board
*TrelloRestApi.DefaultApi* | [**putBoardsIdMyPrefsShowsidebarmembers**](docs/DefaultApi.md#putBoardsIdMyPrefsShowsidebarmembers) | **PUT** /boards/{id}/myPrefs/showSidebarMembers | Update showSidebarMembers Pref on a Board
*TrelloRestApi.DefaultApi* | [**putBoardsIdMyprefsEmailposition**](docs/DefaultApi.md#putBoardsIdMyprefsEmailposition) | **PUT** /boards/{id}/myPrefs/emailPosition | Update emailPosition Pref on a Board
*TrelloRestApi.DefaultApi* | [**putBoardsIdMyprefsIdemaillist**](docs/DefaultApi.md#putBoardsIdMyprefsIdemaillist) | **PUT** /boards/{id}/myPrefs/idEmailList | Update idEmailList Pref on a Board
*TrelloRestApi.DefaultApi* | [**putCardsId**](docs/DefaultApi.md#putCardsId) | **PUT** /cards/{id} | Update a Card
*TrelloRestApi.DefaultApi* | [**putCardsIdActionsIdactionComments**](docs/DefaultApi.md#putCardsIdActionsIdactionComments) | **PUT** /cards/{id}/actions/{idAction}/comments | Update Comment Action on a Card
*TrelloRestApi.DefaultApi* | [**putCardsIdCheckitemIdcheckitem**](docs/DefaultApi.md#putCardsIdCheckitemIdcheckitem) | **PUT** /cards/{id}/checkItem/{idCheckItem} | Update a checkItem on a Card
*TrelloRestApi.DefaultApi* | [**putCardsIdStickersIdsticker**](docs/DefaultApi.md#putCardsIdStickersIdsticker) | **PUT** /cards/{id}/stickers/{idSticker} | Update a Sticker on a Card
*TrelloRestApi.DefaultApi* | [**putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem**](docs/DefaultApi.md#putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem) | **PUT** /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem} | Update Checkitem on Checklist on Card
*TrelloRestApi.DefaultApi* | [**putCardsIdcardCustomfieldIdcustomfieldItem**](docs/DefaultApi.md#putCardsIdcardCustomfieldIdcustomfieldItem) | **PUT** /cards/{idCard}/customField/{idCustomField}/item | Update Custom Field item on Card
*TrelloRestApi.DefaultApi* | [**putChecklistsIdField**](docs/DefaultApi.md#putChecklistsIdField) | **PUT** /checklists/{id}/{field} | Update field on a Checklist
*TrelloRestApi.DefaultApi* | [**putCheclistsId**](docs/DefaultApi.md#putCheclistsId) | **PUT** /checklists/{id} | Update a Checklist
*TrelloRestApi.DefaultApi* | [**putCustomfieldsId**](docs/DefaultApi.md#putCustomfieldsId) | **PUT** /customFields/{id} | Update a Custom Field definition
*TrelloRestApi.DefaultApi* | [**putEnterprisesIdAdminsIdmember**](docs/DefaultApi.md#putEnterprisesIdAdminsIdmember) | **PUT** /enterprises/{id}/admins/{idMember} | Update Member to be admin of Enterprise
*TrelloRestApi.DefaultApi* | [**putEnterprisesIdMembersIdmemberLicensed**](docs/DefaultApi.md#putEnterprisesIdMembersIdmemberLicensed) | **PUT** /enterprises/{id}/members/{idMember}/licensed | Update a Member&#39;s licensed status
*TrelloRestApi.DefaultApi* | [**putEnterprisesIdOrganizations**](docs/DefaultApi.md#putEnterprisesIdOrganizations) | **PUT** /enterprises/{id}/organizations | Transfer an Organization to an Enterprise.
*TrelloRestApi.DefaultApi* | [**putIdIdboard**](docs/DefaultApi.md#putIdIdboard) | **PUT** /lists/{id}/idBoard | Move List to Board
*TrelloRestApi.DefaultApi* | [**putLabelsId**](docs/DefaultApi.md#putLabelsId) | **PUT** /labels/{id} | Update a Label
*TrelloRestApi.DefaultApi* | [**putLabelsIdField**](docs/DefaultApi.md#putLabelsIdField) | **PUT** /labels/{id}/{field} | Update a field on a label
*TrelloRestApi.DefaultApi* | [**putListsId**](docs/DefaultApi.md#putListsId) | **PUT** /lists/{id} | Update a List
*TrelloRestApi.DefaultApi* | [**putListsIdClosed**](docs/DefaultApi.md#putListsIdClosed) | **PUT** /lists/{id}/closed | Archive or unarchive a list
*TrelloRestApi.DefaultApi* | [**putListsIdField**](docs/DefaultApi.md#putListsIdField) | **PUT** /lists/{id}/{field} | Update a field on a List
*TrelloRestApi.DefaultApi* | [**putMembersId**](docs/DefaultApi.md#putMembersId) | **PUT** /members/{id} | Update a Member
*TrelloRestApi.DefaultApi* | [**putMembersIdBoardbackgroundsIdbackground**](docs/DefaultApi.md#putMembersIdBoardbackgroundsIdbackground) | **PUT** /members/{id}/boardBackgrounds/{idBackground} | Update a Member&#39;s custom Board background
*TrelloRestApi.DefaultApi* | [**putMembersIdBoardstarsIdstar**](docs/DefaultApi.md#putMembersIdBoardstarsIdstar) | **PUT** /members/{id}/boardStars/{idStar} | Update the position of a boardStar of Member
*TrelloRestApi.DefaultApi* | [**putMembersIdCustomboardbackgroundsIdbackground**](docs/DefaultApi.md#putMembersIdCustomboardbackgroundsIdbackground) | **PUT** /members/{id}/customBoardBackgrounds/{idBackground} | Update custom Board Background of Member
*TrelloRestApi.DefaultApi* | [**putMembersIdSavedsearchesIdsearch**](docs/DefaultApi.md#putMembersIdSavedsearchesIdsearch) | **PUT** /members/{id}/savedSearches/{idSearch} | Update a saved search
*TrelloRestApi.DefaultApi* | [**putNotificationsId**](docs/DefaultApi.md#putNotificationsId) | **PUT** /notifications/{id} | Update a Notification&#39;s read status
*TrelloRestApi.DefaultApi* | [**putNotificationsIdUnread**](docs/DefaultApi.md#putNotificationsIdUnread) | **PUT** /notifications/{id}/unread | Update Notification&#39;s read status
*TrelloRestApi.DefaultApi* | [**putOrganizationsId**](docs/DefaultApi.md#putOrganizationsId) | **PUT** /organizations/{id} | Update an Organization
*TrelloRestApi.DefaultApi* | [**putOrganizationsIdMembers**](docs/DefaultApi.md#putOrganizationsIdMembers) | **PUT** /organizations/{id}/members | Update an Organization&#39;s Members
*TrelloRestApi.DefaultApi* | [**putOrganizationsIdMembersIdmember**](docs/DefaultApi.md#putOrganizationsIdMembersIdmember) | **PUT** /organizations/{id}/members/{idMember} | Update a Member of an Organization
*TrelloRestApi.DefaultApi* | [**putOrganizationsIdMembersIdmemberDeactivated**](docs/DefaultApi.md#putOrganizationsIdMembersIdmemberDeactivated) | **PUT** /organizations/{id}/members/{idMember}/deactivated | Deactivate or reactivate a member of an Organization
*TrelloRestApi.DefaultApi* | [**putPluginsId**](docs/DefaultApi.md#putPluginsId) | **PUT** /plugins/{id}/ | Update a Plugin
*TrelloRestApi.DefaultApi* | [**putPluginsIdpluginListingsIdlisting**](docs/DefaultApi.md#putPluginsIdpluginListingsIdlisting) | **PUT** /plugins/{idPlugin}/listings/{idListing} | Updating Plugin&#39;s Listing
*TrelloRestApi.DefaultApi* | [**putWebhooksId**](docs/DefaultApi.md#putWebhooksId) | **PUT** /webhooks/{id} | Update a Webhook
*TrelloRestApi.DefaultApi* | [**tokenstokenwebhooks1**](docs/DefaultApi.md#tokenstokenwebhooks1) | **PUT** /tokens/{token}/webhooks/{idWebhook} | Update a Webhook created by Token
*TrelloRestApi.DefaultApi* | [**webhooksidfield**](docs/DefaultApi.md#webhooksidfield) | **GET** /webhooks/{id}/{field} | Get a field on a Webhook


## Documentation for Models

 - [TrelloRestApi.Action](docs/Action.md)
 - [TrelloRestApi.ActionData](docs/ActionData.md)
 - [TrelloRestApi.ActionDataBoard](docs/ActionDataBoard.md)
 - [TrelloRestApi.ActionDataCard](docs/ActionDataCard.md)
 - [TrelloRestApi.ActionDataList](docs/ActionDataList.md)
 - [TrelloRestApi.ActionDisplay](docs/ActionDisplay.md)
 - [TrelloRestApi.ActionDisplayEntities](docs/ActionDisplayEntities.md)
 - [TrelloRestApi.ActionDisplayEntitiesCard](docs/ActionDisplayEntitiesCard.md)
 - [TrelloRestApi.ActionDisplayEntitiesComment](docs/ActionDisplayEntitiesComment.md)
 - [TrelloRestApi.ActionDisplayEntitiesContextOn](docs/ActionDisplayEntitiesContextOn.md)
 - [TrelloRestApi.ActionDisplayEntitiesMemberCreator](docs/ActionDisplayEntitiesMemberCreator.md)
 - [TrelloRestApi.ActionFields](docs/ActionFields.md)
 - [TrelloRestApi.ActionLimits](docs/ActionLimits.md)
 - [TrelloRestApi.ActionLimitsReactions](docs/ActionLimitsReactions.md)
 - [TrelloRestApi.ActionLimitsReactionsPerAction](docs/ActionLimitsReactionsPerAction.md)
 - [TrelloRestApi.ActionMemberCreator](docs/ActionMemberCreator.md)
 - [TrelloRestApi.Attachment](docs/Attachment.md)
 - [TrelloRestApi.AttachmentFields](docs/AttachmentFields.md)
 - [TrelloRestApi.Board](docs/Board.md)
 - [TrelloRestApi.BoardBackground](docs/BoardBackground.md)
 - [TrelloRestApi.BoardFields](docs/BoardFields.md)
 - [TrelloRestApi.BoardLabelNames](docs/BoardLabelNames.md)
 - [TrelloRestApi.BoardStars](docs/BoardStars.md)
 - [TrelloRestApi.CFValue](docs/CFValue.md)
 - [TrelloRestApi.Card](docs/Card.md)
 - [TrelloRestApi.CardBadges](docs/CardBadges.md)
 - [TrelloRestApi.CardBadgesAttachmentsByType](docs/CardBadgesAttachmentsByType.md)
 - [TrelloRestApi.CardBadgesAttachmentsByTypeTrello](docs/CardBadgesAttachmentsByTypeTrello.md)
 - [TrelloRestApi.CardCover](docs/CardCover.md)
 - [TrelloRestApi.CardDescData](docs/CardDescData.md)
 - [TrelloRestApi.CardFields](docs/CardFields.md)
 - [TrelloRestApi.CardsIdValue](docs/CardsIdValue.md)
 - [TrelloRestApi.CheckItem](docs/CheckItem.md)
 - [TrelloRestApi.Checklist](docs/Checklist.md)
 - [TrelloRestApi.Color](docs/Color.md)
 - [TrelloRestApi.Cover](docs/Cover.md)
 - [TrelloRestApi.CustomEmoji](docs/CustomEmoji.md)
 - [TrelloRestApi.CustomField](docs/CustomField.md)
 - [TrelloRestApi.CustomFieldDisplay](docs/CustomFieldDisplay.md)
 - [TrelloRestApi.CustomFieldDisplayOptions](docs/CustomFieldDisplayOptions.md)
 - [TrelloRestApi.CustomFieldDisplayValue](docs/CustomFieldDisplayValue.md)
 - [TrelloRestApi.CustomFieldItemValue](docs/CustomFieldItemValue.md)
 - [TrelloRestApi.CustomFieldItems](docs/CustomFieldItems.md)
 - [TrelloRestApi.CustomFieldItemsValue](docs/CustomFieldItemsValue.md)
 - [TrelloRestApi.CustomSticker](docs/CustomSticker.md)
 - [TrelloRestApi.CustomStickerScaled](docs/CustomStickerScaled.md)
 - [TrelloRestApi.Emoji](docs/Emoji.md)
 - [TrelloRestApi.EmojiTrello](docs/EmojiTrello.md)
 - [TrelloRestApi.Enterprise](docs/Enterprise.md)
 - [TrelloRestApi.EnterpriseIdp](docs/EnterpriseIdp.md)
 - [TrelloRestApi.EnterpriseLicenses](docs/EnterpriseLicenses.md)
 - [TrelloRestApi.EnterpriseOrganizationPrefs](docs/EnterpriseOrganizationPrefs.md)
 - [TrelloRestApi.EnterprisePrefs](docs/EnterprisePrefs.md)
 - [TrelloRestApi.EnterprisePrefsSignup](docs/EnterprisePrefsSignup.md)
 - [TrelloRestApi.Error](docs/Error.md)
 - [TrelloRestApi.ExportStatus](docs/ExportStatus.md)
 - [TrelloRestApi.InlineObject](docs/InlineObject.md)
 - [TrelloRestApi.InlineObject1](docs/InlineObject1.md)
 - [TrelloRestApi.InlineObject2](docs/InlineObject2.md)
 - [TrelloRestApi.InlineObject3](docs/InlineObject3.md)
 - [TrelloRestApi.InlineObject4](docs/InlineObject4.md)
 - [TrelloRestApi.InlineObject5](docs/InlineObject5.md)
 - [TrelloRestApi.Label](docs/Label.md)
 - [TrelloRestApi.Limits](docs/Limits.md)
 - [TrelloRestApi.LimitsAttachments](docs/LimitsAttachments.md)
 - [TrelloRestApi.LimitsObject](docs/LimitsObject.md)
 - [TrelloRestApi.List](docs/List.md)
 - [TrelloRestApi.ListFields](docs/ListFields.md)
 - [TrelloRestApi.Member](docs/Member.md)
 - [TrelloRestApi.MemberFields](docs/MemberFields.md)
 - [TrelloRestApi.MemberMarketingOptIn](docs/MemberMarketingOptIn.md)
 - [TrelloRestApi.MemberMessagesDismissed](docs/MemberMessagesDismissed.md)
 - [TrelloRestApi.MemberPrefs](docs/MemberPrefs.md)
 - [TrelloRestApi.MemberPrefsPrivacy](docs/MemberPrefsPrivacy.md)
 - [TrelloRestApi.MemberPrefsTimezoneInfo](docs/MemberPrefsTimezoneInfo.md)
 - [TrelloRestApi.MemberPrefsTwoFactor](docs/MemberPrefsTwoFactor.md)
 - [TrelloRestApi.Memberships](docs/Memberships.md)
 - [TrelloRestApi.ModelExport](docs/ModelExport.md)
 - [TrelloRestApi.Notification](docs/Notification.md)
 - [TrelloRestApi.NotificationFields](docs/NotificationFields.md)
 - [TrelloRestApi.Organization](docs/Organization.md)
 - [TrelloRestApi.OrganizationFields](docs/OrganizationFields.md)
 - [TrelloRestApi.Plugin](docs/Plugin.md)
 - [TrelloRestApi.PluginData](docs/PluginData.md)
 - [TrelloRestApi.PluginListing](docs/PluginListing.md)
 - [TrelloRestApi.PosStringOrNumber](docs/PosStringOrNumber.md)
 - [TrelloRestApi.Prefs](docs/Prefs.md)
 - [TrelloRestApi.SavedSearch](docs/SavedSearch.md)
 - [TrelloRestApi.Tag](docs/Tag.md)
 - [TrelloRestApi.Token](docs/Token.md)
 - [TrelloRestApi.TokenFields](docs/TokenFields.md)
 - [TrelloRestApi.TokenPermission](docs/TokenPermission.md)
 - [TrelloRestApi.ViewFilter](docs/ViewFilter.md)
 - [TrelloRestApi.Webhook](docs/Webhook.md)


## Documentation for Authorization



### APIKey


- **Type**: API key
- **API key parameter name**: key
- **Location**: URL query string



### APIToken


- **Type**: API key
- **API key parameter name**: token
- **Location**: URL query string

## Fully generated ⚙️

This library is fully generated from OpenAPI definitions files : 
- [trello/swagger.v3.json](https://developer.atlassian.com/cloud/trello/swagger.v3.json)
