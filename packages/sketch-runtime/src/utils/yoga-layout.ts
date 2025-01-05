import { loadYoga, Yoga } from 'yoga-layout/load'

export class YogaLayoutUtils {
  private static instance: Promise<Yoga>

  public static load () {
    if (!this.instance) this.instance = loadYoga()
    return this.instance
  }
}
