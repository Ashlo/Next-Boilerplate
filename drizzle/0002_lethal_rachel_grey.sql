CREATE TABLE "users" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"is_subscribed" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
ALTER TABLE "tasks" DROP COLUMN "is_subscribed";