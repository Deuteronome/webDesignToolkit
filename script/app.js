import { startAnim } from "./startAnim.js";
import { pageNavigation } from "./pageNavigation.js";
import { tileManager } from "./tileManager.js";
import { onPhone } from "./onPhone.js";

let isOnPhone = onPhone()



startAnim()
pageNavigation(isOnPhone)
tileManager(isOnPhone)