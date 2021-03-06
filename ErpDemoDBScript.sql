USE [master]
GO
/****** Object:  Database [ErpDemoDB]    Script Date: 4/23/2018 6:23:20 PM ******/
CREATE DATABASE [ErpDemoDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ErpDemoDB', FILENAME = N'C:\Users\Gordon Duan\ErpDemoDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ErpDemoDB_log', FILENAME = N'C:\Users\Gordon Duan\ErpDemoDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ErpDemoDB] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ErpDemoDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ErpDemoDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ErpDemoDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ErpDemoDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ErpDemoDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ErpDemoDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [ErpDemoDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ErpDemoDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ErpDemoDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ErpDemoDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ErpDemoDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ErpDemoDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ErpDemoDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ErpDemoDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ErpDemoDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ErpDemoDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ErpDemoDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ErpDemoDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ErpDemoDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ErpDemoDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ErpDemoDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ErpDemoDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ErpDemoDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ErpDemoDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ErpDemoDB] SET  MULTI_USER 
GO
ALTER DATABASE [ErpDemoDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ErpDemoDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ErpDemoDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ErpDemoDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ErpDemoDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ErpDemoDB] SET QUERY_STORE = OFF
GO
USE [ErpDemoDB]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [ErpDemoDB]
GO
USE [ErpDemoDB]
GO
/****** Object:  Sequence [dbo].[SysSeq]    Script Date: 4/23/2018 6:23:20 PM ******/
CREATE SEQUENCE [dbo].[SysSeq] 
 AS [bigint]
 START WITH 1
 INCREMENT BY 1
 MINVALUE -9223372036854775808
 MAXVALUE 9223372036854775807
 CACHE 
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 4/23/2018 6:23:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [uniqueidentifier] NOT NULL,
	[Code] [nvarchar](50) NULL,
	[CategoryId] [nvarchar](50) NULL,
	[CategoryName] [nvarchar](40) NOT NULL,
	[Description] [ntext] NULL,
	[ParentId] [uniqueidentifier] NULL,
	[Picture] [image] NULL,
	[IsValid] [bit] NULL,
	[CreatedTime] [datetime] NULL,
	[ModifiedTime] [datetime] NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 4/23/2018 6:23:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[Id] [uniqueidentifier] NOT NULL,
	[Code] [nvarchar](50) NULL,
	[CustomerId] [nvarchar](50) NULL,
	[CustomerName] [nvarchar](40) NOT NULL,
	[ContactName] [nvarchar](30) NULL,
	[ContactTitle] [nvarchar](30) NULL,
	[Address] [nvarchar](60) NULL,
	[City] [nvarchar](15) NULL,
	[Region] [nvarchar](15) NULL,
	[PostalCode] [nvarchar](10) NULL,
	[Country] [nvarchar](15) NULL,
	[Phone] [nvarchar](24) NULL,
	[Fax] [nvarchar](24) NULL,
	[IsValid] [bit] NULL,
	[CreatedTime] [datetime] NULL,
	[ModifiedTime] [datetime] NULL,
	[Remarks] [ntext] NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Department]    Script Date: 4/23/2018 6:23:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](40) NULL,
	[Code] [nvarchar](40) NULL,
	[Manager] [nvarchar](40) NULL,
	[ContactNumber] [nvarchar](40) NULL,
	[Remarks] [ntext] NULL,
	[ParentId] [uniqueidentifier] NULL,
	[CreateUserId] [uniqueidentifier] NULL,
	[CreateTime] [datetime] NULL,
	[IsDeleted] [smallint] NULL,
	[IsSystem] [char](10) NULL,
	[IsVisible] [char](10) NULL,
	[SerialNumber] [int] NULL,
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 4/23/2018 6:23:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[Id] [uniqueidentifier] NOT NULL,
	[Code] [nvarchar](50) NULL,
	[EmployeeId] [nvarchar](50) NULL,
	[LastName] [nvarchar](20) NOT NULL,
	[FirstName] [nvarchar](10) NOT NULL,
	[Title] [nvarchar](30) NULL,
	[DepartmentId] [uniqueidentifier] NULL,
	[RoleId] [uniqueidentifier] NULL,
	[BirthDate] [datetime] NULL,
	[HireDate] [datetime] NULL,
	[Address] [nvarchar](60) NULL,
	[City] [nvarchar](15) NULL,
	[Region] [nvarchar](15) NULL,
	[PostalCode] [nvarchar](10) NULL,
	[Country] [nvarchar](15) NULL,
	[Phone] [nvarchar](24) NULL,
	[Extension] [nvarchar](4) NULL,
	[Photo] [image] NULL,
	[Notes] [ntext] NULL,
	[ReportsTo] [uniqueidentifier] NULL,
	[PhotoPath] [nvarchar](255) NULL,
	[IsValid] [bit] NULL,
	[CreatedTime] [datetime] NULL,
	[ModifiedTime] [datetime] NULL,
	[Description] [ntext] NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Menu]    Script Date: 4/23/2018 6:23:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Menu](
	[Id] [uniqueidentifier] NOT NULL,
	[ParentId] [uniqueidentifier] NULL,
	[SerialNumber] [int] NULL,
	[Name] [nvarchar](50) NULL,
	[Code] [nvarchar](50) NULL,
	[Url] [nvarchar](50) NULL,
	[Type] [smallint] NULL,
	[Icon] [nvarchar](50) NULL,
	[Remarks] [ntext] NULL,
	[IsSystem] [char](10) NULL,
	[IsVisible] [char](10) NULL,
 CONSTRAINT [PK_Menu] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderDetails]    Script Date: 4/23/2018 6:23:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderDetails](
	[Id] [uniqueidentifier] NOT NULL,
	[Code] [nvarchar](50) NULL,
	[OrderId] [nvarchar](50) NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[UnitPrice] [money] NULL,
	[Quantity] [smallint] NULL,
	[Discount] [real] NULL,
 CONSTRAINT [PK_Order_Details] PRIMARY KEY CLUSTERED 
(
	[Id] ASC,
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderHead]    Script Date: 4/23/2018 6:23:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderHead](
	[Id] [uniqueidentifier] NOT NULL,
	[Code] [nvarchar](50) NULL,
	[OrderId] [nvarchar](50) NULL,
	[CustomerId] [uniqueidentifier] NULL,
	[EmployeeId] [uniqueidentifier] NULL,
	[OrderDate] [datetime] NULL,
	[RequiredDate] [datetime] NULL,
	[ShippedDate] [datetime] NULL,
	[ShipVia] [int] NULL,
	[Freight] [money] NULL,
	[ShipName] [nvarchar](40) NULL,
	[ShipAddress] [nvarchar](60) NULL,
	[ShipCity] [nvarchar](15) NULL,
	[ShipRegion] [nvarchar](15) NULL,
	[ShipPostalCode] [nvarchar](10) NULL,
	[ShipCountry] [nvarchar](15) NULL,
	[OrderType] [smallint] NULL,
	[OrderStatus] [smallint] NULL,
	[IsValid] [bit] NULL,
	[CreatedTime] [datetime] NULL,
	[ModifiedTime] [datetime] NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 4/23/2018 6:23:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [uniqueidentifier] NOT NULL,
	[Code] [nvarchar](50) NULL,
	[ProductId] [nvarchar](50) NULL,
	[ProductName] [nvarchar](40) NOT NULL,
	[SupplierId] [uniqueidentifier] NULL,
	[CategoryId] [uniqueidentifier] NULL,
	[QuantityPerUnit] [nvarchar](20) NULL,
	[UnitPrice] [money] NULL,
	[IsValid] [bit] NULL,
	[CreatedTime] [datetime] NULL,
	[ModifiedTime] [datetime] NULL,
	[Description] [ntext] NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 4/23/2018 6:23:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[Id] [uniqueidentifier] NOT NULL,
	[Code] [nvarchar](50) NULL,
	[Name] [nvarchar](50) NULL,
	[CreateUserId] [uniqueidentifier] NULL,
	[CreateTime] [datetime] NULL,
	[Remarks] [ntext] NULL,
	[IsSystem] [char](10) NULL,
	[IsVisible] [char](10) NULL,
 CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RoleMenu]    Script Date: 4/23/2018 6:23:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoleMenu](
	[RoleId] [uniqueidentifier] NOT NULL,
	[MenuId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_RoleMenu] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC,
	[MenuId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Stocks]    Script Date: 4/23/2018 6:23:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Stocks](
	[Id] [uniqueidentifier] NOT NULL,
	[Code] [nvarchar](50) NULL,
	[StockID] [nvarchar](50) NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[ProductName] [nvarchar](40) NOT NULL,
	[SupplierID] [uniqueidentifier] NULL,
	[CategoryID] [uniqueidentifier] NULL,
	[Quantity] [smallint] NULL,
	[UnitPrice] [money] NULL,
	[Amount] [money] NULL,
	[CreatedTime] [datetime] NULL,
	[ModifiedTime] [datetime] NULL,
 CONSTRAINT [PK_Stocks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Suppliers]    Script Date: 4/23/2018 6:23:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Suppliers](
	[Id] [uniqueidentifier] NOT NULL,
	[Code] [nvarchar](50) NULL,
	[SupplierId] [nvarchar](50) NULL,
	[SupplierName] [nvarchar](40) NOT NULL,
	[ContactName] [nvarchar](30) NULL,
	[ContactTitle] [nvarchar](30) NULL,
	[Address] [nvarchar](60) NULL,
	[City] [nvarchar](15) NULL,
	[Region] [nvarchar](15) NULL,
	[PostalCode] [nvarchar](10) NULL,
	[Country] [nvarchar](15) NULL,
	[Phone] [nvarchar](24) NULL,
	[Fax] [nvarchar](24) NULL,
	[HomePage] [ntext] NULL,
	[IsValid] [bit] NULL,
	[CreatedTime] [datetime] NULL,
	[ModifiedTime] [datetime] NULL,
 CONSTRAINT [PK_Suppliers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transactions]    Script Date: 4/23/2018 6:23:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transactions](
	[Id] [uniqueidentifier] NOT NULL,
	[Code] [nvarchar](50) NULL,
	[TransactionId] [nvarchar](50) NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[ProductName] [nvarchar](40) NOT NULL,
	[SupplierId] [uniqueidentifier] NULL,
	[CategoryId] [uniqueidentifier] NULL,
	[Quantity] [smallint] NOT NULL,
	[UnitPrice] [money] NULL,
	[Amount] [money] NULL,
	[RecordType] [smallint] NULL,
	[TransactionTime] [datetime] NULL,
	[CustomerId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_Transactions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 4/23/2018 6:23:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [uniqueidentifier] NOT NULL,
	[UserName] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
	[Name] [nvarchar](50) NULL,
	[EMail] [nvarchar](50) NULL,
	[MobileNumber] [nvarchar](50) NULL,
	[Remarks] [nvarchar](50) NULL,
	[CreateUserId] [uniqueidentifier] NULL,
	[CreateTime] [datetime] NULL,
	[LastLoginTime] [datetime] NULL,
	[LoginTimes] [int] NULL,
	[DepartmentId] [uniqueidentifier] NULL,
	[IsDeleted] [smallint] NULL,
	[IsSystem] [char](10) NULL,
	[IsVisible] [char](10) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRole]    Script Date: 4/23/2018 6:23:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRole](
	[UserId] [uniqueidentifier] NOT NULL,
	[RoleId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_UserRole] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'204cd6d9-2544-4725-8d1a-0b1055142574', N'Kitchen Whiteware', NULL, N'Kitchen Whiteware', N'Kitchen Whiteware -- level 2 category', N'ac1ea613-f008-46cf-bb5e-41ce639f0b1f', 0x, NULL, CAST(N'2018-04-23T15:03:08.657' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'38be58ed-4b9e-4e09-8583-12df5eb9adf3', N'Tablets', NULL, N'Tablets', N'Tablets -- level 2 category', N'b2c442ef-2a9e-4b6d-a854-f7146653544c', 0x, NULL, CAST(N'2018-04-23T15:11:34.193' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'8086501a-e72c-4705-8fdb-19ca24e0098e', N'GPS & Radars', NULL, N'GPS & Radars', N'GPS & Radars -- level 3 category', N'7a2fc232-59fe-4aec-91d2-f936702dea3a', 0x, NULL, CAST(N'2018-04-23T15:07:56.677' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'fea21a29-6d56-4d14-af64-19de7f3f97a7', N'Phones & GPS', NULL, N'Phones & GPS', N'Phones & GPS -- level 1 category', N'00000000-0000-0000-0000-000000000000', 0x, NULL, CAST(N'2018-04-23T14:51:57.683' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'020b3d9d-a5b1-4aa2-93ea-1da389bd8412', N'iPads', NULL, N'iPads', N'iPads -- level 3 category', N'38be58ed-4b9e-4e09-8583-12df5eb9adf3', 0x, NULL, CAST(N'2018-04-23T15:13:03.430' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'bb79f1c5-ea3f-41da-9de3-221b4350ab53', N'Vacuum Cleaners', NULL, N'Vacuum Cleaners', N'Vacuum Cleaners -- level 3 category', N'2ea05622-6bbd-4b9a-be57-c64c9f91c18c', 0x, NULL, CAST(N'2018-04-23T15:10:09.527' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'c3f6a0f5-8c19-4bd9-87fe-270ce8251f5d', N'Car Dashcams', NULL, N'Car Dashcams', N'Car Dashcams -- level 3 category', N'7a2fc232-59fe-4aec-91d2-f936702dea3a', 0x, NULL, CAST(N'2018-04-23T15:08:21.363' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'ac1ea613-f008-46cf-bb5e-41ce639f0b1f', N'Kitchen Appliances', NULL, N'Kitchen Appliances', N'Kitchen Appliances -- level 1 category', N'00000000-0000-0000-0000-000000000000', 0x, NULL, CAST(N'2018-04-23T14:54:00.313' AS DateTime), CAST(N'2018-04-23T14:54:22.753' AS DateTime))
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'a9034168-5ed1-40b8-99eb-73441ed9ab0f', N'Mobile Phones', NULL, N'Mobile Phones', N'Mobile Phones -- level 2 category', N'fea21a29-6d56-4d14-af64-19de7f3f97a7', 0x, NULL, CAST(N'2018-04-23T15:06:20.017' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'3813ca38-ae4f-4e56-b6e8-81394626a428', N'Microwaves', NULL, N'Microwaves', N'Microwaves -- level 3 category', N'48a3687e-0e87-40a6-9708-c3a9f7e6207a', 0x, NULL, CAST(N'2018-04-23T15:04:50.943' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'686add69-3efd-4534-946d-a567b5bf1a71', N'Macbooks', NULL, N'Macbooks', N'Macbooks -- level 3 category', N'df237f95-f518-4519-8cd8-b11c103ac477', 0x, NULL, CAST(N'2018-04-23T15:12:37.630' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'7703fc06-85a8-473a-b049-a6432d7e9e36', N'Household Appliances', NULL, N'Household Appliances', N'Household Appliances -- level 1 category', N'00000000-0000-0000-0000-000000000000', 0x, NULL, CAST(N'2018-04-23T14:54:50.640' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'df237f95-f518-4519-8cd8-b11c103ac477', N'Laptops', NULL, N'Laptops', N'Laptops -- level 2 category', N'b2c442ef-2a9e-4b6d-a854-f7146653544c', 0x, NULL, CAST(N'2018-04-23T15:10:52.723' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'48a3687e-0e87-40a6-9708-c3a9f7e6207a', N'Kitchen Appliances', NULL, N'Kitchen Appliances', N'Kitchen Appliances -- level 2 category', N'ac1ea613-f008-46cf-bb5e-41ce639f0b1f', 0x, NULL, CAST(N'2018-04-23T15:03:56.820' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'2ea05622-6bbd-4b9a-be57-c64c9f91c18c', N'Vacuum', NULL, N'Vacuum', N'Vacuum -- level 2 category', N'7703fc06-85a8-473a-b049-a6432d7e9e36', 0x, NULL, CAST(N'2018-04-23T15:09:44.433' AS DateTime), CAST(N'2018-04-23T15:46:16.943' AS DateTime))
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'8002add8-b431-42ec-a299-d2a0ab874a88', N'Heating & Cooling', NULL, N'Heating & Cooling', N'Heating & Cooling -- level 2 category', N'7703fc06-85a8-473a-b049-a6432d7e9e36', 0x, NULL, CAST(N'2018-04-23T15:09:09.127' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'0a4badb3-31f8-400b-ad13-d3717b403d4d', N'iPhone', NULL, N'iPhone', N'iPhone -- level 3 category', N'a9034168-5ed1-40b8-99eb-73441ed9ab0f', 0x, NULL, CAST(N'2018-04-23T15:07:03.367' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'cff7a4a2-0d08-4956-9d9b-dffd8f787c4b', N'Android', NULL, N'Android', N'Android -- level 3 category', N'a9034168-5ed1-40b8-99eb-73441ed9ab0f', 0x, NULL, CAST(N'2018-04-23T15:07:20.707' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'a4a742bc-e5c6-4211-b396-eaaa9a3bb914', N'Heaters', NULL, N'Heaters', N'Heaters -- level 3 category', N'8002add8-b431-42ec-a299-d2a0ab874a88', 0x, NULL, CAST(N'2018-04-23T15:10:29.263' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'b2c442ef-2a9e-4b6d-a854-f7146653544c', N'Computers & Tablets', NULL, N'Computers & Tablets', N'Computers & Tablets -- level 1 category', N'00000000-0000-0000-0000-000000000000', 0x, NULL, CAST(N'2018-04-23T14:50:28.920' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'203cc0f3-5169-4df1-b30f-f8b7d122d54d', N'Ovens', NULL, N'Ovens', N'Ovens -- level 3 category', N'204cd6d9-2544-4725-8d1a-0b1055142574', 0x, NULL, CAST(N'2018-04-23T15:04:21.027' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Code], [CategoryId], [CategoryName], [Description], [ParentId], [Picture], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'7a2fc232-59fe-4aec-91d2-f936702dea3a', N'GPS', NULL, N'GPS', N'GPS -- level 2 category', N'fea21a29-6d56-4d14-af64-19de7f3f97a7', 0x, NULL, CAST(N'2018-04-23T15:06:39.400' AS DateTime), NULL)
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'8c23a1b4-1193-48e6-8203-001799a26a78', NULL, NULL, N'Suki Burks', N'Suki Burks', NULL, NULL, N'Auckland', NULL, NULL, N'New Zealand', N'1212', NULL, NULL, CAST(N'2018-04-23T16:44:49.287' AS DateTime), CAST(N'2018-04-23T16:44:49.287' AS DateTime), NULL)
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'7d4cbbe7-7904-4704-ba50-04393ded034b', NULL, NULL, N'Olivia Liang', N'Olivia Liang', NULL, NULL, N'Wellington', NULL, NULL, N'New Zealand', N'1223', NULL, NULL, CAST(N'2018-04-23T16:42:55.487' AS DateTime), CAST(N'2018-04-23T16:42:55.487' AS DateTime), NULL)
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'22dcaa9d-d75f-4e4d-87f1-04688dc30efd', NULL, NULL, N'Sakura Yamamoto', N'Sakura Yamamoto', NULL, NULL, N'Tokyo', NULL, NULL, N'Japan', N'5678', NULL, NULL, CAST(N'2018-04-23T16:44:18.817' AS DateTime), CAST(N'2018-04-23T16:44:18.817' AS DateTime), NULL)
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'fad943bc-c798-44eb-b3d1-07ea5af348ae', NULL, NULL, N'Gloria Little', N'Gloria Little', NULL, NULL, N'Wellington', NULL, NULL, N'New Zealand', N'1234', NULL, NULL, CAST(N'2018-04-23T16:39:01.733' AS DateTime), CAST(N'2018-04-23T16:39:39.300' AS DateTime), NULL)
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'a491d462-a7fe-4c38-a651-1699f25c956a', NULL, NULL, N'Hermione Butler', N'Hermione Butler', NULL, NULL, N'Wellington', NULL, NULL, N'New Zealand', N'1234', NULL, NULL, CAST(N'2018-04-23T16:40:34.730' AS DateTime), CAST(N'2018-04-23T16:40:34.730' AS DateTime), NULL)
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'd3059acb-7025-46b8-bcc8-3300d6c06870', NULL, NULL, N'Haley Kennedy', N'Haley Kennedy', NULL, NULL, N'Auckland', NULL, NULL, N'New Zealand', N'1234', NULL, NULL, CAST(N'2018-04-23T16:40:05.163' AS DateTime), CAST(N'2018-04-23T16:40:05.163' AS DateTime), NULL)
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'1cac1ca7-d6c4-4561-8bb8-3d5cfc55b237', NULL, NULL, N'Herrod Chandler', N'Herrod Chandler', NULL, NULL, N'Hamilton', NULL, NULL, N'New Zealand', N'1234', NULL, NULL, CAST(N'2018-04-23T16:41:33.047' AS DateTime), CAST(N'2018-04-23T16:41:33.047' AS DateTime), NULL)
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'dbcf20b8-ab0a-41e0-a026-71c188f0061e', NULL, NULL, N'Corporate Headquarter', N'Purchasing', NULL, NULL, N'Wellington', NULL, NULL, N'New Zealand', N'0000', NULL, NULL, CAST(N'2018-04-23T17:13:37.380' AS DateTime), CAST(N'2018-04-23T17:14:10.273' AS DateTime), N'Corporate Headquarter')
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'3f3a62b3-ed40-45d0-b262-7682a3425b93', NULL, NULL, N'Martena Mccray', N'Martena Mccray', NULL, NULL, N'Wellington', NULL, NULL, N'New Zealand', N'1223', NULL, NULL, CAST(N'2018-04-23T16:42:28.980' AS DateTime), CAST(N'2018-04-23T16:42:28.980' AS DateTime), NULL)
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'7adab53e-1130-420a-8db0-9254d8da8918', NULL, NULL, N'Prescott Bartlett', N'Prescott Bartlett', NULL, NULL, N'Sydney', NULL, NULL, N'Australia', N'2311', NULL, NULL, CAST(N'2018-04-23T16:43:34.403' AS DateTime), CAST(N'2018-04-23T16:43:34.403' AS DateTime), NULL)
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'5bb98e5b-d01c-4741-857f-a407a769354d', NULL, NULL, N'Zenaida Frank', N'Zenaida Frank', NULL, NULL, N'Wellington', NULL, NULL, N'New Zealand', N'1235', NULL, NULL, CAST(N'2018-04-23T16:46:36.923' AS DateTime), CAST(N'2018-04-23T16:46:36.923' AS DateTime), NULL)
INSERT [dbo].[Customers] ([Id], [Code], [CustomerId], [CustomerName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [IsValid], [CreatedTime], [ModifiedTime], [Remarks]) VALUES (N'c537494a-dc44-4590-bea9-e8c0e862d5ed', NULL, NULL, N'Jackson Bradshaw', N'Jackson Bradshaw', NULL, NULL, N'Chrischurch', NULL, NULL, N'New Zealand', N'1234', NULL, NULL, CAST(N'2018-04-23T16:42:03.983' AS DateTime), CAST(N'2018-04-23T16:42:33.950' AS DateTime), NULL)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'b8c0b6fd-1c1a-4e07-80bb-018c8065f3be', N'Finance', N'Finance', N'Finance Manager', NULL, N'Finance department -- level 2 department.', N'0d0e8b64-215e-4b41-98e2-4320f33e792a', NULL, CAST(N'2018-04-23T13:57:09.687' AS DateTime), NULL, NULL, NULL, 3)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'c85c52e9-d234-4a1e-902d-24b1a8203266', N'IT', N'IT', N'IT Manager', NULL, N'IT department -- level 2 department.', N'0d0e8b64-215e-4b41-98e2-4320f33e792a', NULL, CAST(N'2018-04-23T14:00:54.167' AS DateTime), NULL, NULL, NULL, 6)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'0dd7045a-c8ba-480c-b9ce-31d56ca961b9', N'Sales Group 1', N'Sales Group 1', N'Group 1 Manager', NULL, N'Sales group 1 -- level 3 department.', N'aa7eed30-de5b-4142-8fa5-3f27c51d8bfd', NULL, CAST(N'2018-04-23T14:07:17.483' AS DateTime), NULL, NULL, NULL, 1)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'd5d20b83-8d4e-41f3-a430-359b5b607967', N'Customer Service', N'Customer Service', N'CS Manager', NULL, N'Customer Service department -- level 2 department.', N'0d0e8b64-215e-4b41-98e2-4320f33e792a', NULL, CAST(N'2018-04-23T14:05:32.637' AS DateTime), NULL, NULL, NULL, 7)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'aa7eed30-de5b-4142-8fa5-3f27c51d8bfd', N'Sales', N'Sales', N'Sales Manager', NULL, N'Sales department -- level 2 department.', N'0d0e8b64-215e-4b41-98e2-4320f33e792a', NULL, CAST(N'2018-04-23T13:51:03.650' AS DateTime), NULL, NULL, NULL, 1)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'0d0e8b64-215e-4b41-98e2-4320f33e792a', N'Corporate Headquarter', N'Corporate Headquarter', N'CEO', NULL, N'Corporate headquarter -- top level department.', N'00000000-0000-0000-0000-000000000000', NULL, CAST(N'2018-04-23T13:47:20.400' AS DateTime), NULL, NULL, NULL, 1)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'efcdfb6e-d4d3-4ef1-aa67-68f884aa2138', N'HR', N'HR', N'HR Manager', NULL, N'HR department -- level 2 department.', N'0d0e8b64-215e-4b41-98e2-4320f33e792a', NULL, CAST(N'2018-04-23T13:57:46.880' AS DateTime), NULL, NULL, NULL, 4)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'd7f5a6cf-7c82-43d3-80fd-957364d11d94', N'Others', N'IT admin', NULL, NULL, N'Others -- level 2 department. ', N'0d0e8b64-215e-4b41-98e2-4320f33e792a', NULL, CAST(N'2018-04-23T14:23:02.653' AS DateTime), NULL, NULL, NULL, 9)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'112b19ab-5e82-401a-9d72-a92a11120283', N'Logistic', N'Logistic', N'Logistic Manager', NULL, N'Logistic department -- level 2 department.', N'0d0e8b64-215e-4b41-98e2-4320f33e792a', NULL, CAST(N'2018-04-23T14:06:12.590' AS DateTime), NULL, NULL, NULL, 8)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'6b8631fd-aef2-4345-acbd-a97bec144b96', N'Procurement', N'Procurement', N'Procurement Manager', NULL, N'Procurement department -- level 2 department.', N'0d0e8b64-215e-4b41-98e2-4320f33e792a', NULL, CAST(N'2018-04-23T14:00:10.680' AS DateTime), NULL, NULL, NULL, 5)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'e7efdc86-6d59-4a96-bce0-aabe1cde820d', N'Sales Group 2', N'Sales Group 2', N'Group 2 Manager', NULL, N'Sales Group 2 -- level 3 department.', N'aa7eed30-de5b-4142-8fa5-3f27c51d8bfd', NULL, CAST(N'2018-04-23T14:08:10.360' AS DateTime), NULL, NULL, NULL, 2)
INSERT [dbo].[Department] ([Id], [Name], [Code], [Manager], [ContactNumber], [Remarks], [ParentId], [CreateUserId], [CreateTime], [IsDeleted], [IsSystem], [IsVisible], [SerialNumber]) VALUES (N'f4f3a0bc-04fd-432f-bc58-e25153c3a21b', N'Marketing', N'Marketing', N'Marketing Manager', NULL, N'Marketing department -- level 2 department.', N'0d0e8b64-215e-4b41-98e2-4320f33e792a', NULL, CAST(N'2018-04-23T13:51:53.253' AS DateTime), NULL, NULL, NULL, 2)
INSERT [dbo].[Employees] ([Id], [Code], [EmployeeId], [LastName], [FirstName], [Title], [DepartmentId], [RoleId], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'e112d1fd-a4ab-4712-917b-04287710f551', NULL, NULL, N'Flynn', N'Quinn', N' Support Lead', N'd5d20b83-8d4e-41f3-a430-359b5b607967', N'4e4ab70a-fea6-412e-8b29-3dae74f75c4c', NULL, CAST(N'2018-01-01T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'1111', NULL, 0x, NULL, NULL, NULL, NULL, CAST(N'2018-04-23T16:29:17.770' AS DateTime), CAST(N'2018-04-23T16:35:35.263' AS DateTime), N'Wellington Office')
INSERT [dbo].[Employees] ([Id], [Code], [EmployeeId], [LastName], [FirstName], [Title], [DepartmentId], [RoleId], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'55c6cdb7-e426-418d-b521-2466e059dad3', NULL, NULL, N'Silva', N'Michael ', N'Marketing Designer', N'f4f3a0bc-04fd-432f-bc58-e25153c3a21b', N'8a98d1f5-b13f-4134-bdbf-0d8921efc311', NULL, CAST(N'2015-07-01T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'1111', NULL, 0x, NULL, NULL, NULL, NULL, CAST(N'2018-04-23T16:30:55.883' AS DateTime), CAST(N'2018-04-23T16:35:11.613' AS DateTime), N'Wellington Office')
INSERT [dbo].[Employees] ([Id], [Code], [EmployeeId], [LastName], [FirstName], [Title], [DepartmentId], [RoleId], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'b7742415-4e2e-42ac-b421-2530976b5255', NULL, NULL, N'Chandler', N' Herrod', N'Sales Assistant', N'aa7eed30-de5b-4142-8fa5-3f27c51d8bfd', N'e61e989f-d99a-45d1-a41d-bea96eb7f83b', NULL, CAST(N'2016-01-01T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'2121', NULL, 0x, NULL, NULL, NULL, NULL, CAST(N'2018-04-23T16:27:01.440' AS DateTime), CAST(N'2018-04-23T16:36:44.980' AS DateTime), N'Wellington Office')
INSERT [dbo].[Employees] ([Id], [Code], [EmployeeId], [LastName], [FirstName], [Title], [DepartmentId], [RoleId], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'44c7ba47-3829-48ba-8f4d-25903c2fef98', NULL, NULL, N'Fitzpatrick', N'Tatyana', N'Regional Director', N'0d0e8b64-215e-4b41-98e2-4320f33e792a', N'12d14fbe-2663-42a5-b0b2-5baaace9f919', NULL, CAST(N'2010-01-01T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'0001', NULL, 0x, NULL, NULL, NULL, NULL, CAST(N'2018-04-23T16:28:39.317' AS DateTime), CAST(N'2018-04-23T16:36:21.130' AS DateTime), N'Wellington Office')
INSERT [dbo].[Employees] ([Id], [Code], [EmployeeId], [LastName], [FirstName], [Title], [DepartmentId], [RoleId], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'5abb5e69-37b4-494d-a885-4e4d0ada6fcc', NULL, NULL, N'Cox', N'Ashton', N'Junior Technical Author', N'c85c52e9-d234-4a1e-902d-24b1a8203266', N'e61e989f-d99a-45d1-a41d-bea96eb7f83b', NULL, CAST(N'2015-01-01T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'1112', NULL, 0x, NULL, NULL, NULL, NULL, CAST(N'2018-04-23T16:24:59.400' AS DateTime), CAST(N'2018-04-23T16:37:03.047' AS DateTime), N'Christchurch Office')
INSERT [dbo].[Employees] ([Id], [Code], [EmployeeId], [LastName], [FirstName], [Title], [DepartmentId], [RoleId], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'774fc3a7-b5bc-44c4-9a40-8f3f708f185d', NULL, NULL, N'Byrd', N'Paul', N'Chief Financial Officer', N'b8c0b6fd-1c1a-4e07-80bb-018c8065f3be', N'12d14fbe-2663-42a5-b0b2-5baaace9f919', NULL, CAST(N'2010-01-01T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'0101', NULL, 0x, NULL, NULL, NULL, NULL, CAST(N'2018-04-23T16:31:34.240' AS DateTime), CAST(N'2018-04-23T16:34:56.370' AS DateTime), N'Wellington Office')
INSERT [dbo].[Employees] ([Id], [Code], [EmployeeId], [LastName], [FirstName], [Title], [DepartmentId], [RoleId], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'2d4e8896-3f2f-4e49-b10c-90864325ed3e', NULL, NULL, N'Gaines', N'Jena', N'Office Manager', N'0d0e8b64-215e-4b41-98e2-4320f33e792a', N'4e4ab70a-fea6-412e-8b29-3dae74f75c4c', NULL, CAST(N'2015-01-01T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'1111', NULL, 0x, NULL, NULL, NULL, NULL, CAST(N'2018-04-23T16:30:21.150' AS DateTime), CAST(N'2018-04-23T16:35:23.130' AS DateTime), N'Wellington Office')
INSERT [dbo].[Employees] ([Id], [Code], [EmployeeId], [LastName], [FirstName], [Title], [DepartmentId], [RoleId], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'cdc08eeb-a2f9-41a1-a976-a15e5ac2858f', NULL, NULL, N'Winters', N'Garrett', N'Accountant', N'b8c0b6fd-1c1a-4e07-80bb-018c8065f3be', N'e61e989f-d99a-45d1-a41d-bea96eb7f83b', NULL, CAST(N'2010-01-01T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'2111', NULL, 0x, NULL, NULL, NULL, NULL, CAST(N'2018-04-23T16:23:13.987' AS DateTime), CAST(N'2018-04-23T16:37:17.063' AS DateTime), N'Wellington Office')
INSERT [dbo].[Employees] ([Id], [Code], [EmployeeId], [LastName], [FirstName], [Title], [DepartmentId], [RoleId], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'e55d62a3-730d-49bc-a547-ae8e2a686190', NULL, NULL, N'Frost', N'Sonya', N'Software Engineer', N'c85c52e9-d234-4a1e-902d-24b1a8203266', N'e61e989f-d99a-45d1-a41d-bea96eb7f83b', NULL, CAST(N'2016-01-01T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'0111', NULL, 0x, NULL, NULL, NULL, NULL, CAST(N'2018-04-23T16:27:42.430' AS DateTime), CAST(N'2018-04-23T16:36:32.847' AS DateTime), N'Wellington Office')
INSERT [dbo].[Employees] ([Id], [Code], [EmployeeId], [LastName], [FirstName], [Title], [DepartmentId], [RoleId], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'bf251578-b280-4bc3-9308-c61c237d1e31', NULL, NULL, N'Kelly', N' Cedric', N'Senior Javascript Developer', N'c85c52e9-d234-4a1e-902d-24b1a8203266', N'8a98d1f5-b13f-4134-bdbf-0d8921efc311', NULL, CAST(N'2012-01-01T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'1212', NULL, 0x, NULL, NULL, NULL, NULL, CAST(N'2018-04-23T16:25:58.250' AS DateTime), CAST(N'2018-04-23T16:36:52.877' AS DateTime), N'Wellington Office')
INSERT [dbo].[Employees] ([Id], [Code], [EmployeeId], [LastName], [FirstName], [Title], [DepartmentId], [RoleId], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'ea85537c-c8e0-4d41-a021-f57a8dc7cce7', NULL, NULL, N'Nixon', N'Tiger', N'System Architect', N'c85c52e9-d234-4a1e-902d-24b1a8203266', N'8a98d1f5-b13f-4134-bdbf-0d8921efc311', NULL, CAST(N'2010-01-01T00:00:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'1222', NULL, 0x, NULL, NULL, NULL, NULL, CAST(N'2018-04-23T16:22:24.560' AS DateTime), CAST(N'2018-04-23T16:37:32.060' AS DateTime), N'Auckland Office')
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'a284ffe5-ea3b-4819-b850-203e7782602f', N'00000000-0000-0000-0000-000000000000', 3, N'Reports', N'Reports', N'#', 0, N'fa fa-bar-chart', N'Report -- level 1 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'b917d3ee-7dbe-43c6-a2d4-351e845e9efa', N'a284ffe5-ea3b-4819-b850-203e7782602f', 2, N'Transactions', N'Transactions', N'Transactions/Index', 0, N'fa fa-circle-o', N'Transactions report -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'c35feea7-2503-41e1-ab08-4f42a3962d1e', N'2e58da1d-de5b-4a15-b8fa-e30f2ff779c0', 1, N'Categories', N'Categories', N'Categories/Index', 0, N'fa fa-circle-o', N'Categories management -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'2dd3da35-df54-4dc3-beb7-5ee42186ed96', N'00000000-0000-0000-0000-000000000000', 6, N'Finance', N'Finance', N'#', 0, N'fa fa-bank', N'Finance -- level 1 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'c06a93dd-5db7-4904-ae58-6a416c9a7a7d', N'28d70f0c-dcf7-4a5b-bfe5-fd03a48fa322', 4, N'User', N'User', N'User/Index', 0, N'fa fa-circle-o', N'User management -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'343e2e13-5c67-4595-ac42-70fa25cce8bc', N'a284ffe5-ea3b-4819-b850-203e7782602f', 3, N'Stocks', N'Stocks', N'Stocks/Index', 0, N'fa fa-circle-o', N'Stocks report -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'1543d014-5f72-48bd-b8c7-7cc2f9bc635b', N'2e58da1d-de5b-4a15-b8fa-e30f2ff779c0', 4, N'Customers', N'Customers', N'Customers/Index', 0, N'fa fa-circle-o', N'Customers management -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'7d997108-5a42-465f-8512-7ee3a069d7e1', N'28d70f0c-dcf7-4a5b-bfe5-fd03a48fa322', 2, N'Department', N'Department', N'Department/Index', 0, N'fa fa-circle-o', N'Department management -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'2788c3c1-7361-43e2-a62a-84d1c6446ba1', N'00000000-0000-0000-0000-000000000000', 5, N'Marketing', N'Marketing', N'#', 0, N'fa fa-pie-chart', N'Marketing -- level 1 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'1666c72c-0d45-4db2-989c-963a672f2f6d', N'2e58da1d-de5b-4a15-b8fa-e30f2ff779c0', 5, N'Orders', N'Orders', N'Orders/Index', 0, N'fa fa-circle-o', N'Orders management -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'9b610e8b-1928-42ba-9532-adadf2f5dac4', N'00000000-0000-0000-0000-000000000000', 4, N'HR', N'HR', N'#', 0, N'fa fa-user', N'Human Resource -- level 1 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'c30f1d97-4793-4aca-87be-b568b9dfb85c', N'28d70f0c-dcf7-4a5b-bfe5-fd03a48fa322', 1, N'Menu', N'Menu', N'Menu/Index', 0, N'fa fa-circle-o', N'Menu management -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'26ae1eac-941d-4bbd-b3dc-bfa4426df3ab', N'2e58da1d-de5b-4a15-b8fa-e30f2ff779c0', 3, N'Products', N'Products', N'Products/Index', 0, N'fa fa-circle-o', N'Porducts management -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'31bc7680-d0c6-4502-aa50-e05037d1409f', N'28d70f0c-dcf7-4a5b-bfe5-fd03a48fa322', 3, N'Role', N'Role', N'Role/Index', 0, N'fa fa-circle-o', N'Role management -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'2e58da1d-de5b-4a15-b8fa-e30f2ff779c0', N'00000000-0000-0000-0000-000000000000', 2, N'Business', N'Business', N'#', 0, N'fa fa-briefcase', N'Business process -- level 1 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'73268514-5f69-48db-b7b6-ee118436e81d', N'a284ffe5-ea3b-4819-b850-203e7782602f', 1, N'Sales', N'Sales', N'Sales/Index', 0, N'fa fa-circle-o', N'Sales report -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'3cbf68b6-4be1-40ea-9a56-f04a3c70244f', N'9b610e8b-1928-42ba-9532-adadf2f5dac4', 1, N'Employees', N'Employees', N'Employees/Index', 0, N'fa fa-circle-o', N'Employees management -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'1788f790-6646-441c-9c85-fc00908150ea', N'2e58da1d-de5b-4a15-b8fa-e30f2ff779c0', 2, N'Suppliers', N'Suppliers', N'Suppliers/Index', 0, N'fa fa-circle-o', N'Suppliers management -- level 2 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[Menu] ([Id], [ParentId], [SerialNumber], [Name], [Code], [Url], [Type], [Icon], [Remarks], [IsSystem], [IsVisible]) VALUES (N'28d70f0c-dcf7-4a5b-bfe5-fd03a48fa322', N'00000000-0000-0000-0000-000000000000', 1, N'Permission', N'Permission', N'#', 0, N'fa fa-gears', N'Permission management -- level 1 menu. Created by admin.', NULL, NULL)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'35d8244c-ee0b-48e3-a244-0e4aae4da93e', NULL, NULL, N'f7fc43f0-da66-4975-9022-1e2896430719', 1249.0000, 50, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'f6929ee0-b284-42b8-885d-1de0d747582e', NULL, NULL, N'dd9e1bb2-f9b4-491f-b4b1-1c39be571ca0', 199.9900, 100, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'f6929ee0-b284-42b8-885d-1de0d747582e', NULL, NULL, N'f7fc43f0-da66-4975-9022-1e2896430719', 1249.0000, 100, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'f6929ee0-b284-42b8-885d-1de0d747582e', NULL, NULL, N'c1436806-0516-49de-afb1-202bf4cdccb8', 269.9900, 100, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'f6929ee0-b284-42b8-885d-1de0d747582e', NULL, NULL, N'1322f657-1e4f-433c-9c0b-7070deb38aef', 369.9900, 100, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'f6929ee0-b284-42b8-885d-1de0d747582e', NULL, NULL, N'2f43820a-741e-4d03-b0b8-8fac7aef22b9', 479.0000, 100, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'f6929ee0-b284-42b8-885d-1de0d747582e', NULL, NULL, N'4b4f5f53-b619-4f2a-9470-9ebc32b50886', 1599.0000, 100, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'f6929ee0-b284-42b8-885d-1de0d747582e', NULL, NULL, N'ac56c74e-3c96-48f2-b1da-b26ff5ad9303', 178.9900, 100, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'f6929ee0-b284-42b8-885d-1de0d747582e', NULL, NULL, N'ac6456c0-5bab-419d-9cd8-c22294d30a1a', 299.9900, 100, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'f6929ee0-b284-42b8-885d-1de0d747582e', NULL, NULL, N'a369187b-48be-4587-8fd3-c8b97fec1eec', 79.9900, 100, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'f6929ee0-b284-42b8-885d-1de0d747582e', NULL, NULL, N'd2cf5c8f-4aa9-4b57-8882-efad0f5d7f22', 2199.0000, 100, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'30c680c5-9f8b-4e73-a1d1-674351df70e9', NULL, NULL, N'dd9e1bb2-f9b4-491f-b4b1-1c39be571ca0', 199.9900, 50, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'caf4ab47-df30-457b-8c4e-921ca8293f12', NULL, NULL, N'2f43820a-741e-4d03-b0b8-8fac7aef22b9', 479.0000, 50, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'caf4ab47-df30-457b-8c4e-921ca8293f12', NULL, NULL, N'4b4f5f53-b619-4f2a-9470-9ebc32b50886', 1599.0000, 50, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'caf4ab47-df30-457b-8c4e-921ca8293f12', NULL, NULL, N'ac56c74e-3c96-48f2-b1da-b26ff5ad9303', 178.9900, 50, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'caf4ab47-df30-457b-8c4e-921ca8293f12', NULL, NULL, N'ac6456c0-5bab-419d-9cd8-c22294d30a1a', 299.9900, 50, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'caf4ab47-df30-457b-8c4e-921ca8293f12', NULL, NULL, N'a369187b-48be-4587-8fd3-c8b97fec1eec', 79.9900, 50, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'caf4ab47-df30-457b-8c4e-921ca8293f12', NULL, NULL, N'd2cf5c8f-4aa9-4b57-8882-efad0f5d7f22', 2199.0000, 50, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'8b49b464-be2c-4d78-9d8b-d4cb7235c6a8', NULL, NULL, N'dd9e1bb2-f9b4-491f-b4b1-1c39be571ca0', 199.9900, 1, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'8b49b464-be2c-4d78-9d8b-d4cb7235c6a8', NULL, NULL, N'f7fc43f0-da66-4975-9022-1e2896430719', 1249.0000, 1, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'8b49b464-be2c-4d78-9d8b-d4cb7235c6a8', NULL, NULL, N'c1436806-0516-49de-afb1-202bf4cdccb8', 269.9900, 1, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'8b49b464-be2c-4d78-9d8b-d4cb7235c6a8', NULL, NULL, N'1322f657-1e4f-433c-9c0b-7070deb38aef', 369.9900, 1, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'8b49b464-be2c-4d78-9d8b-d4cb7235c6a8', NULL, NULL, N'2f43820a-741e-4d03-b0b8-8fac7aef22b9', 479.0000, 1, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'8b49b464-be2c-4d78-9d8b-d4cb7235c6a8', NULL, NULL, N'4b4f5f53-b619-4f2a-9470-9ebc32b50886', 1599.0000, 1, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'8b49b464-be2c-4d78-9d8b-d4cb7235c6a8', NULL, NULL, N'ac56c74e-3c96-48f2-b1da-b26ff5ad9303', 178.9900, 1, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'8b49b464-be2c-4d78-9d8b-d4cb7235c6a8', NULL, NULL, N'ac6456c0-5bab-419d-9cd8-c22294d30a1a', 299.9900, 1, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'8b49b464-be2c-4d78-9d8b-d4cb7235c6a8', NULL, NULL, N'a369187b-48be-4587-8fd3-c8b97fec1eec', 79.9900, 1, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'8b49b464-be2c-4d78-9d8b-d4cb7235c6a8', NULL, NULL, N'd2cf5c8f-4aa9-4b57-8882-efad0f5d7f22', 2199.0000, 1, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'1fa45888-98dc-469f-ad32-e411daf59f44', NULL, NULL, N'c1436806-0516-49de-afb1-202bf4cdccb8', 269.9900, 50, 0)
INSERT [dbo].[OrderDetails] ([Id], [Code], [OrderId], [ProductId], [UnitPrice], [Quantity], [Discount]) VALUES (N'1fa45888-98dc-469f-ad32-e411daf59f44', NULL, NULL, N'1322f657-1e4f-433c-9c0b-7070deb38aef', 369.9900, 50, 0)
INSERT [dbo].[OrderHead] ([Id], [Code], [OrderId], [CustomerId], [EmployeeId], [OrderDate], [RequiredDate], [ShippedDate], [ShipVia], [Freight], [ShipName], [ShipAddress], [ShipCity], [ShipRegion], [ShipPostalCode], [ShipCountry], [OrderType], [OrderStatus], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'35d8244c-ee0b-48e3-a244-0e4aae4da93e', NULL, NULL, N'7d4cbbe7-7904-4704-ba50-04393ded034b', NULL, CAST(N'2018-04-23T17:17:08.883' AS DateTime), NULL, CAST(N'2018-04-23T17:18:31.210' AS DateTime), NULL, 0.0000, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, CAST(N'2018-04-23T17:17:08.883' AS DateTime), CAST(N'2018-04-23T17:18:31.210' AS DateTime))
INSERT [dbo].[OrderHead] ([Id], [Code], [OrderId], [CustomerId], [EmployeeId], [OrderDate], [RequiredDate], [ShippedDate], [ShipVia], [Freight], [ShipName], [ShipAddress], [ShipCity], [ShipRegion], [ShipPostalCode], [ShipCountry], [OrderType], [OrderStatus], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'f6929ee0-b284-42b8-885d-1de0d747582e', NULL, NULL, N'dbcf20b8-ab0a-41e0-a026-71c188f0061e', NULL, CAST(N'2018-04-23T17:15:22.983' AS DateTime), NULL, CAST(N'2018-04-23T17:15:44.433' AS DateTime), NULL, 0.0000, NULL, N'Wellington', NULL, NULL, NULL, NULL, 0, 1, NULL, CAST(N'2018-04-23T17:15:22.983' AS DateTime), CAST(N'2018-04-23T17:15:44.433' AS DateTime))
INSERT [dbo].[OrderHead] ([Id], [Code], [OrderId], [CustomerId], [EmployeeId], [OrderDate], [RequiredDate], [ShippedDate], [ShipVia], [Freight], [ShipName], [ShipAddress], [ShipCity], [ShipRegion], [ShipPostalCode], [ShipCountry], [OrderType], [OrderStatus], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'30c680c5-9f8b-4e73-a1d1-674351df70e9', NULL, NULL, N'8c23a1b4-1193-48e6-8203-001799a26a78', NULL, CAST(N'2018-04-23T17:16:54.127' AS DateTime), NULL, CAST(N'2018-04-23T17:18:22.700' AS DateTime), NULL, 0.0000, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, CAST(N'2018-04-23T17:16:54.127' AS DateTime), CAST(N'2018-04-23T17:18:22.700' AS DateTime))
INSERT [dbo].[OrderHead] ([Id], [Code], [OrderId], [CustomerId], [EmployeeId], [OrderDate], [RequiredDate], [ShippedDate], [ShipVia], [Freight], [ShipName], [ShipAddress], [ShipCity], [ShipRegion], [ShipPostalCode], [ShipCountry], [OrderType], [OrderStatus], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'caf4ab47-df30-457b-8c4e-921ca8293f12', NULL, NULL, N'a491d462-a7fe-4c38-a651-1699f25c956a', NULL, CAST(N'2018-04-23T17:18:17.770' AS DateTime), NULL, CAST(N'2018-04-23T17:18:26.270' AS DateTime), NULL, 0.0000, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, CAST(N'2018-04-23T17:18:17.770' AS DateTime), CAST(N'2018-04-23T17:18:26.270' AS DateTime))
INSERT [dbo].[OrderHead] ([Id], [Code], [OrderId], [CustomerId], [EmployeeId], [OrderDate], [RequiredDate], [ShippedDate], [ShipVia], [Freight], [ShipName], [ShipAddress], [ShipCity], [ShipRegion], [ShipPostalCode], [ShipCountry], [OrderType], [OrderStatus], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'8b49b464-be2c-4d78-9d8b-d4cb7235c6a8', NULL, NULL, N'5bb98e5b-d01c-4741-857f-a407a769354d', NULL, CAST(N'2018-04-23T18:18:31.050' AS DateTime), NULL, NULL, NULL, 0.0000, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, NULL, CAST(N'2018-04-23T18:18:31.050' AS DateTime), CAST(N'2018-04-23T18:18:31.050' AS DateTime))
INSERT [dbo].[OrderHead] ([Id], [Code], [OrderId], [CustomerId], [EmployeeId], [OrderDate], [RequiredDate], [ShippedDate], [ShipVia], [Freight], [ShipName], [ShipAddress], [ShipCity], [ShipRegion], [ShipPostalCode], [ShipCountry], [OrderType], [OrderStatus], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'1fa45888-98dc-469f-ad32-e411daf59f44', NULL, NULL, N'22dcaa9d-d75f-4e4d-87f1-04688dc30efd', NULL, CAST(N'2018-04-23T17:17:30.103' AS DateTime), NULL, CAST(N'2018-04-23T17:18:28.580' AS DateTime), NULL, 0.0000, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, CAST(N'2018-04-23T17:17:30.103' AS DateTime), CAST(N'2018-04-23T17:18:28.580' AS DateTime))
INSERT [dbo].[Products] ([Id], [Code], [ProductId], [ProductName], [SupplierId], [CategoryId], [QuantityPerUnit], [UnitPrice], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'dd9e1bb2-f9b4-491f-b4b1-1c39be571ca0', NULL, NULL, N'Drive 51 LM', N'15b7eaa8-5d11-488a-b9d1-5246f2904056', N'8086501a-e72c-4705-8fdb-19ca24e0098e', NULL, 199.9900, NULL, CAST(N'2018-04-23T16:13:56.397' AS DateTime), CAST(N'2018-04-23T16:13:56.397' AS DateTime), N'Garmin Drive 51 LM')
INSERT [dbo].[Products] ([Id], [Code], [ProductId], [ProductName], [SupplierId], [CategoryId], [QuantityPerUnit], [UnitPrice], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'f7fc43f0-da66-4975-9022-1e2896430719', NULL, NULL, N'iPhone 8', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'0a4badb3-31f8-400b-ad13-d3717b403d4d', NULL, 1249.0000, NULL, CAST(N'2018-04-23T16:05:42.047' AS DateTime), CAST(N'2018-04-23T16:05:42.047' AS DateTime), N'Apple iPhone 8 - 64GB Space Grey')
INSERT [dbo].[Products] ([Id], [Code], [ProductId], [ProductName], [SupplierId], [CategoryId], [QuantityPerUnit], [UnitPrice], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'c1436806-0516-49de-afb1-202bf4cdccb8', NULL, NULL, N'Dash Cam', N'15b7eaa8-5d11-488a-b9d1-5246f2904056', N'c3f6a0f5-8c19-4bd9-87fe-270ce8251f5d', NULL, 269.9900, NULL, CAST(N'2018-04-23T16:14:33.723' AS DateTime), CAST(N'2018-04-23T16:14:33.723' AS DateTime), N'Garmin Dash Cam 55')
INSERT [dbo].[Products] ([Id], [Code], [ProductId], [ProductName], [SupplierId], [CategoryId], [QuantityPerUnit], [UnitPrice], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'1322f657-1e4f-433c-9c0b-7070deb38aef', NULL, NULL, N'Vacuum', N'cc7a12ea-4705-4fa7-a85d-f864948b5403', N'bb79f1c5-ea3f-41da-9de3-221b4350ab53', NULL, 369.9900, NULL, CAST(N'2018-04-23T16:08:41.687' AS DateTime), CAST(N'2018-04-23T16:08:41.687' AS DateTime), N'Electrolux Ultrasilencer Origin Vacuum')
INSERT [dbo].[Products] ([Id], [Code], [ProductId], [ProductName], [SupplierId], [CategoryId], [QuantityPerUnit], [UnitPrice], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'2f43820a-741e-4d03-b0b8-8fac7aef22b9', NULL, NULL, N'iPad', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'020b3d9d-a5b1-4aa2-93ea-1da389bd8412', NULL, 479.0000, NULL, CAST(N'2018-04-23T16:09:34.397' AS DateTime), CAST(N'2018-04-23T16:09:34.397' AS DateTime), N'Apple iPad 9.7-inch Wi-Fi 32GB Space Grey')
INSERT [dbo].[Products] ([Id], [Code], [ProductId], [ProductName], [SupplierId], [CategoryId], [QuantityPerUnit], [UnitPrice], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'4b4f5f53-b619-4f2a-9470-9ebc32b50886', NULL, NULL, N'Galaxy S9', N'aebbd272-aab9-4783-80da-ceeb3f416703', N'cff7a4a2-0d08-4956-9d9b-dffd8f787c4b', NULL, 1599.0000, NULL, CAST(N'2018-04-23T16:03:50.353' AS DateTime), CAST(N'2018-04-23T16:03:50.353' AS DateTime), N'Samsung Galaxy S9 Smartphone 256GB Midnight Black')
INSERT [dbo].[Products] ([Id], [Code], [ProductId], [ProductName], [SupplierId], [CategoryId], [QuantityPerUnit], [UnitPrice], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'ac56c74e-3c96-48f2-b1da-b26ff5ad9303', NULL, NULL, N'Sharp Microwave', N'41e22f9c-0dbc-4a7f-b0ca-274ff84e6c62', N'3813ca38-ae4f-4e56-b6e8-81394626a428', NULL, 178.9900, NULL, CAST(N'2018-04-23T16:05:12.253' AS DateTime), CAST(N'2018-04-23T16:05:12.253' AS DateTime), N'Sharp 28 Litre Midsize Microwave')
INSERT [dbo].[Products] ([Id], [Code], [ProductId], [ProductName], [SupplierId], [CategoryId], [QuantityPerUnit], [UnitPrice], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'ac6456c0-5bab-419d-9cd8-c22294d30a1a', NULL, NULL, N'Oven', N'8cf7f441-aa3b-4e9f-a6c4-25c4f74d047f', N'203cc0f3-5169-4df1-b30f-f8b7d122d54d', NULL, 299.9900, NULL, CAST(N'2018-04-23T16:06:46.853' AS DateTime), CAST(N'2018-04-23T16:06:46.853' AS DateTime), N'Breville Toast & Roast Convection Oven')
INSERT [dbo].[Products] ([Id], [Code], [ProductId], [ProductName], [SupplierId], [CategoryId], [QuantityPerUnit], [UnitPrice], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'a369187b-48be-4587-8fd3-c8b97fec1eec', NULL, NULL, N'Fan Heater', N'8b15442b-c791-42dd-a3b4-cc269989e7c8', N'a4a742bc-e5c6-4211-b396-eaaa9a3bb914', NULL, 79.9900, NULL, CAST(N'2018-04-23T16:06:19.250' AS DateTime), CAST(N'2018-04-23T16:06:19.250' AS DateTime), N'Sheffield 2000W Ceramic Tower Fan Heater')
INSERT [dbo].[Products] ([Id], [Code], [ProductId], [ProductName], [SupplierId], [CategoryId], [QuantityPerUnit], [UnitPrice], [IsValid], [CreatedTime], [ModifiedTime], [Description]) VALUES (N'd2cf5c8f-4aa9-4b57-8882-efad0f5d7f22', NULL, NULL, N'MacBook Pro', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'df237f95-f518-4519-8cd8-b11c103ac477', NULL, 2199.0000, NULL, CAST(N'2018-04-23T16:04:36.233' AS DateTime), CAST(N'2018-04-23T16:04:36.233' AS DateTime), N'Apple 13-inch MacBook Pro 128GB - Space Grey')
INSERT [dbo].[Role] ([Id], [Code], [Name], [CreateUserId], [CreateTime], [Remarks], [IsSystem], [IsVisible]) VALUES (N'8a98d1f5-b13f-4134-bdbf-0d8921efc311', N'Senior Staff', N'Senior Staff', NULL, CAST(N'2018-04-23T16:34:08.853' AS DateTime), N'Role for Senior Staff', NULL, NULL)
INSERT [dbo].[Role] ([Id], [Code], [Name], [CreateUserId], [CreateTime], [Remarks], [IsSystem], [IsVisible]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'System administrator', N'System administrator', NULL, CAST(N'2018-04-23T14:13:02.677' AS DateTime), N'Role for system administrator.', NULL, NULL)
INSERT [dbo].[Role] ([Id], [Code], [Name], [CreateUserId], [CreateTime], [Remarks], [IsSystem], [IsVisible]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'Guest', N'Guest', NULL, CAST(N'2018-04-23T14:13:33.130' AS DateTime), N'Role for guest.', NULL, NULL)
INSERT [dbo].[Role] ([Id], [Code], [Name], [CreateUserId], [CreateTime], [Remarks], [IsSystem], [IsVisible]) VALUES (N'4e4ab70a-fea6-412e-8b29-3dae74f75c4c', N'middle management', N'middle management', NULL, CAST(N'2018-04-23T16:33:25.777' AS DateTime), N'Role for middle management', NULL, NULL)
INSERT [dbo].[Role] ([Id], [Code], [Name], [CreateUserId], [CreateTime], [Remarks], [IsSystem], [IsVisible]) VALUES (N'6a083f5a-572c-4a6a-92c6-4a322941719e', N'HR', N'HR', NULL, CAST(N'2018-04-23T14:15:42.290' AS DateTime), N'Role for HR.', NULL, NULL)
INSERT [dbo].[Role] ([Id], [Code], [Name], [CreateUserId], [CreateTime], [Remarks], [IsSystem], [IsVisible]) VALUES (N'12d14fbe-2663-42a5-b0b2-5baaace9f919', N'Top Management', N'Top Management', NULL, NULL, N'Role for top Management', NULL, NULL)
INSERT [dbo].[Role] ([Id], [Code], [Name], [CreateUserId], [CreateTime], [Remarks], [IsSystem], [IsVisible]) VALUES (N'2ca40b1a-6405-40b3-b5da-afdb170ea427', N'Business', N'Business', NULL, CAST(N'2018-04-23T14:15:15.113' AS DateTime), N'Role for business.', NULL, NULL)
INSERT [dbo].[Role] ([Id], [Code], [Name], [CreateUserId], [CreateTime], [Remarks], [IsSystem], [IsVisible]) VALUES (N'e61e989f-d99a-45d1-a41d-bea96eb7f83b', N'Junior staff', N'Junior staff', NULL, CAST(N'2018-04-23T16:34:24.220' AS DateTime), N'Role for Junior staff', NULL, NULL)
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'a284ffe5-ea3b-4819-b850-203e7782602f')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'b917d3ee-7dbe-43c6-a2d4-351e845e9efa')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'c35feea7-2503-41e1-ab08-4f42a3962d1e')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'2dd3da35-df54-4dc3-beb7-5ee42186ed96')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'c06a93dd-5db7-4904-ae58-6a416c9a7a7d')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'343e2e13-5c67-4595-ac42-70fa25cce8bc')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'1543d014-5f72-48bd-b8c7-7cc2f9bc635b')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'7d997108-5a42-465f-8512-7ee3a069d7e1')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'2788c3c1-7361-43e2-a62a-84d1c6446ba1')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'1666c72c-0d45-4db2-989c-963a672f2f6d')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'9b610e8b-1928-42ba-9532-adadf2f5dac4')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'c30f1d97-4793-4aca-87be-b568b9dfb85c')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'26ae1eac-941d-4bbd-b3dc-bfa4426df3ab')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'31bc7680-d0c6-4502-aa50-e05037d1409f')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'2e58da1d-de5b-4a15-b8fa-e30f2ff779c0')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'73268514-5f69-48db-b7b6-ee118436e81d')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'3cbf68b6-4be1-40ea-9a56-f04a3c70244f')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'1788f790-6646-441c-9c85-fc00908150ea')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'd53abc13-bd2a-4a2b-bda4-3322acfd3767', N'28d70f0c-dcf7-4a5b-bfe5-fd03a48fa322')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'a284ffe5-ea3b-4819-b850-203e7782602f')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'b917d3ee-7dbe-43c6-a2d4-351e845e9efa')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'c35feea7-2503-41e1-ab08-4f42a3962d1e')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'2dd3da35-df54-4dc3-beb7-5ee42186ed96')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'343e2e13-5c67-4595-ac42-70fa25cce8bc')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'1543d014-5f72-48bd-b8c7-7cc2f9bc635b')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'2788c3c1-7361-43e2-a62a-84d1c6446ba1')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'1666c72c-0d45-4db2-989c-963a672f2f6d')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'9b610e8b-1928-42ba-9532-adadf2f5dac4')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'26ae1eac-941d-4bbd-b3dc-bfa4426df3ab')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'2e58da1d-de5b-4a15-b8fa-e30f2ff779c0')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'73268514-5f69-48db-b7b6-ee118436e81d')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'3cbf68b6-4be1-40ea-9a56-f04a3c70244f')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'5f4dc196-943d-4994-8bd0-3384bf3d4185', N'1788f790-6646-441c-9c85-fc00908150ea')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'6a083f5a-572c-4a6a-92c6-4a322941719e', N'9b610e8b-1928-42ba-9532-adadf2f5dac4')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'6a083f5a-572c-4a6a-92c6-4a322941719e', N'3cbf68b6-4be1-40ea-9a56-f04a3c70244f')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'2ca40b1a-6405-40b3-b5da-afdb170ea427', N'c35feea7-2503-41e1-ab08-4f42a3962d1e')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'2ca40b1a-6405-40b3-b5da-afdb170ea427', N'1543d014-5f72-48bd-b8c7-7cc2f9bc635b')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'2ca40b1a-6405-40b3-b5da-afdb170ea427', N'1666c72c-0d45-4db2-989c-963a672f2f6d')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'2ca40b1a-6405-40b3-b5da-afdb170ea427', N'26ae1eac-941d-4bbd-b3dc-bfa4426df3ab')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'2ca40b1a-6405-40b3-b5da-afdb170ea427', N'2e58da1d-de5b-4a15-b8fa-e30f2ff779c0')
INSERT [dbo].[RoleMenu] ([RoleId], [MenuId]) VALUES (N'2ca40b1a-6405-40b3-b5da-afdb170ea427', N'1788f790-6646-441c-9c85-fc00908150ea')
INSERT [dbo].[Stocks] ([Id], [Code], [StockID], [ProductId], [ProductName], [SupplierID], [CategoryID], [Quantity], [UnitPrice], [Amount], [CreatedTime], [ModifiedTime]) VALUES (N'38e1dd64-43b5-4133-9069-03fdd5ce07c3', N'', N'', N'dd9e1bb2-f9b4-491f-b4b1-1c39be571ca0', N'Drive 51 LM', N'15b7eaa8-5d11-488a-b9d1-5246f2904056', N'8086501a-e72c-4705-8fdb-19ca24e0098e', 50, 199.9900, 9999.5000, CAST(N'2018-04-23T17:15:44.433' AS DateTime), CAST(N'2018-04-23T17:18:22.717' AS DateTime))
INSERT [dbo].[Stocks] ([Id], [Code], [StockID], [ProductId], [ProductName], [SupplierID], [CategoryID], [Quantity], [UnitPrice], [Amount], [CreatedTime], [ModifiedTime]) VALUES (N'a6a4bfdd-568d-4c72-95a5-12ee2775f705', N'', N'', N'a369187b-48be-4587-8fd3-c8b97fec1eec', N'Fan Heater', N'8b15442b-c791-42dd-a3b4-cc269989e7c8', N'a4a742bc-e5c6-4211-b396-eaaa9a3bb914', 50, 79.9900, 3999.5000, CAST(N'2018-04-23T17:15:44.450' AS DateTime), CAST(N'2018-04-23T17:18:26.287' AS DateTime))
INSERT [dbo].[Stocks] ([Id], [Code], [StockID], [ProductId], [ProductName], [SupplierID], [CategoryID], [Quantity], [UnitPrice], [Amount], [CreatedTime], [ModifiedTime]) VALUES (N'969a7524-9318-447c-bc3c-1db06fea619d', N'', N'', N'd2cf5c8f-4aa9-4b57-8882-efad0f5d7f22', N'MacBook Pro', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'df237f95-f518-4519-8cd8-b11c103ac477', 50, 2199.0000, 109950.0000, CAST(N'2018-04-23T17:15:44.450' AS DateTime), CAST(N'2018-04-23T17:18:26.287' AS DateTime))
INSERT [dbo].[Stocks] ([Id], [Code], [StockID], [ProductId], [ProductName], [SupplierID], [CategoryID], [Quantity], [UnitPrice], [Amount], [CreatedTime], [ModifiedTime]) VALUES (N'a6596618-22ee-4930-a76c-428d46c362e7', N'', N'', N'c1436806-0516-49de-afb1-202bf4cdccb8', N'Dash Cam', N'15b7eaa8-5d11-488a-b9d1-5246f2904056', N'c3f6a0f5-8c19-4bd9-87fe-270ce8251f5d', 50, 269.9900, 13499.5000, CAST(N'2018-04-23T17:15:44.450' AS DateTime), CAST(N'2018-04-23T17:18:28.580' AS DateTime))
INSERT [dbo].[Stocks] ([Id], [Code], [StockID], [ProductId], [ProductName], [SupplierID], [CategoryID], [Quantity], [UnitPrice], [Amount], [CreatedTime], [ModifiedTime]) VALUES (N'18f99e5d-f17e-4046-9da5-4cdcf458a0f5', N'', N'', N'ac6456c0-5bab-419d-9cd8-c22294d30a1a', N'Oven', N'8cf7f441-aa3b-4e9f-a6c4-25c4f74d047f', N'203cc0f3-5169-4df1-b30f-f8b7d122d54d', 50, 299.9900, 14999.5000, CAST(N'2018-04-23T17:15:44.450' AS DateTime), CAST(N'2018-04-23T17:18:26.287' AS DateTime))
INSERT [dbo].[Stocks] ([Id], [Code], [StockID], [ProductId], [ProductName], [SupplierID], [CategoryID], [Quantity], [UnitPrice], [Amount], [CreatedTime], [ModifiedTime]) VALUES (N'5f422f87-1f5a-4ea4-b0fe-83c021d1367c', N'', N'', N'1322f657-1e4f-433c-9c0b-7070deb38aef', N'Vacuum', N'cc7a12ea-4705-4fa7-a85d-f864948b5403', N'bb79f1c5-ea3f-41da-9de3-221b4350ab53', 50, 369.9900, 18499.5000, CAST(N'2018-04-23T17:15:44.450' AS DateTime), CAST(N'2018-04-23T17:18:28.580' AS DateTime))
INSERT [dbo].[Stocks] ([Id], [Code], [StockID], [ProductId], [ProductName], [SupplierID], [CategoryID], [Quantity], [UnitPrice], [Amount], [CreatedTime], [ModifiedTime]) VALUES (N'153a389b-c7d1-406c-b8f6-87c537a4fc18', N'', N'', N'f7fc43f0-da66-4975-9022-1e2896430719', N'iPhone 8', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'0a4badb3-31f8-400b-ad13-d3717b403d4d', 50, 1249.0000, 62450.0000, CAST(N'2018-04-23T17:15:44.450' AS DateTime), CAST(N'2018-04-23T17:18:31.210' AS DateTime))
INSERT [dbo].[Stocks] ([Id], [Code], [StockID], [ProductId], [ProductName], [SupplierID], [CategoryID], [Quantity], [UnitPrice], [Amount], [CreatedTime], [ModifiedTime]) VALUES (N'9b573d4c-09bc-4271-823e-9f3ddcc18e62', N'', N'', N'ac56c74e-3c96-48f2-b1da-b26ff5ad9303', N'Sharp Microwave', N'41e22f9c-0dbc-4a7f-b0ca-274ff84e6c62', N'3813ca38-ae4f-4e56-b6e8-81394626a428', 50, 178.9900, 8949.5000, CAST(N'2018-04-23T17:15:44.450' AS DateTime), CAST(N'2018-04-23T17:18:26.287' AS DateTime))
INSERT [dbo].[Stocks] ([Id], [Code], [StockID], [ProductId], [ProductName], [SupplierID], [CategoryID], [Quantity], [UnitPrice], [Amount], [CreatedTime], [ModifiedTime]) VALUES (N'3ecd2b64-929f-448c-a64c-a9934722e9ce', N'', N'', N'2f43820a-741e-4d03-b0b8-8fac7aef22b9', N'iPad', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'020b3d9d-a5b1-4aa2-93ea-1da389bd8412', 50, 479.0000, 23950.0000, CAST(N'2018-04-23T17:15:44.450' AS DateTime), CAST(N'2018-04-23T17:18:26.270' AS DateTime))
INSERT [dbo].[Stocks] ([Id], [Code], [StockID], [ProductId], [ProductName], [SupplierID], [CategoryID], [Quantity], [UnitPrice], [Amount], [CreatedTime], [ModifiedTime]) VALUES (N'83b8ad5d-0d84-466f-9fee-cbb460c62bb6', N'', N'', N'4b4f5f53-b619-4f2a-9470-9ebc32b50886', N'Galaxy S9', N'aebbd272-aab9-4783-80da-ceeb3f416703', N'cff7a4a2-0d08-4956-9d9b-dffd8f787c4b', 50, 1599.0000, 79950.0000, CAST(N'2018-04-23T17:15:44.450' AS DateTime), CAST(N'2018-04-23T17:18:26.287' AS DateTime))
INSERT [dbo].[Suppliers] ([Id], [Code], [SupplierId], [SupplierName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [HomePage], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'8cf7f441-aa3b-4e9f-a6c4-25c4f74d047f', NULL, NULL, N'Breville', N'Customer Service', NULL, N'Private Bag 94411 Manukau 2163,', N'Auckland', NULL, NULL, N'New Zealand', N'0800 273 845', NULL, N'https://breville.co.nz/', NULL, CAST(N'2018-04-23T15:27:25.377' AS DateTime), CAST(N'2018-04-23T15:28:38.763' AS DateTime))
INSERT [dbo].[Suppliers] ([Id], [Code], [SupplierId], [SupplierName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [HomePage], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'41e22f9c-0dbc-4a7f-b0ca-274ff84e6c62', NULL, NULL, N'SHARP', N'Customer Care', NULL, N'59 Hugo Johnston Dr, Penrose', N'Auckland', NULL, N'1061', N'New Zealand', N'0800 501 201', NULL, N'https://www.sharp.net.nz/', NULL, CAST(N'2018-04-23T15:29:47.247' AS DateTime), CAST(N'2018-04-23T15:29:57.930' AS DateTime))
INSERT [dbo].[Suppliers] ([Id], [Code], [SupplierId], [SupplierName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [HomePage], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'15b7eaa8-5d11-488a-b9d1-5246f2904056', NULL, NULL, N'Garmin', N'Support Center', NULL, N'30 Clay Place', N'Eastern Creek', N'NSW', N'2766', N'Australasia', N'2766', NULL, N'https://www.garmin.com/en-NZ/', NULL, CAST(N'2018-04-23T16:12:58.200' AS DateTime), CAST(N'2018-04-23T16:12:58.200' AS DateTime))
INSERT [dbo].[Suppliers] ([Id], [Code], [SupplierId], [SupplierName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [HomePage], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'8b15442b-c791-42dd-a3b4-cc269989e7c8', NULL, NULL, N'Sheffield', N'PO BOX', NULL, NULL, N'Auckland', NULL, N'1644', N'New Zealand', N'132-398', NULL, N'https://www.sheffieldappliances.co.nz/', NULL, CAST(N'2018-04-23T15:35:52.980' AS DateTime), CAST(N'2018-04-23T16:08:13.613' AS DateTime))
INSERT [dbo].[Suppliers] ([Id], [Code], [SupplierId], [SupplierName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [HomePage], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'aebbd272-aab9-4783-80da-ceeb3f416703', NULL, NULL, N'Samsung', N'Phone Support', NULL, N'24 The Warehouse Way', N'Auckland', NULL, N'0627', N'New Zealand', N'0800 726 786', NULL, N'http://www.samsung.com/nz/', NULL, CAST(N'2018-04-23T15:24:13.000' AS DateTime), CAST(N'2018-04-23T15:24:13.000' AS DateTime))
INSERT [dbo].[Suppliers] ([Id], [Code], [SupplierId], [SupplierName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [HomePage], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'7212673c-3c5c-46c3-bfce-f77d40b30360', NULL, NULL, N'Apple Inc.', N'Apple Store', NULL, NULL, N'Cupertino', N'California', NULL, N'USA', N'0800 692 7753', NULL, N'https://www.apple.com/', NULL, CAST(N'2018-04-23T15:18:57.260' AS DateTime), CAST(N'2018-04-23T15:20:53.807' AS DateTime))
INSERT [dbo].[Suppliers] ([Id], [Code], [SupplierId], [SupplierName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [HomePage], [IsValid], [CreatedTime], [ModifiedTime]) VALUES (N'cc7a12ea-4705-4fa7-a85d-f864948b5403', NULL, NULL, N'Electrolux', N'Products Division', NULL, N'3 Niall Burgess Rd, Mount Wellington,', N'Auckland', N'Westfield 1060', NULL, N'New Zealand', N'09-573 2220', NULL, N'https://www.electrolux.co.nz/', NULL, CAST(N'2018-04-23T15:33:16.517' AS DateTime), CAST(N'2018-04-23T15:33:16.517' AS DateTime))
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'5f066290-a2f3-4c36-b7c2-016e44e051e7', N'', N'114', N'ac56c74e-3c96-48f2-b1da-b26ff5ad9303', N'Sharp Microwave', N'41e22f9c-0dbc-4a7f-b0ca-274ff84e6c62', N'3813ca38-ae4f-4e56-b6e8-81394626a428', 50, 178.9900, 8949.5000, 1, CAST(N'2018-04-23T17:18:26.287' AS DateTime), N'a491d462-a7fe-4c38-a651-1699f25c956a')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'95cce5bd-15a0-4959-8ce2-2cc1cba8b83d', N'', N'117', N'd2cf5c8f-4aa9-4b57-8882-efad0f5d7f22', N'MacBook Pro', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'df237f95-f518-4519-8cd8-b11c103ac477', 50, 2199.0000, 109950.0000, 1, CAST(N'2018-04-23T17:18:26.287' AS DateTime), N'a491d462-a7fe-4c38-a651-1699f25c956a')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'904b1952-3068-4dfe-b609-46c58a4f7575', N'', N'119', N'1322f657-1e4f-433c-9c0b-7070deb38aef', N'Vacuum', N'cc7a12ea-4705-4fa7-a85d-f864948b5403', N'bb79f1c5-ea3f-41da-9de3-221b4350ab53', 50, 369.9900, 18499.5000, 1, CAST(N'2018-04-23T17:18:28.580' AS DateTime), N'22dcaa9d-d75f-4e4d-87f1-04688dc30efd')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'276522de-126e-49f2-82ad-549901327151', N'', N'105', N'2f43820a-741e-4d03-b0b8-8fac7aef22b9', N'iPad', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'020b3d9d-a5b1-4aa2-93ea-1da389bd8412', 100, 479.0000, 47900.0000, 0, CAST(N'2018-04-23T17:15:44.450' AS DateTime), N'dbcf20b8-ab0a-41e0-a026-71c188f0061e')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'df718dfb-e65e-4486-a13f-6b7e96ce3a84', N'', N'113', N'4b4f5f53-b619-4f2a-9470-9ebc32b50886', N'Galaxy S9', N'aebbd272-aab9-4783-80da-ceeb3f416703', N'cff7a4a2-0d08-4956-9d9b-dffd8f787c4b', 50, 1599.0000, 79950.0000, 1, CAST(N'2018-04-23T17:18:26.287' AS DateTime), N'a491d462-a7fe-4c38-a651-1699f25c956a')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'25ed1319-8078-4e59-9906-8610fb8dcdce', N'', N'106', N'4b4f5f53-b619-4f2a-9470-9ebc32b50886', N'Galaxy S9', N'aebbd272-aab9-4783-80da-ceeb3f416703', N'cff7a4a2-0d08-4956-9d9b-dffd8f787c4b', 100, 1599.0000, 159900.0000, 0, CAST(N'2018-04-23T17:15:44.450' AS DateTime), N'dbcf20b8-ab0a-41e0-a026-71c188f0061e')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'680da8a1-84c8-47cf-8da7-8f1bb604d753', N'', N'108', N'ac6456c0-5bab-419d-9cd8-c22294d30a1a', N'Oven', N'8cf7f441-aa3b-4e9f-a6c4-25c4f74d047f', N'203cc0f3-5169-4df1-b30f-f8b7d122d54d', 100, 299.9900, 29999.0000, 0, CAST(N'2018-04-23T17:15:44.450' AS DateTime), N'dbcf20b8-ab0a-41e0-a026-71c188f0061e')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'1ded1126-693b-4a1c-a8c9-9492985a9553', N'', N'111', N'dd9e1bb2-f9b4-491f-b4b1-1c39be571ca0', N'Drive 51 LM', N'15b7eaa8-5d11-488a-b9d1-5246f2904056', N'8086501a-e72c-4705-8fdb-19ca24e0098e', 50, 199.9900, 9999.5000, 1, CAST(N'2018-04-23T17:18:22.717' AS DateTime), N'8c23a1b4-1193-48e6-8203-001799a26a78')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'7042cc33-b9b6-42b0-955d-9866a5d91bda', N'', N'118', N'c1436806-0516-49de-afb1-202bf4cdccb8', N'Dash Cam', N'15b7eaa8-5d11-488a-b9d1-5246f2904056', N'c3f6a0f5-8c19-4bd9-87fe-270ce8251f5d', 50, 269.9900, 13499.5000, 1, CAST(N'2018-04-23T17:18:28.580' AS DateTime), N'22dcaa9d-d75f-4e4d-87f1-04688dc30efd')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'e543b078-a9b8-4033-a6c0-995278ec6fa0', N'', N'116', N'a369187b-48be-4587-8fd3-c8b97fec1eec', N'Fan Heater', N'8b15442b-c791-42dd-a3b4-cc269989e7c8', N'a4a742bc-e5c6-4211-b396-eaaa9a3bb914', 50, 79.9900, 3999.5000, 1, CAST(N'2018-04-23T17:18:26.287' AS DateTime), N'a491d462-a7fe-4c38-a651-1699f25c956a')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'024fd796-7c8d-4f67-82d7-a91a19cdee97', N'', N'103', N'c1436806-0516-49de-afb1-202bf4cdccb8', N'Dash Cam', N'15b7eaa8-5d11-488a-b9d1-5246f2904056', N'c3f6a0f5-8c19-4bd9-87fe-270ce8251f5d', 100, 269.9900, 26999.0000, 0, CAST(N'2018-04-23T17:15:44.450' AS DateTime), N'dbcf20b8-ab0a-41e0-a026-71c188f0061e')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'6bfb345e-4cdc-4ca0-b561-abf6e9586e51', N'', N'101', N'dd9e1bb2-f9b4-491f-b4b1-1c39be571ca0', N'Drive 51 LM', N'15b7eaa8-5d11-488a-b9d1-5246f2904056', N'8086501a-e72c-4705-8fdb-19ca24e0098e', 100, 199.9900, 19999.0000, 0, CAST(N'2018-04-23T17:15:44.433' AS DateTime), N'dbcf20b8-ab0a-41e0-a026-71c188f0061e')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'fe49c9b1-db79-4742-ae2c-ad17ad7cce5c', N'', N'102', N'f7fc43f0-da66-4975-9022-1e2896430719', N'iPhone 8', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'0a4badb3-31f8-400b-ad13-d3717b403d4d', 100, 1249.0000, 124900.0000, 0, CAST(N'2018-04-23T17:15:44.433' AS DateTime), N'dbcf20b8-ab0a-41e0-a026-71c188f0061e')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'b8a374b3-255e-4f11-bdac-b0b7828248cf', N'', N'120', N'f7fc43f0-da66-4975-9022-1e2896430719', N'iPhone 8', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'0a4badb3-31f8-400b-ad13-d3717b403d4d', 50, 1249.0000, 62450.0000, 1, CAST(N'2018-04-23T17:18:31.210' AS DateTime), N'7d4cbbe7-7904-4704-ba50-04393ded034b')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'1f4b4ff1-ff96-4a76-9448-c5038cc12702', N'', N'107', N'ac56c74e-3c96-48f2-b1da-b26ff5ad9303', N'Sharp Microwave', N'41e22f9c-0dbc-4a7f-b0ca-274ff84e6c62', N'3813ca38-ae4f-4e56-b6e8-81394626a428', 100, 178.9900, 17899.0000, 0, CAST(N'2018-04-23T17:15:44.450' AS DateTime), N'dbcf20b8-ab0a-41e0-a026-71c188f0061e')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'c70caea5-738e-4539-b211-d1194f3cbfcb', N'', N'115', N'ac6456c0-5bab-419d-9cd8-c22294d30a1a', N'Oven', N'8cf7f441-aa3b-4e9f-a6c4-25c4f74d047f', N'203cc0f3-5169-4df1-b30f-f8b7d122d54d', 50, 299.9900, 14999.5000, 1, CAST(N'2018-04-23T17:18:26.287' AS DateTime), N'a491d462-a7fe-4c38-a651-1699f25c956a')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'c5ac5733-b21f-4262-b97a-d7c842d0d62d', N'', N'104', N'1322f657-1e4f-433c-9c0b-7070deb38aef', N'Vacuum', N'cc7a12ea-4705-4fa7-a85d-f864948b5403', N'bb79f1c5-ea3f-41da-9de3-221b4350ab53', 100, 369.9900, 36999.0000, 0, CAST(N'2018-04-23T17:15:44.450' AS DateTime), N'dbcf20b8-ab0a-41e0-a026-71c188f0061e')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'62514e3e-f69c-4f0b-b9c7-dbdff9164700', N'', N'112', N'2f43820a-741e-4d03-b0b8-8fac7aef22b9', N'iPad', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'020b3d9d-a5b1-4aa2-93ea-1da389bd8412', 50, 479.0000, 23950.0000, 1, CAST(N'2018-04-23T17:18:26.270' AS DateTime), N'a491d462-a7fe-4c38-a651-1699f25c956a')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'1dbd853f-2e9c-4b72-88fe-e5e453ba34ba', N'', N'110', N'd2cf5c8f-4aa9-4b57-8882-efad0f5d7f22', N'MacBook Pro', N'7212673c-3c5c-46c3-bfce-f77d40b30360', N'df237f95-f518-4519-8cd8-b11c103ac477', 100, 2199.0000, 219900.0000, 0, CAST(N'2018-04-23T17:15:44.450' AS DateTime), N'dbcf20b8-ab0a-41e0-a026-71c188f0061e')
INSERT [dbo].[Transactions] ([Id], [Code], [TransactionId], [ProductId], [ProductName], [SupplierId], [CategoryId], [Quantity], [UnitPrice], [Amount], [RecordType], [TransactionTime], [CustomerId]) VALUES (N'c6d891c6-b460-443d-b058-ebc52ae2211a', N'', N'109', N'a369187b-48be-4587-8fd3-c8b97fec1eec', N'Fan Heater', N'8b15442b-c791-42dd-a3b4-cc269989e7c8', N'a4a742bc-e5c6-4211-b396-eaaa9a3bb914', 100, 79.9900, 7999.0000, 0, CAST(N'2018-04-23T17:15:44.450' AS DateTime), N'dbcf20b8-ab0a-41e0-a026-71c188f0061e')
INSERT [dbo].[User] ([Id], [UserName], [Password], [Name], [EMail], [MobileNumber], [Remarks], [CreateUserId], [CreateTime], [LastLoginTime], [LoginTimes], [DepartmentId], [IsDeleted], [IsSystem], [IsVisible]) VALUES (N'00000000-0000-0000-0000-000000000000', N'admin', N'0000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[User] ([Id], [UserName], [Password], [Name], [EMail], [MobileNumber], [Remarks], [CreateUserId], [CreateTime], [LastLoginTime], [LoginTimes], [DepartmentId], [IsDeleted], [IsSystem], [IsVisible]) VALUES (N'59de2437-1b6e-4b5d-b163-8be0d598f396', N'guest', N'0000', N'Guest', NULL, NULL, N'User for guest', NULL, NULL, NULL, NULL, N'd7f5a6cf-7c82-43d3-80fd-957364d11d94', NULL, NULL, NULL)
INSERT [dbo].[User] ([Id], [UserName], [Password], [Name], [EMail], [MobileNumber], [Remarks], [CreateUserId], [CreateTime], [LastLoginTime], [LoginTimes], [DepartmentId], [IsDeleted], [IsSystem], [IsVisible]) VALUES (N'9d5352b4-1e23-4509-9494-c856ae7a145f', N'ITadmin', N'0000', N'IT admin', NULL, NULL, N'IT admin', NULL, NULL, NULL, NULL, N'c85c52e9-d234-4a1e-902d-24b1a8203266', NULL, NULL, NULL)
INSERT [dbo].[User] ([Id], [UserName], [Password], [Name], [EMail], [MobileNumber], [Remarks], [CreateUserId], [CreateTime], [LastLoginTime], [LoginTimes], [DepartmentId], [IsDeleted], [IsSystem], [IsVisible]) VALUES (N'8a915075-63c4-4b1e-ac93-e5f51f47898c', N'business', N'0000', N'Business', NULL, NULL, N'User for business', NULL, CAST(N'2018-04-23T14:30:28.810' AS DateTime), NULL, NULL, N'd7f5a6cf-7c82-43d3-80fd-957364d11d94', NULL, NULL, NULL)
INSERT [dbo].[UserRole] ([UserId], [RoleId]) VALUES (N'59de2437-1b6e-4b5d-b163-8be0d598f396', N'5f4dc196-943d-4994-8bd0-3384bf3d4185')
INSERT [dbo].[UserRole] ([UserId], [RoleId]) VALUES (N'9d5352b4-1e23-4509-9494-c856ae7a145f', N'd53abc13-bd2a-4a2b-bda4-3322acfd3767')
INSERT [dbo].[UserRole] ([UserId], [RoleId]) VALUES (N'8a915075-63c4-4b1e-ac93-e5f51f47898c', N'2ca40b1a-6405-40b3-b5da-afdb170ea427')
ALTER TABLE [dbo].[Categories] ADD  CONSTRAINT [DF_Categories_IsValid]  DEFAULT ((0)) FOR [IsValid]
GO
ALTER TABLE [dbo].[Customers] ADD  CONSTRAINT [DF_Customers_IsValid]  DEFAULT ((0)) FOR [IsValid]
GO
ALTER TABLE [dbo].[Employees] ADD  CONSTRAINT [DF_Employees_IsValid]  DEFAULT ((0)) FOR [IsValid]
GO
ALTER TABLE [dbo].[OrderDetails] ADD  CONSTRAINT [DF_Order_Details_UnitPrice]  DEFAULT ((0)) FOR [UnitPrice]
GO
ALTER TABLE [dbo].[OrderDetails] ADD  CONSTRAINT [DF_Order_Details_Quantity]  DEFAULT ((1)) FOR [Quantity]
GO
ALTER TABLE [dbo].[OrderDetails] ADD  CONSTRAINT [DF_Order_Details_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[OrderHead] ADD  CONSTRAINT [DF_Orders_Freight]  DEFAULT ((0)) FOR [Freight]
GO
ALTER TABLE [dbo].[OrderHead] ADD  CONSTRAINT [DF_Orders_OrderType]  DEFAULT ((0)) FOR [OrderType]
GO
ALTER TABLE [dbo].[OrderHead] ADD  CONSTRAINT [DF_Orders_OrderStatus]  DEFAULT ((0)) FOR [OrderStatus]
GO
ALTER TABLE [dbo].[OrderHead] ADD  CONSTRAINT [DF_Orders_IsValid]  DEFAULT ((0)) FOR [IsValid]
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_UnitPrice]  DEFAULT ((0)) FOR [UnitPrice]
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_IsValid]  DEFAULT ((0)) FOR [IsValid]
GO
ALTER TABLE [dbo].[Suppliers] ADD  CONSTRAINT [DF_Suppliers_IsValid]  DEFAULT ((0)) FOR [IsValid]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Employees] FOREIGN KEY([ReportsTo])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Employees]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_Order_Details_Order Head] FOREIGN KEY([Id])
REFERENCES [dbo].[OrderHead] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_Order_Details_Order Head]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_Order_Details_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_Order_Details_Products]
GO
ALTER TABLE [dbo].[OrderHead]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[OrderHead] CHECK CONSTRAINT [FK_Orders_Customers]
GO
ALTER TABLE [dbo].[OrderHead]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Employees] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[OrderHead] CHECK CONSTRAINT [FK_Orders_Employees]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Categories] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Categories]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Suppliers] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Suppliers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Suppliers]
GO
ALTER TABLE [dbo].[RoleMenu]  WITH CHECK ADD  CONSTRAINT [FK_RoleMenu_Menu] FOREIGN KEY([MenuId])
REFERENCES [dbo].[Menu] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RoleMenu] CHECK CONSTRAINT [FK_RoleMenu_Menu]
GO
ALTER TABLE [dbo].[RoleMenu]  WITH CHECK ADD  CONSTRAINT [FK_RoleMenu_Role] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Role] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RoleMenu] CHECK CONSTRAINT [FK_RoleMenu_Role]
GO
ALTER TABLE [dbo].[Stocks]  WITH CHECK ADD  CONSTRAINT [FK_Stocks_Categories] FOREIGN KEY([CategoryID])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[Stocks] CHECK CONSTRAINT [FK_Stocks_Categories]
GO
ALTER TABLE [dbo].[Stocks]  WITH CHECK ADD  CONSTRAINT [FK_Stocks_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[Stocks] CHECK CONSTRAINT [FK_Stocks_Products]
GO
ALTER TABLE [dbo].[Stocks]  WITH CHECK ADD  CONSTRAINT [FK_Stocks_Suppliers] FOREIGN KEY([SupplierID])
REFERENCES [dbo].[Suppliers] ([Id])
GO
ALTER TABLE [dbo].[Stocks] CHECK CONSTRAINT [FK_Stocks_Suppliers]
GO
ALTER TABLE [dbo].[Transactions]  WITH CHECK ADD  CONSTRAINT [FK_Transactions_Categories] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_Categories]
GO
ALTER TABLE [dbo].[Transactions]  WITH CHECK ADD  CONSTRAINT [FK_Transactions_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_Customers]
GO
ALTER TABLE [dbo].[Transactions]  WITH CHECK ADD  CONSTRAINT [FK_Transactions_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_Products]
GO
ALTER TABLE [dbo].[Transactions]  WITH CHECK ADD  CONSTRAINT [FK_Transactions_Suppliers] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Suppliers] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_Suppliers]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Department] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Department] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Department]
GO
ALTER TABLE [dbo].[UserRole]  WITH CHECK ADD  CONSTRAINT [FK_UserRole_Role] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Role] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserRole] CHECK CONSTRAINT [FK_UserRole_Role]
GO
ALTER TABLE [dbo].[UserRole]  WITH CHECK ADD  CONSTRAINT [FK_UserRole_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserRole] CHECK CONSTRAINT [FK_UserRole_User]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [CK_Birthdate] CHECK  (([BirthDate]<getdate()))
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [CK_Birthdate]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [CK_Discount] CHECK  (([Discount]>=(0) AND [Discount]<=(1)))
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [CK_Discount]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [CK_Quantity] CHECK  (([Quantity]>(0)))
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [CK_Quantity]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [CK_UnitPrice] CHECK  (([UnitPrice]>=(0)))
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [CK_UnitPrice]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [CK_Products_UnitPrice] CHECK  (([UnitPrice]>=(0)))
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [CK_Products_UnitPrice]
GO
ALTER TABLE [dbo].[Stocks]  WITH CHECK ADD  CONSTRAINT [CK_Stocks_UnitPrice] CHECK  (([UnitPrice]>=(0)))
GO
ALTER TABLE [dbo].[Stocks] CHECK CONSTRAINT [CK_Stocks_UnitPrice]
GO
ALTER TABLE [dbo].[Transactions]  WITH CHECK ADD  CONSTRAINT [CK_Transactions_UnitPrice] CHECK  (([UnitPrice]>=(0)))
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [CK_Transactions_UnitPrice]
GO
/****** Object:  StoredProcedure [dbo].[proc_ErpDemoDB_Restore]    Script Date: 4/23/2018 6:23:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[proc_ErpDemoDB_Restore]
@rtn        int output 
AS
BEGIN TRY

DELETE FROM Transactions
DELETE FROM Stocks
DELETE FROM OrderDetails
DELETE FROM OrderHead
DELETE FROM UserRole
DELETE FROM RoleMenu
DELETE FROM [dbo].[User]
DELETE FROM [dbo].[Role]
DELETE FROM Menu
DELETE FROM Department
DELETE FROM Products
DELETE FROM Suppliers
DELETE FROM Categories
DELETE FROM Employees
DELETE FROM Customers
SET @rtn=1
END TRY
BEGIN CATCH
SET @rtn=@@ERROR
SELECT ERROR_LINE() as Line,ERROR_MESSAGE() as message1,ERROR_NUMBER() as number,  
ERROR_PROCEDURE() as proc1,ERROR_SEVERITY() as severity,ERROR_STATE() as state1  
END CATCH
GO
/****** Object:  StoredProcedure [dbo].[proc_orders_Approve]    Script Date: 4/23/2018 6:23:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[proc_orders_Approve]
@id        uniqueidentifier 
AS
DECLARE @productid uniqueidentifier
DECLARE @unitprice money
DECLARE @quantity smallint
DECLARE @discount real
DECLARE @productname NVARCHAR(40)
DECLARE @customerid uniqueidentifier
DECLARE @categoryid uniqueidentifier
DECLARE @supplierid uniqueidentifier
DECLARE @recordtype smallint
DECLARE @sql_count int;
 
DECLARE csOrderDetails CURSOR FOR  --Orders cursor
SELECT OD.ProductId,OD.UnitPrice,OD.Quantity,OD.Discount,OH.CustomerId,OH.OrderType,P.ProductName,P.CategoryId,P.SupplierId
FROM OrderDetails OD, OrderHead OH, Products P
WHERE OD.Id=OH.Id AND OD.ProductId=P.Id AND OD.Id=@id
 
BEGIN
-- Update order orderstatus to approved
UPDATE OrderHead SET OrderStatus = 1, ShippedDate = GETDATE() , ModifiedTime=GETDATE() WHERE Id = @id
OPEN csOrderDetails --Open cursor
FETCH NEXT FROM csOrderDetails INTO @productid,@unitprice,@quantity,@discount,@customerid,@recordtype,@productname,@categoryid,@supplierid
    WHILE @@FETCH_STATUS = 0  --fetch execute successfully return 0
        BEGIN
        -- Insert record into Transcations table
		INSERT INTO Transactions VALUES(NewID(),'',NEXT VALUE FOR SysSeq,@productid,@productname,@supplierid,@categoryid,@quantity,@unitprice,@unitprice*@quantity,@recordtype,GETDATE(),@customerid)
		-- Insert or Update Stocks table
		SELECT @sql_count = COUNT(*) FROM Stocks WHERE ProductId = @productid
		IF @recordtype = 0 
		BEGIN 
			IF @sql_count = 0 -- The first purchasing, insert record
			BEGIN
				INSERT INTO Stocks VALUES(NewID(),'','',@productid,@productname,@supplierid,@categoryid,@quantity,@unitprice,@unitprice*@quantity,GETDATE(),GETDATE())
			END
			ELSE IF @sql_count!= 0 -- Non first purchasing, update record
			BEGIN
				UPDATE Stocks Set Quantity = Quantity+@quantity, Amount = Amount+@unitprice*@quantity, ModifiedTime = GETDATE() WHERE ProductId = @productid
			END
		END 
		ELSE IF @recordtype = 1 
		BEGIN 
			IF @sql_count = 0 --The first sale, insert record, allow negative stock
			BEGIN
				INSERT INTO Stocks VALUES(NewID(),'','',@productid,@productname,@supplierid,@categoryid,-@quantity,@unitprice,-@unitprice*@quantity,GETDATE(),GETDATE())
			END
			ELSE IF @sql_count!= 0 -- Non first sales, update record
			BEGIN
				UPDATE Stocks Set Quantity = Quantity-@quantity, Amount = Amount-@unitprice*@quantity, ModifiedTime = GETDATE() WHERE ProductId = @productid
			END
		END
		
        FETCH NEXT FROM csOrderDetails INTO @productid,@unitprice,@quantity,@discount,@customerid,@recordtype,@productname,@categoryid,@supplierid
        END
    CLOSE csOrderDetails --Close cursor
    DEALLOCATE csOrderDetails --Delete cursor
END
GO
USE [master]
GO
ALTER DATABASE [ErpDemoDB] SET  READ_WRITE 
GO
