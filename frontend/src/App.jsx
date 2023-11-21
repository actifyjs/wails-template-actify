import { Greet } from "../wailsjs/go/main/App";

import { useState } from "react";
import { Icon, Button, Spacer, Divider, Dialog, IconButton } from "actify";

export default function App() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const handleClick = async () => {
    const _msg = await Greet("Wails with Actify");
    setMsg(_msg);
  };

  return (
    <div className="grid h-screen place-content-center">
      <Button onClick={() => setOpen(true)}>Click</Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <Dialog.Content>
          <Dialog.Heading>
            <p>Hello Developer</p>
            <Spacer />
            <Dialog.Close>
              <IconButton color="secondary">
                <Icon name="x" />
              </IconButton>
            </Dialog.Close>
          </Dialog.Heading>
          <Dialog.Description>
            <p>
              Actify is an open source react component library written in Vite +
              React + Tailwind CSS based on Google's Material Design 3. Highly
              inspired by Vuetify. You can use it for write react pages.
            </p>
            <Divider />
            <p className="font-bold text-xl text-error">
              This content is from go:
              <br /> {msg}
            </p>
          </Dialog.Description>
          <div className="flex items-center gap-2">
            <Spacer />
            <Dialog.Close>
              <Button color="error">Cancel</Button>
            </Dialog.Close>
            <Button onClick={handleClick}>Confirm</Button>
          </div>
        </Dialog.Content>
      </Dialog>
    </div>
  );
}
