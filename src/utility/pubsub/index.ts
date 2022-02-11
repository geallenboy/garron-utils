
class Pubsub {
  topics: {};
  subUid: number;
  constructor() {
    this.topics = {}
    this.subUid = -1;
  }
  // 发布事件
  publish(topic,args){
    if(!this.topics[topic]) return false;
    let subscribers = this.topics[topic];
    let len:number = subscribers?subscribers.length:0;
    while(len--){
      subscribers[len].func(topic,args)
    }
    return this;
  }

  // 订阅事件
  subscribe(topic,func){
    if(!this.topics[topic]) this.topics[topic] = [];
    let token:string = (++this.subUid).toString();
    this.topics[topic].push({
      token:token,
      func:func
    })
    return token;
  }

  unsubscribe(token:string){
    for (const m in this.topics) {
      if(this.topics[m]){
        for(let i=0;i<this.topics[m].length;i++){
          if(this.topics[m][i].token === token){
            this.topics[m].splice(i,1);
            return token;
          }
        }
      }
    }
  }


}

export default Pubsub;