using System;
using Domain;
using MediatR;
using Persistance;

namespace Application.Activities.Command;

public class CreateActivity
{
    public class Command : IRequest<string>
    {
        public required Activity activity { get; set; }
    }
    public class Handler(AppDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            context.Activities.Add(request.activity);

            await context.SaveChangesAsync(cancellationToken);

            return request.activity.Id;
        }
    }
}
