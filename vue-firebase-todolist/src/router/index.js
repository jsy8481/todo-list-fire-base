import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
console.log(Login);

// 1. 라우트 컴포넌트를 정의하세요.
// 아래 내용들은 다른 파일로부터 가져올 수 있습니다.
const Bar = { template: "<div>bar</div>" };

// 2. 라우트를 정의하세요.
// Each route should map to a component. The "component" can
// 각 라우트는 반드시 컴포넌트와 매핑되어야 합니다.
// "component"는 `Vue.extend()`를 통해 만들어진
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체입니다.
const routes = [
  { path: "/", component: Login },
  { path: "/bar", components: Bar },
];

const router = new VueRouter({
  routes,
});

export default router;
