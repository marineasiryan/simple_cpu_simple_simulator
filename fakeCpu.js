class FakeCpu {
    constructor() {
        this.registors = {
            reg1: null,
            reg2: null,
            reg3: null,
            reg4: null,
            reg5: null,
            reg6: null,
            reg7: null,
            reg8: null,
            reg9: null,
            reg10: null,
            flag: null
        }
    }

    movR(arg1, arg2) {
        this.registors[arg1] = this.registors[arg2];
    }

    movI(arg1, arg2) {
        this.registors[arg1] = arg2;
    }

    addR(arg1, arg2) {
        this.registors[arg1] += this.registors[arg2];
    }

    addI(arg1, arg2) {
        this.registors[arg1] += arg2;
    }

    subR(arg1, arg2) {
        this.registors[arg1] -= this.registors[arg2];
    }

    subI(arg1, arg2) {
        this.registors[arg1] -= arg2;
    }

    mulR(arg1, arg2) {
        this.registors[arg1] *= this.registors[arg2];
    }

    mulI(arg1, arg2) {
        this.registors[arg1] *= arg2;
    }

    divR(arg1, arg2) {
        this.registors[arg1] /= this.registors[arg2];
    }

    divI(arg1, arg2) {
        this.registors[arg1] /= arg2;
    }

    andR(arg1, arg2) {
        this.registors[arg1] &= this.registors[arg2];
    }

    andI(arg1, arg2) {
        this.registors[arg1] &= arg2;
    }

    orR(arg1, arg2) {
        this.registors[arg1] |= this.registors[arg2];
    }

    orI(arg1, arg2) {
        this.registors[arg1] |= arg2;
    }

    xorR(arg1, arg2) {
        this.registors[arg1] ^= this.registors[arg2];
    }

    xorI(arg1, arg2) {
        this.registors[arg1] ^= arg2;
    }

    not(arg1) {
        this.registors[arg1] = ~this.registors[arg1]
    }

    cmpR(arg1, arg2) {
        if (this.registors[arg1] > this.registors[arg2]) {
            this.registors.flag = 1;
        } else if (this.registors[arg1] < this.registors[arg2]) {
            this.registors.flag = -1;
        } else {
            this.registors.flag = 0;
        }
    }
    cmpI(arg1, arg2) {
        if (arg1 > arg2) {
            this.registors.flag = 1;
        } else if (arg1 < arg2) {
            this.registors.flag = -1;
        } else {
            this.registors.flag = 0;
        }
    }
}

module.exports = FakeCpu;