using System;
using System.Diagnostics;
using AutoMapper;

namespace Application.Activities.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
    }
}
