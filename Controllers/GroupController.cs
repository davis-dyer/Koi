using Koi.Models;
using Koi.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System;

namespace Koi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupController : ControllerBase
    {
            private readonly IGroupRepository _groupRepository;
            private readonly IUserRepository _userRepository;
            public GroupController(IGroupRepository groupRepository, IUserRepository userProfileRepository)
            {
                _groupRepository = groupRepository;
                _userRepository = userProfileRepository;
            }

            [Authorize]
            [HttpGet]
            public IActionResult Get()
            {

                return Ok(_groupRepository.GetAll());
            }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetGroupById(int id)
        {
            var group = _groupRepository.GetById(id);
            if (group == null)
            {
                return NotFound();
            }
            return Ok(group);
        }

        [Authorize]
            [HttpPost]
            public IActionResult Post(Group group)
            {
                UserProfile userprof = GetCurrentUserProfile();

                group.UserId = userprof.Id;
                _groupRepository.Add(group);
                return CreatedAtAction(
                    nameof(GetGroupById), new { group.Id }, group);
            }

            private UserProfile GetCurrentUserProfile()
            {
                var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return _userRepository.GetByFirebaseUserId(firebaseUserId);
            }

            [HttpPut("{id}")]
            public IActionResult Put(int id, Group group)
            {
                if (id != group.Id)
                {
                    return BadRequest();
                }

                _groupRepository.Edit(group);
                return NoContent();
            }

            [HttpDelete("{id}")]
            public IActionResult Delete(int id)
            {
                _groupRepository.Delete(id);
                return NoContent();
            }
    }
}
