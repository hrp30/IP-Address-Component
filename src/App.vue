<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">ip</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style>
/*#ip{*/
/*    border: 1px black;*/
/*}*/
* {
  margin: 0;
  padding: 0;
  font-size: 20px;
  box-sizing: border-box;
}

body {
  background-image: url("./assets/back2.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;

}

.wrapper {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.center {
  margin: auto;
  display: block;
}

input:focus {
  outline: none;
}

.valid {
  border: 3px solid chartreuse;
}

.invalid {
  border: 3px solid crimson;
}

.ipwrapper {
  text-align-all: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  width: 55%;
  height: 10%;
  background: white;
  border: 1px solid black;
  border-radius: 40px;

}

.input {
  width: 100%;
  text-align: center;
  border: none;
  font-style: oblique;
}

.borderleft {
  border-left: 1px solid black;
  border-radius: 40% 0% 0% 40%;;
}

.borderright {
  border-right: 1px solid black;
  border-radius: 0% 40% 40% 0%;;
}

.container {
  border-radius: 6%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 60%;
  height: 400px;
  background: linear-gradient(to top, rgba(229, 233, 234, 0), rgba(229, 233, 234, 1));
  /*opacity: 0.5;*/
}

.ipdot {
  text-align: center;
}

.btn {
  width: 25%;
  height: 10%;
  opacity: 0.5;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.4s;
}

.btn:hover {
  opacity: 1;
  box-shadow: 5px 5px 2px 1px rgba(61, 61, 61, 0.8);
  border: 1px solid rgba(61, 61, 61, 0.8);
  border-radius: 40% ;
}

.font {
  font-family: "Impact";
}

h2 {
  font-family: "Georgia";
}

img {
  width: 20%;
  height: 20%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
