import { INotification } from './aurelia-notification';
import { INotificationConfig, Config } from './config';
import { DI, IContainer, IRegistry, Registration } from '@aurelia/kernel';

const DefaultComponents: IRegistry[] = [
    // MyComponent as unknown as IRegistry,
];

function createConfiguration(options?: Partial<any>) {
    return {
        register(container: IContainer): IContainer {
            const config = container.get(Config);

            config.configure(options);

            return container.register(
                Registration.instance(INotificationConfig, config), 
                ...DefaultComponents
            );
        },
        configure(options?) {
            return createConfiguration(options);
        }
    }
}

export const AureliaNotification = createConfiguration({});

export { INotificationConfig, INotification }