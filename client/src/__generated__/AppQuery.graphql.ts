/**
 * @generated SignedSource<<8427159d8ff12dff6e323d6eacecd318>>
 * @relayHash 0654c4058704cb76fea6e0005e9b1413
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 0654c4058704cb76fea6e0005e9b1413

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppQuery$variables = {};
export type AppQuery$data = {
  readonly field: string | null;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "field",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "0654c4058704cb76fea6e0005e9b1413",
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "7ed9831cb3ba9beff697a4f31090f476";

export default node;
