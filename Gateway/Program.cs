using OpenTelemetry.Metrics;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;

var version = "1.2.0";
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

builder.Services.AddHttpClient();
builder.Services.AddWebSocketClient();

builder.Services
    .AddFusionGatewayServer()
    .UsePersistedQueryPipeline()
    .ConfigureFromCloud(b =>
    {
        b.ApiId = "QXBpCmdlNjAxYjU3YmQ2NWM0MzE5YjBjMTdkMzMwMmMwYmQwNg==";
        b.ApiKey = "7HJmkkfzUDGJdBEJw9gPaxKBNQQyuKJA4BTHXAai3KNBd73yxPLjOULwKE1CTfYh";
        b.Stage = "dev";
        b.EnablePersistedQueries = true;
    })
    .CoreBuilder
    .AddInstrumentation(o => o.RenameRootActivity = true);

builder.Services
    .AddOpenTelemetry()
    .ConfigureResource(b => b.AddService("Shop-Gateway", "Demo", version))
    .WithTracing(
        b =>
        {
            b.AddHttpClientInstrumentation();
            b.AddAspNetCoreInstrumentation();
            b.AddHotChocolateInstrumentation();
            b.AddOtlpExporter();
        })
    .WithMetrics(
        b =>
        {
            b.AddHttpClientInstrumentation();
            b.AddAspNetCoreInstrumentation();
            b.AddOtlpExporter();
        });

var app = builder.Build();

app.UseWebSockets();

app.UseCors(c => c.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

app.MapGraphQL();

app.RunWithGraphQLCommands(args);
