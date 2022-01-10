
import { _decorator, Component, Node, input, Input, EventTouch, Vec3, view } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = NewComponent
 * DateTime = Mon Jan 10 2022 13:55:13 GMT+0800 (中国标准时间)
 * Author = unbrella_man
 * FileBasename = NewComponent.ts
 * FileBasenameNoExtension = NewComponent
 * URL = db://assets/NewComponent.ts
 * ManualUrl = https://docs.cocos.com/creator/3.5/manual/en/
 *
 */
 
@ccclass('NewComponent')
export class NewComponent extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    logo!: Node;

    start() {
        input.on(Input.EventType.TOUCH_START, this.move, this);
        input.on(Input.EventType.TOUCH_MOVE, this.move, this);
        input.on(Input.EventType.TOUCH_END, this.move, this);
    }

    move(e: EventTouch) {
        const location = e.getUILocation();
        const vs = view.getVisibleSize();
        this.logo.setPosition(new Vec3(location.x - vs.width/2, location.y-vs.height/2, 1));
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.5/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.5/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.5/manual/en/scripting/life-cycle-callbacks.html
 */
