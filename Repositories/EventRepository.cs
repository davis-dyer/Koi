using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Koi.Models;
using Koi.Utils;
using Koi.Repositories;
using Microsoft.Extensions.Hosting;

namespace Koi.Repositories
{
    public class EventRepository : BaseRepository, IEventRepository
    {
        public EventRepository(IConfiguration configuration) : base(configuration) { }

        public List<Event> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT e.Id, e.Title, e.Location, e.EventDate, e.Description, e.CreatedAt, e.GroupId, e.UserId,
                      u.FirebaseUserId, u.FName, u.LName, u.Email, u.CreateDateTime AS UserProfileDateCreated
                 FROM Event e
                      JOIN UserProfile u ON e.UserId = u.Id
                WHERE e.EventDate <= SYSDATETIME()
             ORDER BY e.EventDate DESC
            ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var events = new List<Event>();
                        while (reader.Read())
                        {
                            events.Add(new Event()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Location = DbUtils.GetString(reader, "Location"),
                                EventDate = DbUtils.GetDateTime(reader, "EventDate"),
                                Description = DbUtils.GetString(reader, "Description"),
                                CreatedAt = DbUtils.GetDateTime(reader, "CreatedAt"),
                                GroupId = DbUtils.GetInt(reader, "GroupId"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                User = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserId"),
                                    FirebaseUserId = DbUtils.GetString(reader, "FireBaseUserId"),
                                    LName = DbUtils.GetString(reader, "LName"),
                                    FName = DbUtils.GetString(reader, "FName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    CreateDateTime = DbUtils.GetDateTime(reader, "UserProfileDateCreated"),
                                },
                            });
                        }

                        return events;
                    }
                }
            }
        }



        public Event GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT e.Id, e.Title, e.Location, e.EventDate, e.Description, e.CreatedAt, e.GroupId, e.UserId,
                      u.FirebaseUserId, u.FName, u.LName, u.Email, u.CreateDateTime AS UserProfileDateCreated
                 FROM Event e
                      JOIN UserProfile u ON e.UserId = u.Id
                 WHERE p.Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Event evt = null;
                        if (reader.Read())
                        {
                            evt = new Event()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Location = DbUtils.GetString(reader, "Location"),
                                EventDate = DbUtils.GetDateTime(reader, "EventDate"),
                                Description = DbUtils.GetString(reader, "Description"),
                                CreatedAt = DbUtils.GetDateTime(reader, "CreatedAt"),
                                GroupId = DbUtils.GetInt(reader, "GroupId"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                User = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserId"), 
                                    FirebaseUserId = DbUtils.GetString(reader, "FireBaseUserId"),
                                    LName = DbUtils.GetString(reader, "LName"),
                                    FName = DbUtils.GetString(reader, "FName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    CreateDateTime = DbUtils.GetDateTime(reader, "UserProfileDateCreated"),
                                },
                            }; 
                        }

                        return evt;
                    }
                }
            }
        }


        public List<Event> GetByUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT e.Id, e.Title, e.Location, e.EventDate, e.Description, e.CreatedAt, e.GroupId, e.UserId,
                      u.FirebaseUserId, u.FName, u.LName, u.Email, u.CreateDateTime AS UserProfileDateCreated
                 FROM Event e
                      JOIN UserProfile u ON e.UserId = u.Id
                 WHERE e.CreatedAt <= SYSDATETIME() AND u.FireBaseUserId = @firebaseUserId
             ORDER BY e.CreatedAt DESC";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", firebaseUserId);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var events = new List<Event>();
                        while (reader.Read())
                        {
                            events.Add(new Event()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Location = DbUtils.GetString(reader, "Location"),
                                EventDate = DbUtils.GetDateTime(reader, "EventDate"),
                                Description = DbUtils.GetString(reader, "Description"),
                                CreatedAt = DbUtils.GetDateTime(reader, "CreatedAt"),
                                GroupId = DbUtils.GetInt(reader, "GroupId"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                User = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserId"),
                                    FirebaseUserId = DbUtils.GetString(reader, "FireBaseUserId"),
                                    LName = DbUtils.GetString(reader, "LName"),
                                    FName = DbUtils.GetString(reader, "FName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    CreateDateTime = DbUtils.GetDateTime(reader, "UserProfileDateCreated"),
                                },
                            });
                        }

                        return events;
                    }
                }
            }
        }

        public void Add(Event evt)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Event (
                        Title,
                        Location,
                        EventDate,
                        Description,
                        CreatedAt,
                        GroupId,
                        UserId
                        )
                        
                        OUTPUT INSERTED.ID
	                    
                        VALUES (
                        @Title,
                        @Location,
                        @EventDate,
                        @Description,
                        @CreatedAt,
                        @GroupId,
                        @UserId)
                    ";

                    DbUtils.AddParameter(cmd, "@Title", evt.Title);
                    DbUtils.AddParameter(cmd, "@Location", evt.Location);
                    DbUtils.AddParameter(cmd, "@EventDate", evt.EventDate);
                    DbUtils.AddParameter(cmd, "@Description", evt.Description);
                    DbUtils.AddParameter(cmd, "@CreatedAt", evt.CreatedAt);
                    DbUtils.AddParameter(cmd, "@GroupId", evt.GroupId);
                    DbUtils.AddParameter(cmd, "@UserId", evt.UserId);

                    evt.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Edit(Event evt)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE Event
                                       SET Title = @Title,
                                           EventDate = @EventDate,
                                           Description = @Description,
                                           CreatedAt = @CreatedAt,
                                           Location = @Location,
                                           GroupId = @GroupId,
                                           UserId = @UserId
                                       WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Title", evt.Title);
                    DbUtils.AddParameter(cmd, "@Location", evt.Location);
                    DbUtils.AddParameter(cmd, "@EventDate", evt.EventDate);
                    DbUtils.AddParameter(cmd, "@Description", evt.Description);
                    DbUtils.AddParameter(cmd, "@CreatedAt", evt.CreatedAt);
                    DbUtils.AddParameter(cmd, "@GroupId", evt.GroupId);
                    DbUtils.AddParameter(cmd, "@UserId", evt.UserId);
                    DbUtils.AddParameter(cmd, "@Id", evt.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Event WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
