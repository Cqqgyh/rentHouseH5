import type { ReqPage } from "@/api/types";
import type { SearchOrderType } from "@/enums/constEnums";
import type { AppointmentStatus } from "@/enums/constEnums";

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
  minRent?: number | string;
  // 	公寓配套id
  facilityInfoIds?: number[];
  // 	公寓配套信息
  facilityInfoList?: FacilityInfoInterface[];
  // 公寓标签信息
  labelInfoList?: LabelInfoInterface[];
  // 	公寓杂费值信息
  feeValueVoList?: FeeInfoInterface["feeValueList"];
  // 图片信息
  graphVoList?: {
    url: string;
    name: number;
  }[];
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
// 房间 详情信息
export interface RoomDetailInterface {
  id: number | string;
  roomNumber: number | string;
  rent: number | string;
  apartmentId: number | string;
  isRelease: string | number;
  leaseEndDate: string;
  checkInStatus: string;
  appApartmentItemVo: ApartmentInterface;
  // 	属性信息列表
  attrValueVoList?: AttrValueInfoInterface[];
  // 	公寓配套信息
  facilityInfoList?: FacilityInfoInterface[];
  // 公寓标签信息
  labelInfoList?: LabelInfoInterface[];
  // 	支付方式列表
  paymentTypeList?: PaymentInfoInterface[];
  // 可选租期列表
  leaseTermList?: TermInfoInterface[];
  // 	公寓杂费值信息
  feeValueVoList?: FeeValueInfoInterface[];
  // 图片信息
  graphVoList?: {
    url: string;
    name: number;
  }[];
}
// 杂费值信息
export interface FeeInfoInterface {
  id: number | string;
  name: string;
  feeValueList: FeeValueInfoInterface[];
}
export interface FeeValueInfoInterface {
  id: number | string;
  name: string;
  unit: string;
  feeKeyId: number | string;
  feeKeyName?: number | string;
}
// 房间基本信息
export interface AttrValueInfoInterface {
  id: number | string;
  name: string;
  attrKeyId: number | string;
  attrKeyName?: string;
}
// 预约请求接口
export interface AppointmentQueryInterface {
  id?: number | string;
  // 用户姓名
  name: string;
  // phone	用户手机号码
  phone: string;
  // apartmentId	公寓id
  apartmentId: number | string;
  // appointmentTime	预约时间
  appointmentTime: string;
  // 	备注信息
  additionalInfo: string;
  // 预约状态
  appointmentStatus?: AppointmentStatus;
}
export interface AppointmentInfoInterface extends AppointmentQueryInterface {
  appApartmentItemVo: ApartmentInterface;
}
// 预约列表
export interface AppointmentItemInterface {
  id: number | string;
  apartmentName: string;
  graphVoList: {
    url: string;
    name: number;
  }[];
  appointmentTime: string;
  appointmentStatus: AppointmentStatus;
}
