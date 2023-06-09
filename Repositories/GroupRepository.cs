﻿using System;
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
    public class GroupRepository : BaseRepository, IGroupRepository
    {
        public GroupRepository(IConfiguration configuration) : base(configuration) { }

        public List<Group> GetAll()
        {
            using (var conn = Connection)
            {  
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT g.Id, g.GroupName, g.GroupDesc, g.CategoryId, g.UserId, u.FirebaseUserId, u.FName, u.LName, u.Email, u.CreateDateTime AS UserProfileDateCreated
                 FROM [Group] g 
                    LEFT JOIN UserProfile u ON g.UserId = u.Id
                    ";

                    using ( SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var groups = new List<Group>();
                        while (reader.Read())
                        {
                            groups.Add(new Group()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                GroupName = DbUtils.GetString(reader, "GroupName"),
                                GroupDesc = DbUtils.GetString(reader, "GroupDesc"),
                                CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                                UserProf = new UserProfile()
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

                        return groups;
                    }
                }
            }
        }

        public Group GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT g.Id, g.GroupName, g.GroupDesc, g.CategoryId, g.UserId,
                      u.FirebaseUserId, u.FName, u.LName, u.Email, u.CreateDateTime AS UserProfileDateCreated
                 FROM [Group] g
                      JOIN UserProfile u ON g.UserId = u.Id
                 WHERE g.Id = @id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Group group = null;
                        if (reader.Read())
                        {
                            group = new Group()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                GroupName = DbUtils.GetString(reader, "GroupName"),
                                GroupDesc = DbUtils.GetString(reader, "GroupDesc"),
                                CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                UserProf = new UserProfile()
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

                        return group;
                    }
                }
            }
        }

        public void Add(Group group)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO [Group] (
                        GroupName,
                        GroupDesc,
                        CategoryId,
                        UserId
                        )
                        
                        OUTPUT INSERTED.ID
	                    
                        VALUES (
                        @GroupName,
                        @GroupDesc,
                        @CategoryId,
                        @UserId)
                    ";

                    DbUtils.AddParameter(cmd, "@GroupName", group.GroupName);
                    DbUtils.AddParameter(cmd, "@GroupDesc", group.GroupDesc);
                    DbUtils.AddParameter(cmd, "@CategoryId", group.CategoryId);
                    DbUtils.AddParameter(cmd, "@UserId", group.UserId);
                    group.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Update(Group group)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE [Group]
                                       SET GroupName = @GroupName,
                                           GroupDesc = @GroupDesc,
                                           CategoryId = @CategoryId,
                                           UserId = @UserId
                                       WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@id", group.Id);
                    DbUtils.AddParameter(cmd, "@GroupName", group.GroupName);
                    DbUtils.AddParameter(cmd, "@GroupDesc", group.GroupDesc);
                    DbUtils.AddParameter(cmd, "@CategoryId", group.CategoryId);
                    DbUtils.AddParameter(cmd, "@UserId", group.UserId);
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
                    cmd.CommandText = "DELETE FROM [Group] WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
