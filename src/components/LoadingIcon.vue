<template>
    <svg id="arcs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
            id="arc1"
            stroke-width="12"
            stroke="#99cccc"
            fill="none"
            d="M56.29045,64.27361a15.59727,15.59727 0 0 1 -10.62368,0.70854
              M40.79405,62.58825a15.59727,15.59727 0 0 1 -5.28754,-6.8329
              M34.40572,49.99976a15.59727,15.59727 0 0 1 13.06673,-15.39063
              M55.16758,35.28235a15.59727,15.59727 0 0 1 10.34227,13.04039"
        ></path>
        <path
            id="arc2"
            stroke-width="10"
            stroke="#336699"
            fill="none"
            d="M19.6806,37.14336 a32.93531,32.93531 0 0 1 38.09796,-19.14791
              M82.81398,47.1407 a32.93531,32.93531 0 0 1 -64.12532,13.0643"
        ></path>
        <path
            id="arc3"
            stroke-width="8"
            stroke="#9efcfc"
            fill="none"
            d="M38.79882,9.87692
              a42.36734,42.36734 0 0 1 38.330636,7.45775
              M92.02837,57.91228
              a42.36734,42.36734 0 0 1 -37.23271,34.22661
              a42.36734,42.36734 0 0 1 -43.48695,-25.819
              a42.36734,42.36734 0 0 1 12.22462,-49.07438"
        ></path>
    </svg>
</template>

<style>
#arc1 {
    animation: rotate 2s infinite;
    transform-origin: 50px;
}

#arc2 {
    animation: rotate2 2s infinite;
    transform-origin: 50px;
}

#arc3 {
    animation: rotate3 2s infinite;
    transform-origin: 50px 50px;
}

.loader {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin: -30px 0px 0px -30px;
    background-color: transparent;
}

@keyframes rotate {
    0% {
        transform: rotate(0);
    }

    50% {
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotate2 {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(-120deg);
    }

    100% {
        transform: rotate(-320deg);
    }
}

@keyframes rotate3 {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(220deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
