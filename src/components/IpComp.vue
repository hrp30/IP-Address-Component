<template>
  <div class="container ">
    <h2 style="font-size: xx-large">Ip Component</h2>
    <div class="ipwrapper font">
      <input class="input borderleft"
             type="text"
             required
             ref="ip1"
             id="ip1"
             @focus="setIndex(1)"
             min=""
             v-model="ipaddress[0]"
             pattern="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
             @input="check"/>
      <div>.</div>
      <input class="input"
             type="text"
             required
             id="ip2"
             @focus="setIndex(2)"
             ref="ip2"
             min="0"
             v-model="ipaddress[1]"
             pattern="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
             @input="check"/>
      <div>.</div>
      <input class="input"
             type="text"
             required
             id="ip3"
             @focus="setIndex(3)"
             ref="ip3"
             min="0"
             v-model="ipaddress[2]"
             pattern="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
             @input="check"/>
      <div>.</div>
      <input class="input borderright"
             type="text"
             required
             id="ip4"
             @focus="setIndex(4)"
             ref="ip4"
             min="0"
             v-model="ipaddress[3]"
             pattern="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
             @input="check"/>
    </div>
    <button class="btn font">Save</button>
    <p style="color: rgba(255,255,255,0.3)">Hint : 192.168.1.1</p>
  </div>
</template>

<script>
export default {
  name: "IpComp",
  data() {
    return {
      ipaddress: ["", "", "", ""],
      fine: "ip status",
      index: 1,
    };
  },
  computed: {
    fullIpaddress() {
      return [
        this.ipaddress[0],
        this.ipaddress[1],
        this.ipaddress[2],
        this.ipaddress[3],
      ].join(".");
    },
    currentElement() {
      // eslint-disable-next-line no-unused-vars
      let elementObj;
      return (elementObj = document.getElementById("ip" + this.index));
    },
  },
  methods: {
    check() {
      if (this.currentElement.value.length >= 3) {
        this.ipaddress[this.index - 1] = this.ipaddress[this.index - 1].slice(0, 3);
        if (this.index < 4) this.index++;
        this.currentElement.focus();
      }
      if (this.ipaddress[0] > 255) {
        this.ipaddress[0] = 255
        alert("maximum range is 255")
      }
      if (this.ipaddress[1] > 255) {
        this.ipaddress[1] = 255
        alert("maximum range is 255")
      }
      if (this.ipaddress[2] > 255) {
        this.ipaddress[2] = 255
        alert("maximum range is 255")
      }
      if (this.ipaddress[3] > 255) {
        this.ipaddress[3] = 255
        alert("maximum range is 255")
      }
    },
    focusChanged(event) {
      const el = event.target
      if (el.id == "ip2") {
        if (this.ipaddress[1].length < 1) {
          el.onkeydown = (event)=> {
            var key = event.keyCode || event.charCode
            if (key == 8) {
              if (this.ipaddress[1].length <1 )
              document.querySelector("#ip1").focus()
            }
          }
        }
      }
      if (el.id == "ip3") {
        if (this.ipaddress[2].length < 1) {
          el.onkeydown = (event)=> {
            var key = event.keyCode || event.charCode
            if (key == 8) {
              if (this.ipaddress[2].length <1 )
                document.querySelector("#ip2").focus()
            }
          }
        }
      }
      if (el.id == "ip4") {
        if (this.ipaddress[3].length < 1) {
          el.onkeydown = (event)=> {
            var key = event.keyCode || event.charCode
            if (key == 8) {
              if (this.ipaddress[3].length <1 )
                document.querySelector("#ip3").focus()
            }
          }
        }
      }
    },



    setIndex(index) {
      this.index = index
    }
  },
  mounted() {
    let number = document.getElementsByTagName("input");
    for (let i = 0; i < number.length; i++) {
      if (number.item(i)) {
        number.item(i).onkeydown = function (e) {
          if (
              !(
                  (e.keyCode > 95 && e.keyCode < 106) ||
                  (e.keyCode > 47 && e.keyCode < 58) ||
                  e.keyCode == 8
              )
          ) {
            return false;
          }
        };
      }
    }

    // Focus next input on Space
    let inputs = document.getElementsByTagName("input");
    const inputOnEnter = (evt) => {
      if (evt.keyCode == 13 || evt.keyCode == 39) {
        let index = Object.keys(inputs).filter((a) => inputs[a] === evt.target);
        let nextIndex = parseInt(index) + 1;
        if (inputs[nextIndex]) {
          inputs[nextIndex].focus();
        }
      }

      if (evt.keyCode == 37) {
        let index = Object.keys(inputs).filter((a) => inputs[a] === evt.target);
        let nextIndex = parseInt(index) - 1;
        if (inputs[nextIndex]) {
          inputs[nextIndex].focus();

        }
      }
    };
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].onkeyup = inputOnEnter;
    }
  },
  created() {
    document.addEventListener('focusin', this.focusChanged)
  },
}
</script>

<style scoped>

</style>