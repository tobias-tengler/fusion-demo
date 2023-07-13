#!/bin/zsh

SUBGRAPH_PATH=./Accounts
SUBGRAPH_NAME=accounts

VERSION="$1"
TAG=$SUBGRAPH_NAME-$VERSION
STAGE=dev
API_ID=QXBpCmdlNjAxYjU3YmQ2NWM0MzE5YjBjMTdkMzMwMmMwYmQwNg==

trap "echo Something went wrong && dotnet barista fusion-configuration publish cancel && exit 1" ERR

dotnet run --project ./Accounts/Demo.Accounts.csproj -- schema export --output schema.graphql

dotnet fusion subgraph pack -w ./Accounts

dotnet barista fusion-configuration publish begin --tag $TAG --api-id $API_ID --subgraph-name $SUBGRAPH_NAME --stage $STAGE

dotnet barista fusion-configuration publish start

dotnet barista fusion-configuration download --api-id $API_ID --stage $STAGE --output-file ./gateway.fgp

dotnet fusion compose -p ./gateway.fgp -s "$SUBGRAPH_PATH" --enable-nodes

dotnet barista fusion-configuration publish validate --configuration gateway.fgp

# deploy subgraph

dotnet barista fusion-configuration publish commit --configuration ./gateway.fgp