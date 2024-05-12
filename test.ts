import { hookFunction } from './SDK';
import { modData } from './modDefinitions';

function initWait() {
    console.log('Init wait');
    if (CurrentScreen == null || CurrentScreen === 'Login') {
      hookFunction('LoginResponse', 0, (args, next) => {
        //conDebug(`Init! LoginResponse caught: `, args);
        next(args);
        const response = args[0];
        if (response && typeof response.Name === 'string' && typeof response.AccountName === 'string') {
          init();
        }
      });
    } else {
        console.log(`Already logged in, init`);
      init();
    }
  }

  export function init() {
    if (window.SaraTestModLoaded) return;
    window.SaraTestModLoaded = true;

    //TODO: add a module system like I see in themed, this following bit of code is just to test the bc modded sdk(adds ", Mistress." to the end of a message when player's owner is in the room)

    hookFunction("ChatRoomSendChat", 10, (args, next) => {
			const chat = document.getElementById("InputChat") as HTMLTextAreaElement | null;
			let substituteBack: string | null = null;
      const mistressInRoom = false;
      for(i in ChatRoomCharacter){
        if(ChatRoomCharacter.MemberNumber == Player.Ownership.MemberNumber) mistressInRoom = true;
      }
			if (chat) {
				const msg = chat.value.trim();
				if (/^[.\s]*$/.test(msg)) {
					// Do not process as command
				}  else if (msg.startsWith(".")) {
					return;
				}
			}
			const result = next(args);
      if(mistressInRoom) return result + ", Mistress.";
      return result;
		});



    console.log(`${modData.FullModName} Loaded! Version: ${modData.ModVersion}`);
}

initWait();