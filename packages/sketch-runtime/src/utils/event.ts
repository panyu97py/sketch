type EventType = string | symbol;

export class CustomEvent {
  public readonly type: string

  public readonly payload?: any

  constructor (type: string, payload?: any) {
    this.type = type
    this.payload = payload
  }
}

export type EventListener = (event: CustomEvent) => void

export class EventEmitter {
  private events: Map<EventType, Set<EventListener>> = new Map()

  public addEventListener (eventType: EventType, listener: EventListener): void {
    if (!this.events.has(eventType)) this.events.set(eventType, new Set())
    this.events.get(eventType)!.add(listener)
  }

  public dispatchEvent (event: CustomEvent): void {
    if (!this.events.has(event.type)) return
    this.events.get(event.type)!.forEach(listener => listener(event))
  }

  public removeEventListener (eventType: EventType, listener: EventListener): void {
    if (this.events.has(eventType)) return
    this.events.get(eventType)!.delete(listener)
  }
}
