using System;
using System.ComponentModel.DataAnnotations;

namespace Koi.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public DateTime EventDate { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public int GroupId { get; set; }
        public int UserId { get; set; }
        public UserProfile User { get; set; }
    }
}
