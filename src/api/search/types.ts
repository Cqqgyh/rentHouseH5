import type { ReqPage } from "@/api/types";
import type { SearchOrderType } from "@/enums/constEnums";

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
  orderType: SearchOrderType | "";
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
// 支付方式信息列表
export interface PaymentInfoInterface {
  id: number;
  name: string;
  payMonthCount: string;
  additionalInfo: string;
  isCheck?: boolean;
}
// 房间的信息
export interface RoomInterface {
  id: number | string;
  roomNumber: number | string;
  rent: number | string;
  apartmentId: number | string;
  isRelease: string | number;
  leaseEndDate: string;
  checkInStatus: string;
  apartmentInfo: ApartmentInterface;
  // 	属性信息列表
  attrValueVoList?: any[];
  // 	公寓配套信息
  facilityInfoList?: FacilityInfoInterface[];
  // 公寓标签信息
  labelInfoList?: LabelInfoInterface[];
  // 	支付方式列表
  paymentTypeList?: PaymentInfoInterface[];
  // 可选租期列表
  leaseTermList?: TermInfoInterface[];
  // 图片信息
  graphVoList?: {
    url: string;
    name: number;
  }[];
}
export interface ApartmentInterface {
  id: number | string;
  name: string;
  introduction: string;
  districtId: number | string;
  districtName: string;
  cityId: number | string;
  cityName: string;
  provinceId: number | string;
  provinceName: string;
  addressDetail: string;
  latitude: number | string;
  longitude: number | string;
  phone: string;
  isRelease: string | number;
}
// 标签信息
export interface LabelInfoInterface {
  id: number | string;
  type: string;
  name: string;
}
// 配套信息
export interface FacilityInfoInterface {
  id: number | string;
  type: string;
  name: string;
  icon: string | null;
}
// 租期信息列表
export interface TermInfoInterface {
  id: number;
  unit: string;
  monthCount: string;
}
