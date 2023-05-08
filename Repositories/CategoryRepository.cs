using Koi.Models;
using Koi.Utils;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace Koi.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration) { }

        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT c.Id, c.Type
                 FROM Category c
         ORDER BY c.Type DESC
            ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var categories = new List<Category>();
                        while (reader.Read())
                        {
                            categories.Add(new Category()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Type = DbUtils.GetString(reader, "Type"),
                            });
                        }

                        return categories;
                    }
                }
            }
        }
    }
}
