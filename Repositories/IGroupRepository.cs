using Koi.Models;
using System.Collections.Generic;

namespace Koi.Repositories
{
    public interface IGroupRepository
    {
        List<Group> GetAll();
        Group GetById(int id);
        public void Add(Group group);
        public void Delete(int GroupId);
        public void Update(Group group);
    }
}
