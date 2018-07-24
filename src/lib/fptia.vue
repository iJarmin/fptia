<template>
  <div style="" id="fptia">
    <div @click="showInfoPanel" class="buttonPanel">

    </div>
    <div @click="hideInfoPanel" v-show="infoPanelDisplay" class="infoPanel">
      <div @click="clearLog" class="clearButton">清除(clear)</div>
      <ul id="infoMain">

      </ul>
    </div>
  </div>
</template>

<script>

  window.onerror = function (message, url, line, column, error) {
    var dom=document.createElement('li')
    dom.innerText='error::::'+message+url+line+column+error
    document.getElementById('infoMain').appendChild(dom)
    document.getElementsByClassName('buttonPanel')[0].style.backgroundColor='red'
  }

  export default {
    name: 'fptia',
    data () {
      return {
        infoPanelDisplay:false
      }
    },
    mounted:function(){

    },
    methods:{
      showInfoPanel:function () {
        this.infoPanelDisplay=true;
      },
      hideInfoPanel:function () {
        this.infoPanelDisplay=false;
        document.getElementsByClassName('buttonPanel')[0].style.backgroundColor='#cccccc'
      },
      log:function (val) {
        var dom=document.createElement('li')
        dom.classList.add('log')
        dom.innerText=val
        document.getElementById('infoMain').appendChild(dom)
        document.getElementsByClassName('buttonPanel')[0].style.backgroundColor='#e4d31f'
      },
      clearLog:function () {
        document.getElementById('infoMain').innerHTML=''
      }
    }
  }
</script>

<style>
  @import "./index.css";
</style>
