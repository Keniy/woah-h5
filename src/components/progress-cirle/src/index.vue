<template>
    <div class="progress-circle">
        <svg :width="width" :height="height" viewBox="-50 -50 100 100">
            <circle 
                cx="0" 
                cy="0" 
                :r="r" 
                fill="none"
                stroke-width="6"  
                stroke="#F7F8FA"/>
            <path 
                :d="d" 
                fill="none" 
                stroke-width="5" 
                :stroke="color"  
                class="svg-round-path"
                stroke-linecap="round"/>
                
            <text text-anchor="middle" dominant-baseline="middle" y="-6" fill="rgba(0,0,0,0.88)">{{ label }}</text>
            <text text-anchor="middle" dominant-baseline="text-before-edge" y="4" fill="rgba(0,0,0,0.88)">{{ ratio }}%</text>
        </svg>
    </div>
</template>

<script src="./js/index"></script>

<style lang="scss" scoped>
.svg-round-path{
    transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s;
    transform: rotateZ(90deg) rotateY(180deg);
}
</style>
