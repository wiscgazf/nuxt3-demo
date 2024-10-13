export interface IUser {
  name: string;
  age: number;
  id: string;
}

// 计数器
export const useCounter = () => useState("count", () => 0);

// 用户信息
export const useUsers = () =>
  useState<IUser>("users", () => {
    return {
      name: "zhoufei",
      age: 28,
      id: "000",
    };
  });
