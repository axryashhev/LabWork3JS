
class Mission1 {
    #list = [];
    #typeList = [];

    addItem(item) {
        this.#list.push(item);
        this.#typeList.push(typeof(item));
        return this;
    }

    executeTypeStr(separator = ' ') {
        return this.#typeList.join(separator);
    }

    executeStr(separator = ' ') {
        return this.#list.join(separator);
    }

    clearAllList() {
        this.#list = [];
        this.#typeList = [];
    }

    methodMission5(isFor = false) {
        if(isFor) {
            for (let i = 0; i < 50; i++) {
                if (i % 2 !== 0) {
                    this.addItem(i);
                }
            }
        }
        else {
            let i = 0;
            while (i < 50) {
                if (i % 2 !== 0) {
                    this.addItem(i);
                }
                i++;
            }
        }

        const result = this.executeStr();
        this.clearAllList();
        return result;
    }

    getList() {
        return this.#list;
    }

    randomInteger(min, max) {
        // случайное число от min до (max)
        let rand = min + Math.random() * (max - min);
        return Math.floor(rand);
    }

}
