type EventP = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventP, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK