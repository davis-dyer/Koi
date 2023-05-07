using Koi.Models;
using System.Collections.Generic;

namespace Koi.Repositories
{
    public interface IUserRepository
    {
        void Add(UserProfile user);
        void Delete(int id);
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
        void Update(UserProfile user);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
    }
}
