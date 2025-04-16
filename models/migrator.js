import migrationRunner from "node-pg-migrate";
import { resolve } from "node:path";
import database from "infra/database";

async function runMigrations({ dryRun = true } = {}) {
  let dbClient;
  try {
    dbClient = await database.getNewClient();

    const response = await migrationRunner({
      dbClient,
      dryRun,
      dir: resolve("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    });
    return response;
  } finally {
    await dbClient?.end();
  }
}

const migrator = {
  listPendingMigrations: () => runMigrations(),
  runPendingMigrations: () => runMigrations({ dryRun: false }),
};

export default migrator;
