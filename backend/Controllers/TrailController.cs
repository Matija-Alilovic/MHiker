using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Services.TrailService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using backend.Services;
using backend.Models;
using backend.DTO.Trail;
using System.Security.Claims;

namespace backend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class TrailController : ControllerBase
    {
        private readonly ITrailService _service;

        public TrailController(ITrailService service)
        {
            _service = service;
        }

        [HttpGet("GetAllByUser")]
        public async Task<ActionResult<ServiceResponse<List<Trail>>>> Get()
        {
            return Ok(await _service.GetAllTrailsByUser());
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<Trail>>>> AddTrail(AddTrailDto newTrail)
        {
            return Ok(await _service.AddTrail(newTrail));
        }

        [HttpDelete]
        public async Task<ActionResult<ServiceResponse<List<Trail>>>> DeleteTrail(int id)
        {
            return Ok(await _service.DeleteTrail(id));
        }
    }
}