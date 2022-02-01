import { authService } from "@/fibase";

const login = async ({ email, password }) => {
  try {
    return await authService.signInWithEmailAndPassword(email, password);
  } catch(e) {
    console.log({ e });
    switch (e.code) {
      case "auth/invalid-email":
        return { error: true, alert: true, message: "이메일 구조가 아닙니다." }
      case "auth/user-not-found":
        return { error: true, alert: true, message: "가입한 이메일이 없습니다." }
      default:
        console.log({ e });
        return { error: true, alert: true, message: "알 수 없는 에러가 발생했습니다."}
    }
  }
}
const register = async ({ email, password }) => {
  try {
    return await authService.createUserWithEmailAndPassword(email, password);
  } catch(e) {
    const error = e.errors[0];
    switch (error.message) {
      case "WEAK_PASSWORD : Password should be at least 6 characters":
        return { error: true, alert: true, message: "비밀번호를 6자 이상 입력하세요" }
      case "EMAIL_EXISTS":
        return { error: true, alert: true, message: "이미 존재하는 이메일입니다." }
      case "MISSING_PASSWORD":
        return { error: true, alert: true, message: "비밀번호를 입력하세요." }
      case "INVALID_EMAIL":
        return { error: true, alert: true, message: "적절하지 않은 형식의 이메일입니다." }   
      default:
        console.log({ e });
        return { error: true, alert: true, message: "알 수 없는 에러가 발생했습니다."}
    }
  }
}

export default { login, register };
