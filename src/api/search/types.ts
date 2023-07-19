import type { ReqPage } from "@/api/types";

export interface RoomListQueryInterface extends ReqPage {
  // 省份id
  provinceId: number | string;
  // 城市id
  cityId: number | string;
  // 区域id
  districtId: number | string;
  //   最小租金
  minRent: number | string;
  //   最大租金
  maxRent: number | string;
  //   支付方式
  paymentTypeId: number | string;
  //   	价格排序方式,可用值:desc,asc
  orderType: "desc" | "asc";
}
// 省市区
export interface RegionInterface {
  id: number | string;
  name: string;
  isCheck?: boolean;
  children?: RegionInterface[];
}
export interface LabelValueInterface<T = number | string> {
  label: string;
  value: T;
  isCheck?: boolean;
}
