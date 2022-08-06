using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.DTO.Trail;
using backend.Models;

namespace backend.Services.TrailService
{
    public interface ITrailService
    {
        Task<ServiceResponse<List<Trail>>> GetAllTrails();
        Task<ServiceResponse<List<Trail>>> AddTrail(AddTrailDto newTrail);
        Task<ServiceResponse<List<Trail>>> DeleteTrail(int id);

    }
}