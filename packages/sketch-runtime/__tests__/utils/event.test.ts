import { EventEmitter, Event } from '@/utils/event'

describe('EventEmitter', () => {
  test('EventEmitter.addEventListener', () => {
    // 创建事件发射器
    const eventEmitter = new EventEmitter()

    // 创建事件监听器
    const listener = jest.fn()

    // 监听事件
    jest.spyOn(eventEmitter, 'addEventListener')
    eventEmitter.addEventListener('event', listener)

    // 验证事件添加
    expect(eventEmitter.addEventListener).toHaveBeenCalledWith('event', listener)
  })

  test('EventEmitter.dispatchEvent', () => {
    // 创建事件发射器
    const eventEmitter = new EventEmitter()

    // 添加监听器
    const listener = jest.fn()
    eventEmitter.addEventListener('waitApplyEvent', listener)

    // 触发事件
    const payload = expect.any(Object)
    const canNotApplyEvent = new Event('canNotApplyEvent', payload)
    const waitApplyEvent = new Event('waitApplyEvent', payload)
    jest.spyOn(eventEmitter, 'dispatchEvent')
    eventEmitter.dispatchEvent(canNotApplyEvent)
    eventEmitter.dispatchEvent(waitApplyEvent)

    // 验证事件触发
    expect(eventEmitter.dispatchEvent).toHaveBeenCalledWith(canNotApplyEvent)
    expect(eventEmitter.dispatchEvent).toHaveBeenCalledWith(waitApplyEvent)
    expect(listener).not.toHaveBeenCalledWith(canNotApplyEvent)
    expect(listener).toHaveBeenCalledWith(waitApplyEvent)
  })

  test('EventEmitter.removeEventListener', () => {
    const eventEmitter = new EventEmitter()

    // 添加事件监听器
    const waitApplyListener = jest.fn()
    eventEmitter.addEventListener('waitApplyEvent', waitApplyListener)

    // 验证事件正确移除
    const waitRemoveListener = jest.fn()
    jest.spyOn(eventEmitter, 'removeEventListener')
    eventEmitter.addEventListener('waitApplyEvent', waitRemoveListener)
    eventEmitter.removeEventListener('waitApplyEvent', waitRemoveListener)
    expect(eventEmitter.removeEventListener).toHaveBeenCalledWith('waitApplyEvent', waitRemoveListener)

    // 验证事件错误移除
    const canNotRemoveListener = jest.fn()
    eventEmitter.removeEventListener('canNotRemoveEvent', canNotRemoveListener)
    expect(eventEmitter.removeEventListener).toHaveBeenCalledWith('canNotRemoveEvent', canNotRemoveListener)

    // 验证事件触发
    const payload = expect.any(Object)
    const event = new Event('waitApplyEvent', payload)
    eventEmitter.dispatchEvent(event)
    expect(waitApplyListener).toHaveBeenCalledWith(event)
    expect(canNotRemoveListener).not.toHaveBeenCalled()
    expect(waitRemoveListener).not.toHaveBeenCalled()
  })
})
