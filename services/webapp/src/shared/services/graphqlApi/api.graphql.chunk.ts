export default "schema {\n  query: Query\n  mutation: ApiMutation\n  subscription: ApiSubscription\n}\n\ntype ApiMutation {\n  updateCurrentUser(input: UpdateCurrentUserMutationInput!): UpdateCurrentUserMutationPayload\n  tokenAuth(input: ObtainTokenMutationInput!): ObtainTokenMutationPayload\n  signUp(input: SingUpMutationInput!): SingUpMutationPayload\n  updateNotification(input: UpdateNotificationMutationInput!): UpdateNotificationMutationPayload\n  markReadAllNotifications(input: MarkReadAllNotificationsMutationInput!): MarkReadAllNotificationsMutationPayload\n  createCrudDemoItem(input: CreateCrudDemoItemMutationInput!): CreateCrudDemoItemMutationPayload\n  updateCrudDemoItem(input: UpdateCrudDemoItemMutationInput!): UpdateCrudDemoItemMutationPayload\n  deleteCrudDemoItem(input: DeleteCrudDemoItemMutationInput!): DeleteCrudDemoItemMutationPayload\n  createDocumentDemoItem(input: CreateDocumentDemoItemMutationInput!): CreateDocumentDemoItemMutationPayload\n  deleteDocumentDemoItem(input: DeleteDocumentDemoItemMutationInput!): DeleteDocumentDemoItemMutationPayload\n  createFavoriteContentfulDemoItem(input: CreateFavoriteContentfulDemoItemMutationInput!): CreateFavoriteContentfulDemoItemMutationPayload\n  deleteFavoriteContentfulDemoItem(input: DeleteFavoriteContentfulDemoItemMutationInput!): DeleteFavoriteContentfulDemoItemMutationPayload\n}\n\ntype ApiSubscription {\n  notificationCreated(before: String, after: String, first: Int, last: Int): NotificationConnection\n}\n\ntype ContentfulDemoItemFavoriteConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [ContentfulDemoItemFavoriteEdge]!\n}\n\n\"\"\"A Relay edge containing a `ContentfulDemoItemFavorite` and its cursor.\"\"\"\ntype ContentfulDemoItemFavoriteEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: ContentfulDemoItemFavoriteType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype ContentfulDemoItemFavoriteType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  item: ContentfulDemoItemType!\n  user: CurrentUserType!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype ContentfulDemoItemFavoriteTypeConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [ContentfulDemoItemFavoriteTypeEdge]!\n}\n\n\"\"\"\nA Relay edge containing a `ContentfulDemoItemFavoriteType` and its cursor.\n\"\"\"\ntype ContentfulDemoItemFavoriteTypeEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: ContentfulDemoItemFavoriteType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype ContentfulDemoItemType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  fields: JSONString!\n  isPublished: Boolean!\n  contentfuldemoitemfavoriteSet(offset: Int, before: String, after: String, first: Int, last: Int): ContentfulDemoItemFavoriteTypeConnection!\n  pk: String\n}\n\ninput CreateCrudDemoItemMutationInput {\n  name: String!\n  createdBy: String\n  clientMutationId: String\n}\n\ntype CreateCrudDemoItemMutationPayload {\n  crudDemoItem: CrudDemoItemType\n  crudDemoItemEdge: CrudDemoItemEdge\n  clientMutationId: String\n}\n\ninput CreateDocumentDemoItemMutationInput {\n  file: Upload\n  createdBy: String\n  clientMutationId: String\n}\n\ntype CreateDocumentDemoItemMutationPayload {\n  documentDemoItem: DocumentDemoItemType\n  documentDemoItemEdge: DocumentDemoItemEdge\n  clientMutationId: String\n}\n\ninput CreateFavoriteContentfulDemoItemMutationInput {\n  item: String!\n  user: String\n  clientMutationId: String\n}\n\ntype CreateFavoriteContentfulDemoItemMutationPayload {\n  contentfulDemoItemFavorite: ContentfulDemoItemFavoriteType\n  contentfulDemoItemFavoriteEdge: ContentfulDemoItemFavoriteEdge\n  clientMutationId: String\n}\n\ntype CrudDemoItemConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [CrudDemoItemEdge]!\n}\n\n\"\"\"A Relay edge containing a `CrudDemoItem` and its cursor.\"\"\"\ntype CrudDemoItemEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: CrudDemoItemType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype CrudDemoItemType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  name: String!\n  createdBy: CurrentUserType\n}\n\n\"\"\"A Relay edge containing a `CurrentUser` and its cursor.\"\"\"\ntype CurrentUserEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: UserProfileType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype CurrentUserType {\n  id: ID!\n  email: String!\n  firstName: String\n  lastName: String\n  roles: [String]\n  avatar: String\n}\n\n\"\"\"\nThe `DateTime` scalar type represents a DateTime\nvalue as specified by\n[iso8601](https://en.wikipedia.org/wiki/ISO_8601).\n\"\"\"\nscalar DateTime\n\n\"\"\"The `Decimal` scalar type represents a python Decimal.\"\"\"\nscalar Decimal\n\ninput DeleteCrudDemoItemMutationInput {\n  id: String\n  clientMutationId: String\n}\n\ntype DeleteCrudDemoItemMutationPayload {\n  deletedIds: [ID]\n  clientMutationId: String\n}\n\ninput DeleteDocumentDemoItemMutationInput {\n  id: String\n  clientMutationId: String\n}\n\ntype DeleteDocumentDemoItemMutationPayload {\n  deletedIds: [ID]\n  clientMutationId: String\n}\n\ninput DeleteFavoriteContentfulDemoItemMutationInput {\n  item: String\n  clientMutationId: String\n}\n\ntype DeleteFavoriteContentfulDemoItemMutationPayload {\n  deletedIds: [ID]\n  clientMutationId: String\n}\n\ntype DocumentDemoItemConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [DocumentDemoItemEdge]!\n}\n\n\"\"\"A Relay edge containing a `DocumentDemoItem` and its cursor.\"\"\"\ntype DocumentDemoItemEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: DocumentDemoItemType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype DocumentDemoItemType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  file: FileFieldType\n  createdBy: CurrentUserType\n  createdAt: DateTime!\n}\n\ntype FileFieldType {\n  url: String\n  name: String\n}\n\n\"\"\"\nThe `GenericScalar` scalar type represents a generic\nGraphQL scalar value that could be:\nString, Boolean, Int, Float, List or Object.\n\"\"\"\nscalar GenericScalar\n\n\"\"\"\nAllows use of a JSON String for input / output from the GraphQL schema.\n\nUse of this type is *not recommended* as you lose the benefits of having a defined, static\nschema (one of the key benefits of GraphQL).\n\"\"\"\nscalar JSONString\n\ninput MarkReadAllNotificationsMutationInput {\n  clientMutationId: String\n}\n\ntype MarkReadAllNotificationsMutationPayload {\n  ok: Boolean\n  clientMutationId: String\n}\n\n\"\"\"An object with an ID\"\"\"\ninterface Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n}\n\ntype NotificationConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [NotificationEdge]!\n}\n\n\"\"\"A Relay edge containing a `Notification` and its cursor.\"\"\"\ntype NotificationEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: NotificationType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype NotificationType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  user: CurrentUserType!\n  type: String!\n  createdAt: DateTime!\n  readAt: DateTime\n  data: GenericScalar\n}\n\ninput ObtainTokenMutationInput {\n  email: String!\n  password: String!\n  clientMutationId: String\n}\n\ntype ObtainTokenMutationPayload {\n  access: String\n  refresh: String\n  clientMutationId: String\n}\n\n\"\"\"\nThe Relay compliant `PageInfo` type, containing data necessary to paginate this connection.\n\"\"\"\ntype PageInfo {\n  \"\"\"When paginating forwards, are there more items?\"\"\"\n  hasNextPage: Boolean!\n\n  \"\"\"When paginating backwards, are there more items?\"\"\"\n  hasPreviousPage: Boolean!\n\n  \"\"\"When paginating backwards, the cursor to continue.\"\"\"\n  startCursor: String\n\n  \"\"\"When paginating forwards, the cursor to continue.\"\"\"\n  endCursor: String\n}\n\n\"\"\"An enumeration.\"\"\"\nenum PriceBillingScheme {\n  \"\"\"Per-unit\"\"\"\n  PER_UNIT\n\n  \"\"\"Tiered\"\"\"\n  TIERED\n}\n\n\"\"\"An enumeration.\"\"\"\nenum PriceTiersMode {\n  \"\"\"Graduated\"\"\"\n  GRADUATED\n\n  \"\"\"Volume-based\"\"\"\n  VOLUME\n}\n\n\"\"\"An enumeration.\"\"\"\nenum PriceType {\n  \"\"\"One-time\"\"\"\n  ONE_TIME\n\n  \"\"\"Recurring\"\"\"\n  RECURRING\n}\n\n\"\"\"An enumeration.\"\"\"\nenum ProductType {\n  \"\"\"Good\"\"\"\n  GOOD\n\n  \"\"\"Service\"\"\"\n  SERVICE\n}\n\ntype Query {\n  allSubscriptionPlans(before: String, after: String, first: Int, last: Int): SubscriptionPlanConnection\n  currentUser: CurrentUserType\n  hasUnreadNotifications: Boolean\n  allNotifications(before: String, after: String, first: Int, last: Int): NotificationConnection\n  crudDemoItem(\n    \"\"\"The ID of the object\"\"\"\n    id: ID!\n  ): CrudDemoItemType\n  allCrudDemoItems(before: String, after: String, first: Int, last: Int): CrudDemoItemConnection\n  allContentfulDemoItemFavorites(before: String, after: String, first: Int, last: Int): ContentfulDemoItemFavoriteConnection\n  allDocumentDemoItems(before: String, after: String, first: Int, last: Int): DocumentDemoItemConnection\n  node(\n    \"\"\"The ID of the object\"\"\"\n    id: ID!\n  ): Node\n}\n\ninput SingUpMutationInput {\n  id: String\n  email: String!\n  password: String!\n  clientMutationId: String\n}\n\ntype SingUpMutationPayload {\n  id: String\n  email: String\n  access: String\n  refresh: String\n  clientMutationId: String\n}\n\ntype SubscriptionItemProductType implements Node {\n  djstripeCreated: DateTime!\n  djstripeUpdated: DateTime!\n  djstripeId: ID!\n\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n\n  \"\"\"\n  Null here indicates that the livemode status is unknown or was previously\n  unrecorded. Otherwise, this field indicates whether this record comes from\n  Stripe test mode or live mode operation.\n  \"\"\"\n  livemode: Boolean\n\n  \"\"\"The datetime this object was created in stripe.\"\"\"\n  created: DateTime\n\n  \"\"\"\n  A set of key/value pairs that you can attach to an object. It can be useful\n  for storing additional information about an object in a structured format.\n  \"\"\"\n  metadata: String\n\n  \"\"\"A description of this object.\"\"\"\n  description: String\n\n  \"\"\"\n  The product's name, meant to be displayable to the customer. Applicable to both `service` and `good` types.\n  \"\"\"\n  name: String!\n\n  \"\"\"\n  The type of the product. The product is either of type `good`, which is\n  eligible for use with Orders and SKUs, or `service`, which is eligible for use\n  with Subscriptions and Plans.\n  \"\"\"\n  type: ProductType!\n\n  \"\"\"\n  Whether the product is currently available for purchase. Only applicable to products of `type=good`.\n  \"\"\"\n  active: Boolean\n\n  \"\"\"\n  A list of up to 5 attributes that each SKU can provide values for (e.g.,\n  `[\"color\", \"size\"]`). Only applicable to products of `type=good`.\n  \"\"\"\n  attributes: String\n\n  \"\"\"\n  A short one-line description of the product, meant to be displayableto the\n  customer. Only applicable to products of `type=good`.\n  \"\"\"\n  caption: String!\n\n  \"\"\"\n  An array of connect application identifiers that cannot purchase this product. Only applicable to products of `type=good`.\n  \"\"\"\n  deactivateOn: String\n\n  \"\"\"\n  A list of up to 8 URLs of images for this product, meant to be displayable to\n  the customer. Only applicable to products of `type=good`.\n  \"\"\"\n  images: String\n\n  \"\"\"\n  The dimensions of this product for shipping purposes. A SKU associated with\n  this product can override this value by having its own `package_dimensions`.\n  Only applicable to products of `type=good`.\n  \"\"\"\n  packageDimensions: String\n\n  \"\"\"\n  Whether this product is a shipped good. Only applicable to products of `type=good`.\n  \"\"\"\n  shippable: Boolean\n\n  \"\"\"\n  A URL of a publicly-accessible webpage for this product. Only applicable to products of `type=good`.\n  \"\"\"\n  url: String\n\n  \"\"\"\n  Extra information about a product which will appear on your customer's credit\n  card statement. In the case that multiple products are billed at once, the\n  first statement descriptor will be used. Only available on products of\n  type=`service`.\n  \"\"\"\n  statementDescriptor: String!\n  unitLabel: String!\n\n  \"\"\"The product this price is associated with.\"\"\"\n  prices(offset: Int, before: String, after: String, first: Int, last: Int): SubscriptionPlanTypeConnection!\n  pk: String\n}\n\ntype SubscriptionPlanConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [SubscriptionPlanEdge]!\n}\n\n\"\"\"A Relay edge containing a `SubscriptionPlan` and its cursor.\"\"\"\ntype SubscriptionPlanEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: SubscriptionPlanType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype SubscriptionPlanType implements Node {\n  djstripeCreated: DateTime!\n  djstripeUpdated: DateTime!\n  djstripeId: ID!\n\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n\n  \"\"\"\n  Null here indicates that the livemode status is unknown or was previously\n  unrecorded. Otherwise, this field indicates whether this record comes from\n  Stripe test mode or live mode operation.\n  \"\"\"\n  livemode: Boolean\n\n  \"\"\"The datetime this object was created in stripe.\"\"\"\n  created: DateTime\n\n  \"\"\"\n  A set of key/value pairs that you can attach to an object. It can be useful\n  for storing additional information about an object in a structured format.\n  \"\"\"\n  metadata: String\n\n  \"\"\"A description of this object.\"\"\"\n  description: String\n\n  \"\"\"Whether the price can be used for new purchases.\"\"\"\n  active: Boolean!\n\n  \"\"\"Three-letter ISO currency code\"\"\"\n  currency: String!\n\n  \"\"\"A brief description of the plan, hidden from customers.\"\"\"\n  nickname: String!\n\n  \"\"\"The product this price is associated with.\"\"\"\n  product: SubscriptionItemProductType!\n\n  \"\"\"\n  The recurring components of a price such as `interval` and `usage_type`.\n  \"\"\"\n  recurring: String\n\n  \"\"\"\n  Whether the price is for a one-time purchase or a recurring (subscription) purchase.\n  \"\"\"\n  type: PriceType!\n\n  \"\"\"\n  The unit amount in cents to be charged, represented as a whole integer if\n  possible. Null if a sub-cent precision is required.\n  \"\"\"\n  unitAmount: Int\n\n  \"\"\"\n  The unit amount in cents to be charged, represented as a decimal string with at most 12 decimal places.\n  \"\"\"\n  unitAmountDecimal: Decimal\n\n  \"\"\"\n  Describes how to compute the price per period. Either `per_unit` or `tiered`.\n  `per_unit` indicates that the fixed amount (specified in `unit_amount` or\n  `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with\n  `usage_type=licensed`), or per unit of total usage (for prices with\n  `usage_type=metered`). `tiered` indicates that the unit pricing will be\n  computed using a tiering strategy as defined using the `tiers` and\n  `tiers_mode` attributes.\n  \"\"\"\n  billingScheme: PriceBillingScheme\n\n  \"\"\"A lookup key used to retrieve prices dynamically from a static string.\"\"\"\n  lookupKey: String\n\n  \"\"\"\n  Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`.\n  \"\"\"\n  tiers: String\n\n  \"\"\"\n  Defines if the tiering price should be `graduated` or `volume` based. In\n  `volume`-based tiering, the maximum quantity within a period determines the\n  per unit price, in `graduated` tiering pricing can successively change as the\n  quantity grows.\n  \"\"\"\n  tiersMode: PriceTiersMode\n\n  \"\"\"\n  Apply a transformation to the reported usage or set quantity before computing\n  the amount billed. Cannot be combined with `tiers`.\n  \"\"\"\n  transformQuantity: String\n  pk: String\n}\n\ntype SubscriptionPlanTypeConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [SubscriptionPlanTypeEdge]!\n}\n\n\"\"\"A Relay edge containing a `SubscriptionPlanType` and its cursor.\"\"\"\ntype SubscriptionPlanTypeEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: SubscriptionPlanType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ninput UpdateCrudDemoItemMutationInput {\n  name: String!\n  createdBy: String\n  id: ID!\n  clientMutationId: String\n}\n\ntype UpdateCrudDemoItemMutationPayload {\n  crudDemoItem: CrudDemoItemType\n  crudDemoItemEdge: CrudDemoItemEdge\n  clientMutationId: String\n}\n\ninput UpdateCurrentUserMutationInput {\n  firstName: String\n  lastName: String\n  avatar: Upload\n  clientMutationId: String\n}\n\ntype UpdateCurrentUserMutationPayload {\n  userProfile: UserProfileType\n  userProfileEdge: CurrentUserEdge\n  clientMutationId: String\n}\n\ninput UpdateNotificationMutationInput {\n  isRead: Boolean\n  id: ID!\n  clientMutationId: String\n}\n\ntype UpdateNotificationMutationPayload {\n  notification: NotificationType\n  notificationEdge: NotificationEdge\n  hasUnreadNotifications: Boolean\n  clientMutationId: String\n}\n\n\"\"\"\nCreate scalar that ignores normal serialization/deserialization, since\nthat will be handled by the multipart request spec\n\"\"\"\nscalar Upload\n\ntype UserProfileType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  user: CurrentUserType!\n  firstName: String!\n  lastName: String!\n}\n\n"