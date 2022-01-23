const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "https://sonarcloud.io",
    token: "SONAR_TOKEN",
    options: {
      "sonar.sources": "./src",
      "sonar.exclusions": "**/tests/**",
      "sonar.tests": "./src/tests",
      "sonar.test.inclusions": "./src/tests/**/*.test.tsx,./src/tests/**/*.test.ts",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "./test-report.xml",
    },
  },
  () => {},
);