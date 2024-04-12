class Command {
  execute() {
    throw new Error("execute method must be implemented");
  }

  undo() {
    throw new Error("undo method must be implemented");
  }
}

class PowerOnCommand extends Command {
  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.powerOn();
  }

  undo() {
    this.tv.powerOff();
  }
}

class PowerOffCommand extends Command {
  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.powerOff();
  }

  undo() {
    this.tv.powerOn();
  }
}

class ChangeChannelCommand extends Command {
  constructor(tv, channel) {
    super();
    this.tv = tv;
    this.channel = channel;
    this.previousChannel = null;
  }

  execute() {
    this.previousChannel = this.tv.getCurrentChannel();
    this.tv.changeChannel(this.channel);
  }

  undo() {
    this.tv.changeChannel(this.previousChannel);
  }
}

class AdjustVolumeCommand extends Command {
  constructor(tv, volume) {
    super();
    this.tv = tv;
    this.volume = volume;
    this.previousVolume = null;
  }

  execute() {
    this.previousVolume = this.tv.getCurrentVolume();
    this.tv.adjustVolume(this.volume);
  }

  undo() {
    this.tv.adjustVolume(this.previousVolume);
  }
}

class TV {
  constructor() {
    this.poweredOn = false;
    this.currentChannel = 1;
    this.currentVolume = 10;
  }

  powerOn() {
    this.poweredOn = true;
    console.log("TV is powered on.");
  }

  powerOff() {
    this.poweredOn = false;
    console.log("TV is powered off.");
  }

  changeChannel(channel) {
    this.currentChannel = channel;
    console.log(`Channel changed to ${channel}.`);
  }

  adjustVolume(volume) {
    this.currentVolume = volume;
    console.log(`Volume adjusted to ${volume}.`);
  }

  getCurrentChannel() {
    return this.currentChannel;
  }

  getCurrentVolume() {
    return this.currentVolume;
  }
}

class RemoteControl {
  constructor() {
    this.commandHistory = [];
  }

  pressButton(command) {
    command.execute();
    this.commandHistory.push(command);
  }

  pressUndoButton() {
    if (this.commandHistory.length > 0) {
      const lastCommand = this.commandHistory.pop();
      lastCommand.undo();
    } else {
      console.log("No commands to undo.");
    }
  }
}

const tv = new TV();
const remoteControl = new RemoteControl();

const powerOnCommand = new PowerOnCommand(tv);
const powerOffCommand = new PowerOffCommand(tv);
const changeChannelCommand = new ChangeChannelCommand(tv, 5);
const adjustVolumeCommand = new AdjustVolumeCommand(tv, 15);

remoteControl.pressButton(powerOnCommand);
remoteControl.pressButton(changeChannelCommand);
remoteControl.pressButton(adjustVolumeCommand);
remoteControl.pressUndoButton();
remoteControl.pressButton(powerOffCommand);
