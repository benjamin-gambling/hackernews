# Migration `20200921235728-init`

This migration has been generated by Benjamin Gambling at 9/21/2020, 4:57:28 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Link" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"description" text   NOT NULL ,
"url" text   NOT NULL ,
"postedById" integer   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."User" (
"id" SERIAL,
"name" text   NOT NULL ,
"email" text   NOT NULL ,
"password" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Vote" (
"id" SERIAL,
"linkId" integer   NOT NULL ,
"userId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")

CREATE UNIQUE INDEX "Vote.linkId_userId_unique" ON "public"."Vote"("linkId", "userId")

ALTER TABLE "public"."Link" ADD FOREIGN KEY ("postedById")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Vote" ADD FOREIGN KEY ("linkId")REFERENCES "public"."Link"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Vote" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200921034014-add-vote-model..20200921235728-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,39 +1,37 @@
+generator client {
+  provider = "prisma-client-js"
+}
 datasource db {
-    provider = "sqlite"
-    url = "***"
+  provider = "postgresql"
+  url = "***"
 }
-generator client {
-    provider = "prisma-client-js"
-}
-
 model Link {
-    id              Int         @id @default(autoincrement())
-    createdAt       DateTime    @default(now())
-    description     String
-    url             String
-    postedBy        User?       @relation(fields: [postedById], references : [id])
-    postedById      Int? 
-    votes           Vote[]
+  id          Int      @default(autoincrement()) @id
+  createdAt   DateTime @default(now())
+  description String
+  url         String
+  postedById  Int?
+  postedBy    User?    @relation(fields: [postedById], references: [id])
+  votes       Vote[]
 }
 model User {
-    id              Int         @id @default(autoincrement())
-    name            String
-    email           String      @unique
-    password        String
-    links           Link[]
-    votes           Vote[]
+  id       Int    @default(autoincrement()) @id
+  name     String
+  email    String @unique
+  password String
+  links    Link[]
+  votes    Vote[]
 }
 model Vote {
-    id              Int         @id @default(autoincrement())
-    link            Link        @relation(fields: [linkId], references: [id])
-    linkId          Int
-    user            User        @relation(fields: [userId], references: [id])
-    userId          Int
+  id     Int  @default(autoincrement()) @id
+  linkId Int
+  userId Int
+  link   Link @relation(fields: [linkId], references: [id])
+  user   User @relation(fields: [userId], references: [id])
-    @@unique([linkId, userId])
+  @@unique([linkId, userId], name: "Vote.linkId_userId_unique")
 }
-
```

