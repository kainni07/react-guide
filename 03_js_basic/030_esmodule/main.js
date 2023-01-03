import { hello, User } from "./module.js";
// デフォルトimportは{}不要.変数名を変更できる.
import functionB from "./module.js";

hello();

const user = new User('Kai');
user.hello();
functionB();