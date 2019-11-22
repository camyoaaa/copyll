<template>
    <transition-group tag="ul" class="draw-list list-unstyled" :css="false" @leave="leave" @after-leave="afterLeave">
        <li v-for="(cash) in cashList" :key="cash.id">
            <span class="text-gray">{{ cash.t }}</span>
            <span>{{ cash.i }}提现</span>
            <span class="text-orange">{{ cash.p }}元</span>
        </li>
    </transition-group>
</template>
<script>
import adData from "./adData.js";
const cashList = adData.data.list2.l2.map((c, index) => ({ ...c, id: index }));

export default {
    data() {
        return {
            cashList: cashList,
            timer: null,
            head: null
        };
    },
    methods: {
        shiftAddPush() {
            this.head = this.cashList.shift();
        },
        leave(el, done) {
            let elWidth = el.offsetWidth;
            this.$velocity(
                el,
                { marginLeft: -elWidth },
                { complete: done, duration: 2000 }
            );
        },
        afterLeave() {
            this.head &&
                this.cashList.push({ ...this.head, id: new Date().getTime() });
        },
        startScroll() {
            this.timer = setInterval(() => {
                this.shiftAddPush();
            }, 3000);
        },
        closeScroll() {
            this.timer && clearInterval(this.timer);
        }
    },
    mounted() {
        this.startScroll();
    },
    destroyed() {
        this.closeScroll();
    }
};
</script>
