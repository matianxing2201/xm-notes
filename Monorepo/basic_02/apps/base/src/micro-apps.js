export default [
    {
        name: "vue-project",
        entry: "//localhost:3002",
        activeRule: "/vue", // localhost:3000/vue
        container: "#app-root", // 挂载到哪个容器中
        props: {
            name: 'vue子应用'
        }, // 传递给子应用的数据
    }, 
    {
        name: "react-project",
        entry: "//localhost:3001",
        activeRule: "/react", // localhost:3000/react
        container: "#app-root", 
        props: {
            name: 'react子应用'
        }, 
    }
]