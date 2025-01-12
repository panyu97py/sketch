import { loadYoga, Yoga } from '@sketchjs/yoga-layout'

export class YogaLayoutUtils {
  private static instance: Promise<Yoga>

  public static load () {
    if (!this.instance) this.instance = loadYoga()
    return this.instance
  }
}
