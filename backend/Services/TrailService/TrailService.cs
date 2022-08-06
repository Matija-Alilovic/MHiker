using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using backend.Data;
using backend.DTO.Trail;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services.TrailService
{
    public class TrailService : ITrailService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public TrailService(DataContext context, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
        }

        private int GetUserId() => int.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));

        public async Task<ServiceResponse<List<Trail>>> GetAllTrails()
        {
            var response = new ServiceResponse<List<Trail>>();

            var dbTrails = await _context.Trails
            .Where(x => x.User.Id == GetUserId())
            .ToListAsync();

            response.Data = dbTrails;
            response.Message = "Success";

            return response;
        }

        public async Task<ServiceResponse<List<Trail>>> AddTrail(AddTrailDto newTrail)
        {
            var response = new ServiceResponse<List<Trail>>();

            Trail trail = _mapper.Map<Trail>(newTrail);
            trail.User = await _context.Users.FirstOrDefaultAsync(x => x.Id == GetUserId());

            await _context.Trails.AddAsync(trail);
            await _context.SaveChangesAsync();

            response.Data = await _context.Trails.ToListAsync();
            response.Success = true;

            return response;
        }

        public async Task<ServiceResponse<List<Trail>>> DeleteTrail(int id)
        {
            var response = new ServiceResponse<List<Trail>>();

            try
            {
                Trail trail = await _context.Trails.FirstOrDefaultAsync(x => x.Id == id);

                _context.Trails.Remove(trail);
                await _context.SaveChangesAsync();

                response.Success = true;
                response.Message = "Deleted Sucessfully";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }

            return response;
        }
    }
}