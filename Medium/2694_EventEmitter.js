class EventEmitter {
    eventOrder = 0;
    eventList = [];
    
  subscribe(event, cb) {
      const eventId = ++this.eventOrder;
      
     this.eventList.push({eid: eventId, eventItem: event, callback: cb});
    return {
        unsubscribe: () => {
            return this.eventList.splice(this.eventList.indexOf(el => el.eid === eventId) - 1, 1);
        }
    };
  }
  emit(event, args = []) {
    const currentEventList = this.eventList.filter(evt => evt.eventItem === event);
    
    const resultList = currentEventList.map(evt => evt.callback(...args));

    return resultList;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

export default EventEmitter;