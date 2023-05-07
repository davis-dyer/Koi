using Koi.Utils;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Koi.Models;
using System.Reflection.Emit;
using System.Reflection.PortableExecutable;

namespace Koi.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }
        public List<UserProfile> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, FName, LName, Email, ZipCode, CreateDateTime
                                        FROM UserProfile";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var users = new List<UserProfile>();
                        while (reader.Read())
                        {
                            users.Add(new UserProfile()
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

        public UserProfile GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, FName, LName, Email, ZipCode, CreateDateTime
                                        FROM UserProfile
                                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        UserProfile userProfile = null;
                        if (reader.Read())
                        {
                            userProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                FName = DbUtils.GetString(reader, "FName"),
                                LName = DbUtils.GetString(reader, "LName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                ZipCode = DbUtils.GetString(reader, "ZipCode"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime")
                            };
                        }
                        return userProfile;
                    }
                }
            }
        }

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO UserProfile (FName, LName, Email, ZipCode, CreateDateTime, FirebaseUserId)
                                        OUTPUT INSERTED.ID
                                        VALUES (@fname, @lname, @email, @zipcode, @createdatetime, @firebaseUserId)";

                    DbUtils.AddParameter(cmd, "@fname", userProfile.FName);
                    DbUtils.AddParameter(cmd, "@lname", userProfile.LName);
                    DbUtils.AddParameter(cmd, "@email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@zipcode", userProfile.ZipCode);
                    DbUtils.AddParameter(cmd, "@createdatetime", userProfile.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@firebaseUserId", userProfile.FirebaseUserId);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE UserProfile 
                                            SET FName = @fname,
                                            LName = @lname,
                                            Email = @email,
                                            ZipCode = @zipcode,
                                            CreateDateTime = @createdatetime
                                        WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@fname", userProfile.FName);
                    DbUtils.AddParameter(cmd, "@lname", userProfile.LName);
                    DbUtils.AddParameter(cmd, "@email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@zipcode", userProfile.ZipCode);
                    DbUtils.AddParameter(cmd, "@createdatetime", userProfile.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@Id", userProfile.Id);

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
                                        DELETE FROM UserProfile WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, FName, LName, Email, ZipCode, CreateDateTime, FirebaseUserId
                                        FROM UserProfile
                                        WHERE FirebaseUserId = @firebaseUserId";
                    DbUtils.AddParameter(cmd, "@firebaseUserId", firebaseUserId);
                    UserProfile userProfile = null;
                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        if (userProfile == null)
                        {
                            userProfile = NewUserFromReader(reader);
                        }
                    }
                    return userProfile;
                }
            }
        }

        private UserProfile NewUserFromReader(SqlDataReader reader)
        {
            return new UserProfile()
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
    }
}
