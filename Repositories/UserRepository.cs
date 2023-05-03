using Koi.Repositories;
using Koi.Utils;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using Koi.Models;

namespace Koi.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }
        public List<User> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, FName, LName, Email, ZipCode, CreateDateTime
                                        FROM User";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var users = new List<User>();
                        while (reader.Read())
                        {
                            users.Add(new User()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                FName = DbUtils.GetString(reader, "FName"),
                                LName = DbUtils.GetString(reader, "LName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                ZipCode = DbUtils.GetString(reader, "ZipCode"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime")
                            });
                        }
                        return users;
                    }
                }
            }
        }

        public User GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, FName, LName, Email, ZipCode, CreateDateTime
                                        FROM User
                                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        User user = null;
                        if (reader.Read())
                        {
                            user = new User()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                FName = DbUtils.GetString(reader, "FName"),
                                LName = DbUtils.GetString(reader, "LName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                ZipCode = DbUtils.GetString(reader, "ZipCode"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime")
                            };
                        }
                        return user;
                    }
                }
            }
        }

        public void Add(User user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO User (FName, LName, Email, ZipCode, CreateDateTime, FirebaseUserId)
                                        OUTPUT INSERTED.ID
                                        VALUES (@fname, @lname, @email, @zipcode, @createdatetime, @firebaseUserId)";

                    DbUtils.AddParameter(cmd, "@fname", user.FName);
                    DbUtils.AddParameter(cmd, "@lname", user.LName);
                    DbUtils.AddParameter(cmd, "@email", user.Email);
                    DbUtils.AddParameter(cmd, "@zipcode", user.ZipCode);
                    DbUtils.AddParameter(cmd, "@createdatetime", user.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@firebaseUserId", user.FirebaseUserId);

                    user.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(User user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE User 
                                            SET FName = @fname,
                                            LName = @lname,
                                            Email = @email,
                                            ZipCode = @zipcode,
                                            CreateDateTime = @createdatetime
                                        WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@fname", user.FName);
                    DbUtils.AddParameter(cmd, "@lname", user.LName);
                    DbUtils.AddParameter(cmd, "@email", user.Email);
                    DbUtils.AddParameter(cmd, "@zipcode", user.ZipCode);
                    DbUtils.AddParameter(cmd, "@createdatetime", user.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@Id", user.Id);

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
                    cmd.CommandText = @"DELETE FROM Event WHERE UserId = @Id;
                                        DELETE FROM UserGroup WHERE UserId = @Id; 
                                        DELETE FROM User WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public User GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, FName, LName, Email, ZipCode, CreateDateTime, FirebaseUserId
                                        FROM User
                                        WHERE FirebaseUserId = @firebaseUserId";
                    DbUtils.AddParameter(cmd, "@firebaseUserId", firebaseUserId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        User user = null;
                        if (reader.Read())
                        {
                            user = new User()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                FName = DbUtils.GetString(reader, "FName"),
                                LName = DbUtils.GetString(reader, "LName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                ZipCode = DbUtils.GetString(reader, "ZipCode"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                                FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId")
                            };
                        }
                        return user;
                    }
                }
            }
        }
    }
}
