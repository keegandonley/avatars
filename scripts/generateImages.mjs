import fs from "fs";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const files = await fs.readdirSync(path.join(__dirname, "../webapp/avatars"));

let imports = "";
let components = "";

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const name = `image${i}.jpg`;
  await fs.renameSync(
    path.join(__dirname, "../webapp/avatars", file),
    path.join(__dirname, "../webapp/avatars", name)
  );
  imports += `import image${i} from '../avatars/${name}'\n`;
  components += `<Tile src={image${i}} />\n`;
}

console.log(imports);
console.log("");
console.log(components);
