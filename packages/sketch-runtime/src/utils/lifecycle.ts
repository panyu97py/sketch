import noop from 'lodash-es/noop'

type Constructor<T> = new (...args: any[]) => T;

interface LifecycleComponent {
  onInit?: () => void;
}

export const lifecycle = <T extends Constructor<LifecycleComponent>>(Target:T) => {
  return class extends Target {
    constructor (...args: any[]) {
      super(...args)
      const instanceProxy = new Proxy(this, {
        get (target: any, propertyKey: string | symbol, receiver: any): any {
          if (propertyKey === 'onMount') return target[propertyKey].bind(target) || noop
          return Reflect.get(target, propertyKey, receiver)
        },
        set (target: any, propertyKey: string | symbol, newValue: any, receiver: any): boolean {
          return Reflect.set(target, propertyKey, newValue, receiver)
        }
      })
      instanceProxy.onMount()
      return instanceProxy
    }
  }
}
