using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System;
using System.Security.Claims;
using Koi.Models;
using Koi.Repositories;

namespace Koi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IEventRepository _eventRepository;
        private readonly IUserRepository _userRepository;
        public EventController(IEventRepository postRepository, IUserRepository userProfileRepository)
        {
            _eventRepository = postRepository;
            _userRepository = userProfileRepository;
        }

        [Authorize]
        [HttpGet]
        public IActionResult Get()
        {

            return Ok(_eventRepository.GetAll());
        }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetEventById(int id)
        {
            var post = _eventRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [Authorize]
        [HttpPost]
        public IActionResult Post(Event evt)
        {
            UserProfile user = GetCurrentUserProfile();

            evt.CreatedAt = DateTime.Now;
            evt.UserId = user.Id;
            _eventRepository.Add(evt);
            return CreatedAtAction(
                nameof(GetEventById), new { evt.Id }, evt);
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepository.GetByFirebaseUserId(firebaseUserId);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Event evt)
        {
            if (id != evt.Id)
            {
                return BadRequest();
            }

            _eventRepository.Edit(evt);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _eventRepository.Delete(id);
            return NoContent();
        }
    }
}
