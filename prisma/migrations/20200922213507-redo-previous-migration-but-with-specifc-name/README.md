# Migration `20200922213507-redo-previous-migration-but-with-specifc-name`

This migration has been generated by Benjamin Gambling at 9/22/2020, 2:35:07 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE UNIQUE INDEX "linkId_userId" ON "public"."Vote"("linkId", "userId")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200922185958-remove---unique-field-due-to-errrors..20200922213507-redo-previous-migration-but-with-specifc-name
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Link {
   id          Int      @default(autoincrement()) @id
@@ -31,5 +31,7 @@
   linkId Int
   userId Int
   link   Link @relation(fields: [linkId], references: [id])
   user   User @relation(fields: [userId], references: [id])
+
+  @@unique([linkId, userId], name: "linkId_userId")
 }
```

