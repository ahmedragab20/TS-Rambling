type light = 'light';
type dark = 'dark';
type theme = light | dark;
interface User {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
interface BasicSettings {
  readonly name: string;
  readonly version: string;
  theme: theme;
}

type BasicSettingsKeys = keyof BasicSettings;

interface AdvancedSettings extends User {
  subscription(): void;
  logout(): void;
  changeTheme(theme: theme): void;
}

interface Settings extends BasicSettings, AdvancedSettings {}

class UserSettings implements Settings {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly version: string;
  theme: theme;

  constructor(user: User, settings: BasicSettings) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.version = settings.version;
    this.theme = settings.theme;
  }

  subscription() {
    console.log('subscription');
  }

  logout() {
    console.log('logout');
  }

  changeTheme(theme: theme) {
    this.theme = theme;
  }
}
