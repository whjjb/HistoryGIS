<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as Cesium from "cesium";

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmODAzNGUxMy05N2M2LTQyMjEtODZmYS1kN2ZmMTBlNTkzODUiLCJpZCI6MjMyMDgyLCJpYXQiOjE3MjI1MTkyOTF9.glY9aALbEygEG_I0z1fgv4HOKS8W59FSFSYmd5I99j0";
  const viewer = new Cesium.Viewer("cesiumContainer", {
    animation: false,
    timeline: false,
  });
  viewer._cesiumWidget._creditContainer.style.display = "none";
});
</script>

<style scoped>
#cesiumContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
