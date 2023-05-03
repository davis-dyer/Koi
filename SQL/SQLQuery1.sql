--ALTER TABLE [dbo].[User]
--ADD FirebaseUserId int NOT NULL, CreateDateTime DateTime NOT NULL

--ALTER TABLE [User]
--ALTER COLUMN FirebaseUserId varchar(250) NOT NULL

SET IDENTITY_INSERT [User] ON
INSERT INTO [User]
  ([Id], [FirebaseUserId], [FName], [LName], [Email], [ZipCode], [CreateDateTime])
VALUES
  (1, '4zhu8krDbqZfQnO4DgNj8freFux2', 'Davis', 'Dyer', 'davis.dyer10@gmail.com', 37201, GETDATE()),
  (2, 'pb9SmMtFmPepfxSovuDFrungbKK2', 'Keith', 'Dyer', 'ddyer1015@me.com', 37138, GETDATE());
SET IDENTITY_INSERT [User] OFF

SET IDENTITY_INSERT [Event] ON
INSERT INTO Event (Id, Title, Location, EventDate, Description, CreatedAt, LocationId, GroupId, UserId)
VALUES
  (1, 'Community Night', 'Bongo Java', '2023-07-20', 'Join us an opportunity to meet other Christians in your community', '2023-04-01', 1, 1, 1),
  (2, 'Immanuel Connection', 'Immanuel Nashville', '2023-05-25', 'Come hang out with the Immanuel Church family and learn more about what God can do in your life.', '2023-04-30', 2, 2, 2),
  (3, 'Bible Study', 'The Well', '2023-06-4', 'We will be diving into the book of Romans this week. All are welcome.', '2023-05-01', 3, 1, 1),
  (4, 'Prayer Breakfast', 'Community Center', '2023-05-13', 'Join us for food, fellowship, and prayer.', '2023-05-01', 4, 3, 1),
  (5, 'Worship Night', 'Redemption Church', '2023-05-19', 'Join as as we come together and worship our Lord and Savior.', '2023-05-02', 5, 4, 2);
  SET IDENTITY_INSERT [Event] OFF

  SET IDENTITY_INSERT [Location] ON
  INSERT INTO Location (Id, ZipCode, Neighborhood)
VALUES
  (1, '37206', 'East Nashville'),
  (2, '37209', 'Sylvan Park'),
  (3, '37212', 'Hillsboro Village'),
  (4, '37203', 'Music Row'),
  (5, '37216', 'Inglewood');
  SET IDENTITY_INSERT [Location] OFF

  SET IDENTITY_INSERT [Category] ON
  INSERT INTO Category (Id, Type)
VALUES
  (1, 'Worship'),
  (2, 'Bible Study'),
  (3, 'Prayer Meeting'),
  (4, 'Youth Group'),
  (5, 'Community Service');
  SET IDENTITY_INSERT [Category] OFF


  SET IDENTITY_INSERT [Group] ON
  INSERT INTO [Group] (Id, GroupName, GroupDesc, CategoryId)
VALUES
  (1, 'Redemption Group', 'A group for those seeking to learn more about Christianity and grow in their faith.', 2),
  (2, 'Young Adults', 'A group for Christian young adults to connect and support each other.', 4),
  (3, 'Prayer Warriors', 'A group focused on the power of prayer and intercession.', 3),
  (4, 'Worship Team', 'A group of musicians and singers dedicated to leading worship at church services.', 1),
  (5, 'Community Outreach', 'A group committed to serving and meeting the needs of the local community.', 5);
  SET IDENTITY_INSERT [Group] OFF

  SET IDENTITY_INSERT [UserGroup] ON
  INSERT INTO UserGroup (Id, UserId, GroupId)
VALUES
  (1, 1, 1),
  (2, 2, 2),
  (3, 1, 3),
  (4, 1, 2),
  (5, 2, 4),
  (6, 2, 5);
  SET IDENTITY_INSERT [Group] OFF

