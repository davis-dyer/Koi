﻿using Koi.Models;
using System.Collections.Generic;

namespace Koi.Repositories
{
    public interface IUserRepository
    {
        void Add(User user);
        void Delete(int id);
        List<User> GetAll();
        User GetById(int id);
        void Update(User user);
        public User GetByFirebaseUserId(string firebaseUserId);
    }
}
