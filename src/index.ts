import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
// ... other imports
import * as AdminJSTypeorm from "@adminjs/typeorm";
import { AppDataSource } from "./data-source";
import { Organization } from "./entity/User";

AdminJS.registerAdapter({
  Resource: AdminJSTypeorm.Resource,
  Database: AdminJSTypeorm.Database,
});

const PORT = 3001;

const start = async () => {
  const app = express();
  // Make sure you initialize the data source before you create your AdminJS instance
  await AppDataSource.initialize();
  const adminOptions = {
    // We pass Organization to `resources`
    resources: [Organization],
  };

  // an example would be "@adminjs/hapi"
  const admin = new AdminJS(adminOptions);

  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
