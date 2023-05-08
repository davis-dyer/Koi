using Koi.Models;
using System.Collections.Generic;

namespace Koi.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAll();
    }
}
