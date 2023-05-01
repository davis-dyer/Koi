using System.ComponentModel.DataAnnotations;

namespace Koi.Models
{
    public class Category
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Type { get; set; }
    }
}
