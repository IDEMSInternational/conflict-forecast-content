import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("conflict_forecast");

config.google_drive.sheets_folder_ids = ["17rK56zJj_W-1ceDlSPd2QFSpnwvApHh0"];
config.google_drive.assets_folder_ids = ["1SzZiWN4hvv0snDdpd-BZYPjTC6RzC1uU"];

config.git = {
  content_repo: "https://github.com/IDEMSInternational/conflict-forecast-content.git",
  content_tag_latest: "0.2.0",
};

// Filter out 
config.app_data.assets_filter_function = (fileEntry) => !fileEntry.relativePath.includes("archive_data") && !fileEntry.relativePath.includes("uncompressed")  && !fileEntry.relativePath.includes("archive")

config.android = {
  app_id:'international.idems.conflict_forecast',
  app_name:'Conflict Forecast',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.ios = {
  app_id: 'international.idems.conflict-forecast',
  app_name: 'Conflict Forecast',
}

config.web.favicon_asset = "images/logos/bird_on_light.svg";
config.api.db_name = "conflict_forecast"

config.app_config.APP_THEMES.available = ["conflict_forecast"];
config.app_config.APP_THEMES.defaultThemeName = "conflict_forecast";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Conflict Forecast";
config.app_config.APP_HEADER_DEFAULTS.title = "Conflict Forecast";
config.app_config.NOTIFICATION_DEFAULTS.title = "Conflict Forecast";
config.app_config.NOTIFICATION_DEFAULTS.text = "Conflict Forecast";

config.error_logging = { dsn: "https://75782445fd454408ad249689e382740f@app.glitchtip.com/7417"};

export default config;
