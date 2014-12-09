USE master
go

PRINT '<<<< CREATE USER senecatest>>>>'
go
sp_dropuser senecatest
go
sp_droplogin senecatest
go
sp_addlogin senecatest,senecatest
go
sp_adduser senecatest
go
grant all to senecatest
go


PRINT "<<<< CREATE DATABASE senecatest>>>>"
go
IF EXISTS (SELECT 1 FROM master.dbo.sysdatabases WHERE name = 'senecatest')
  DROP DATABASE senecatest
go

CREATE DATABASE senecatest
go
use senecatest
go
exec sp_changedbowner 'senecatest', true
go
checkpoint
go


-----------------------------------------------------------------------------
-- DDL for Table 'senecatest.dbo.testtable'
-----------------------------------------------------------------------------
print '<<<<< CREATING Tables >>>>>'
go
use senecatest
go
setuser 'dbo'
go
create table foo (id varchar(255) not null, p1 varchar(255) null, p2 varchar(255) null, p3 varchar(255) null, seneca VARCHAR(255)  null)

create table moon_bar (id  varchar not null,
        str varchar null,
        int INT null,
        bol BIT,
        wen DATETIME null,
        mark FLOAT null,
        dec REAL null,
        arr VARCHAR(255) null,
        obj VARCHAR(255) null,
        seneca VARCHAR(125) null)

print '<<<<< ENDED CREATING Tables >>>>>'
go
