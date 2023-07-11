CLIENT_ID=Q2xpZW50Cmc1ZjFkOWM2MDVlNzI0MWU2YTc5YzZhNjRiN2FjMzdhNA==
OPERATIONS_FILE=./operations.json
VERSION=v1
STAGE=dev

dotnet barista client validate --client-id $CLIENT_ID --operations-file "$OPERATIONS_FILE" --stage $STAGE

dotnet barista client upload --client-id $CLIENT_ID --operations-file "$OPERATIONS_FILE" --tag $VERSION

dotnet barista client publish --client-id $CLIENT_ID --stage $STAGE --tag $VERSION

# todo: why does relay operations.json need to exist? 
# todo: persisted queries aren't updated, when the file is deleted without changes