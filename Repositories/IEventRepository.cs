using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using Koi.Models;

namespace Koi.Repositories
{
    public interface IEventRepository
    {
        List<Event> GetAll();
        Event GetById(int id);
        List<Event> GetByUserId(string firebaseId);
        public void Add(Event evt);
        public void Delete(int EventId);
        public void Edit(Event evt);

    }
}
