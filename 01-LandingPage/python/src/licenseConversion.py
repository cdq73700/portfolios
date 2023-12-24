import yaml
import json


class LicenseConversion:
    def __init__(self, locations):
        self.locations = locations

    def run(self):
        for location in self.locations:
            licenses = self.objectConversion(location)
            self.jsonConversion(location, licenses)
            self.mdConversion(location, licenses)

    def objectConversion(self, location):
        licenses = []
        yamlPath = "./license/yaml/"
        yamlFile = yamlPath + "license-" + location + ".yaml"
        with open(yamlFile, "r") as ymalData:
            obj = yaml.safe_load(ymalData)
            for type in obj["License"]:
                for env in obj["License"][type]:
                    for list in obj["License"][type][env]:
                        license = {
                            "name": list["name"],
                            "version": list["version"],
                            "license": list["license"],
                            "install": list["install"],
                            "github": list["github"],
                            "body": list["body"],
                            "location": location,
                            "environment": env,
                        }
                        licenses.append(license)
        return licenses

    def jsonConversion(self, location, licenses):
        outputJsonPath = "./license/json/"
        jsonFile = outputJsonPath + "license-" + location + ".json"
        with open(jsonFile, "w", encoding="utf-8") as f:
            f.write(json.dumps(licenses, indent=2))
            f.close()

    def mdConversion(self, location, licenses):
        outputMdPath = "./license/md/"
        mdFile = outputMdPath + "license-" + location + ".md"
        with open(mdFile, "w", encoding="utf-8") as f:
            for license in licenses:
                name = license["name"]
                version = license["version"]
                licenseInfo = license["license"]
                install = license["install"]
                github = license["github"]
                body = license["body"]
                f.write(f"# {name}")
                f.write("\n\n")
                f.write(f"### {version}")
                f.write("\n\n")
                f.write(f"### {licenseInfo}")
                f.write("\n\n")
                f.write(f"[{install}]({install})")
                f.write("\n\n")
                f.write(f"[{github}]({github})")
                f.write("\n\n")
                f.write(f"{body}")
                f.write("\n\n")
            f.close()


locations = ["backend", "frontend", "python", "swagger"]
licenseConversion = LicenseConversion(locations)
licenseConversion.run()
