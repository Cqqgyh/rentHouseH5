import http from "@/utils/http";
import type {
  PaymentInfoInterface,
  RegionInterface,
  RoomDetailInterface,
  RoomInterface,
  RoomListQueryInterface
} from "@/api/search/types";
import type { PageRes } from "@/api/types";
/**
 * @description 分页查询房间列表
 * @param params
 */
export function getRoomList(params: Partial<RoomListQueryInterface>) {
  return http.get<PageRes<RoomInterface>>(`/app/room/pageItem`, params);
}
/**
 * @description 查询省市区列表
 */
export function getRegionList() {
  return http.get<RegionInterface[]>(`/app/region/listAsTree`);
}
/**
 * @description 查询省份列表
 */
export function getProvinceList() {
  return http.get<RegionInterface[]>(`/app/region/province/list`);
}
/**
 * @description 查询城市列表
 * @param provinceId
 */
export function getCityList(provinceId: number | string) {
  return http.get<RegionInterface[]>(
    `/app/region/city/listByProvinceId?id=${provinceId}`
  );
}
/**
 * @description 查询区域列表
 * @param cityId
 */
export function getDistrictList(cityId: number | string) {
  return http.get<RegionInterface[]>(
    `/app/region/district/listByCityId?id=${cityId}`
  );
}
/**
 * @description 获取支付方式列表
 */
export function getPaymentTypeList() {
  return http.get<PaymentInfoInterface[]>(`/app/payment/list`);
}
/**
 * @description 根据id获取房间的详细信息
 * @param id
 */
export function getRoomDetailById(id: number | string) {
  return http.get<RoomDetailInterface>(`/app/room/getDetailById?id=${id}`);
}
